import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Task, TaskContextType, Filter } from '../types';

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useLocalStorage<Filter>('filter', 'all');

  const addTask = useCallback((title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [...prev, newTask]);
  }, [setTasks]);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, [setTasks]);

  const moveTask = useCallback((fromIndex: number, toIndex: number) => {
    setTasks((prev) => {
      const result = [...prev];
      const [removed] = result.splice(fromIndex, 1);
      result.splice(toIndex, 0, removed);
      return result;
    });
  }, [setTasks]);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      filter,
      setFilter,
      moveTask,
    }),
    [tasks, addTask, toggleTask, deleteTask, filter, setFilter, moveTask]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}