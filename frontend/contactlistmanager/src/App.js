import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact'; // Example component
import ContactList from './Components/ContactList'; // Example component

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Define routes for your app */}
          <Route path="/" element={<AddContact />} />
          <Route path="/contacts" element={<ContactList />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
