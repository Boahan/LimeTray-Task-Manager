export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export type Filter = 'all' | 'completed' | 'pending';

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  moveTask: (fromIndex: number, toIndex: number) => void;
}