
Contact Management App
Welcome to the Contact Management App! This app lets you add, view, and delete contacts. Built with React for the frontend and Node.js with SQLite3 for the backend, this app is simple yet powerful for managing contacts.

Table of Contents
How to Set It Up
Running the App
How It Works
Design Choices
Future Features
How to Set It Up
Prerequisites
Before you get started, make sure you have the following installed on your machine:

Node.js: You can get it from nodejs.org
npm: Comes with Node.js, but check npm's website if you're unsure.
SQLite3: SQLite is super lightweight, and you'll use it to store contacts.


Backend Setup
Clone the repository:

git clone <your-repository-url>
cd <your-repository-folder>
Install backend dependencies: In the backend folder, install the necessary dependencies with:

cd ./backend
npm install
Start the backend server: To get the backend running, use:

node server.js
Your backend should now be up and running at http://localhost:3001.

Frontend Setup
Go to the frontend directory:


cd ./Contactlistmanager/frontend/contactlistmanager/
Install frontend dependencies: Install the necessary packages by running:
npm install
Start the React app: To launch the frontend app, run:

npm start
You can now open your browser and visit http://localhost:3000 to interact with the app.

Running the App
Once both the frontend and backend servers are running:

Open your browser and visit http://localhost:3000.
You'll see a simple form to add a new contact.
After you submit the form, your contact will be saved in the backend (SQLite database).
You can view and delete contacts from the app as well.

How It Works
Frontend (React)
Simple Form Handling: The form in React uses basic state management to handle input and submission. When you submit the form, it sends the contact data to the backend via an HTTP POST request.
Clear After Submission: After submitting a contact, the form resets automatically. This way, it’s always ready for the next contact.
Backend (Node.js with SQLite3)
SQLite3: The backend uses SQLite3, a small and simple database engine, to store contact data. It runs directly from a file (contacts.db), making it super easy to set up.
CRUD Operations:
GET /contacts: Fetches all contacts from the database.
POST /contacts: Adds a new contact.
DELETE /contacts/:id: Deletes a contact by ID.
Design Choices
SQLite3 for simplicity: We chose SQLite3 because it’s lightweight and easy to use for small-scale apps like this one. If you were to scale this app up, you might consider switching to a more robust database like PostgreSQL.
No User Authentication: The app does not include user authentication. If you wanted to extend this, adding user authentication (like login and registration) would be a good next step.
Form Reset: After submitting a contact, the form is automatically reset for a smooth user experience. This saves you from manually clearing the form every time.
Lightweight and Focused: The app focuses on the core features of adding, viewing, and deleting contacts without unnecessary complexity.
