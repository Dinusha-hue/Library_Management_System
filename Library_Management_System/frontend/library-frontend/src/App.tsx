import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBokkPage';
import EditBookPage from './pages/EditeBookpage';
import Header from './components/Header'; 

const App: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add-book" element={<AddBookPage/>} />
          <Route path="/edit-book/:id" element={<EditBookPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
