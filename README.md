# Task Manager App

A modern, feature-rich task management application built with React, TypeScript, and Tailwind CSS. This application helps users manage their daily tasks with a beautiful, responsive interface and powerful features.

![Task Manager App](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## ✨ Features

- **Task Management**
  - Add, delete, and toggle task completion
  - Drag and drop tasks to reorder
  - Form validation to prevent empty tasks
  - Real-time task filtering (All, Completed, Pending)

- **Modern UI/UX**
  - Clean and intuitive interface
  - Dark/Light theme support
  - Smooth animations and transitions
  - Fully responsive design
  - Beautiful icons from Lucide React

- **Technical Features**
  - Built with React and TypeScript
  - State management with Context API
  - Local storage persistence
  - Performance optimizations with React hooks
  - Custom hooks for reusable logic

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/task-manager.git
```

2. Install dependencies
```bash
cd task-manager
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - Drag and Drop
- [Lucide React](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build Tool

## 📱 Screenshots

### Light Mode
![Light Mode](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

### Dark Mode
![Dark Mode](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070)

## 🌟 Key Features Explained

### Local Storage Persistence
Tasks are automatically saved to the browser's local storage, ensuring your data persists between sessions.

### Theme Toggle
The app supports both light and dark modes, with the theme preference being saved to local storage.

### Drag and Drop
Tasks can be reordered using drag and drop functionality, providing an intuitive way to prioritize tasks.

### Performance Optimization
- Uses React.memo for optimized rendering
- Implements useCallback and useMemo hooks
- Custom hooks for better code organization

## 📝 Project Structure

```
src/
├── components/         # React components
├── context/           # React Context
├── hooks/             # Custom hooks
├── types/             # TypeScript types
└── main.tsx           # Entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Drag and Drop functionality by [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)