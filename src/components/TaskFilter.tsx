import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import type { Filter } from '../types';

export function TaskFilter() {
  const { filter, setFilter } = useTaskContext();

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-4 py-2 rounded-lg transition-colors
                    ${
                      filter === value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}