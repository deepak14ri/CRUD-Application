# CRUD-Application

![crud-img](https://github.com/deepak14ri/CRUD-Application/assets/49471265/569a0e4b-15c5-4d03-b284-4b77b2426b2e)

These steps, I took to create a CRUD (Create, Read, Update, Delete) operation in a React application with a server-side app and MongoDB setup:

# Create React App:
To start building our application, we set up a new React project using the Create React App tool. This provides a solid foundation and essential configurations to develop our frontend user interface.

# Front-End Code for CRUD:
With our React app created, I proceed to design and implement the frontend components required for the CRUD operation. I create user interfaces for adding, displaying, updating, and deleting records, making use of components like forms, tables, and buttons.

# Create Server Side App:
For handling the backend logic and database operations, I create a server-side application using Node.js or a similar backend technology. This server app will act as the intermediary between the frontend and the database.

# Start Server Side Code:
Once the server-side code is ready, I start the server application to listen for incoming requests from the frontend. The server provides endpoints for CRUD operations, which the frontend can call via HTTP requests.

# MongoDB Setup:
To store user data, I set up a MongoDB database. MongoDB is a NoSQL database that stores data in JSON-like documents. I create a database for our application and configure the server to connect to it.

# Create User Model:
In the server-side code, I define a User model that represents the structure of a user record in the database. The model specifies the fields and data types for each user entry.

# New Record API:
I create an API endpoint on the server to handle the creation of new user records. When the frontend submits a form to add a new user, the server processes the data and saves it to the MongoDB database as a new user record.

# Fetch Records and Display:
To display existing user records, we create another API endpoint on the server for fetching all user data from the database. The frontend calls this endpoint to retrieve the user records and then displays them in a table or list.

# Update a Record:
For updating user information, I implement an API endpoint on the server to handle specific user record updates. When the frontend sends an update request, the server identifies the user by their unique identifier, modifies the relevant data, and updates the corresponding entry in the database.

# Delete a Record:
Lastly, I create an API endpoint to handle the deletion of user records. When the frontend sends a delete request, the server identifies the user to be deleted, removes their entry from the database, and sends a response back to confirm the successful deletion.

By following these steps, I stablishe the above application.
