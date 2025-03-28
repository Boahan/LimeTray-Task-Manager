import React, { useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';
import type { Task } from '../types';

export function TaskList() {
  const { tasks, toggleTask, deleteTask, filter, moveTask } = useTaskContext();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    moveTask(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskItem
                    task={task}
                    provided={provided}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

function TaskItem({
  task,
  provided,
  onToggle,
  onDelete,
}: {
  task: Task;
  provided: any;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 
                rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
                hover:shadow-md transition-all duration-200
                ${task.completed ? 'opacity-75' : ''}`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        {task.completed ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <Circle />
        )}
      </button>
      
      <span
        className={`flex-1 text-gray-800 dark:text-gray-200
                  ${task.completed ? 'line-through text-gray-400' : ''}`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 
                 hover:text-red-500 transition-all duration-200"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}