import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NewTasks from './pages/NewTasks';
import InProgress from './pages/InProgress';
import Completed from './pages/Completed';
import { TaskProvider } from './context/TaskContext';
import { LanguageProvider } from './context/LanguageContext';

const App = () => (
  <LanguageProvider>
    <TaskProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NewTasks />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </Router>
    </TaskProvider>
  </LanguageProvider>
);

export default App;