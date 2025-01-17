import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Contact List Manager</h1>
      <nav>
        <Link to="/">Add Contact</Link> | <Link to="/contacts">View Contacts</Link>
      </nav>
    </header>
  );
}
