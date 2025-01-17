import React from 'react';
import axios from 'axios';

function AddContact() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Use FormData to collect form input values
    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    try {
      // Send contact data to the backend
      const response = await axios.post('http://localhost:3001/contacts', contactData);
      console.log('Contact Added:', response.data);

      // Reset the form after submission
      event.target.reset();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
