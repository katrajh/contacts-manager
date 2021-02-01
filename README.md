# contacts-manager

# Web app for managing user contacts

OVERVIEW

To access the contact list, the user has to login with his/her credentials (username and
password). Once logged in, the user can list, edit and delete his/her contacts. Each contact
should have some basic information like first name, last name, phone number etc.

API
    - Implement an API for manipulating data. The API should have the endpoints listed
    below. The bold endpoints should require authorization:
    - POST /login - logs the user in
    - POST /register - registers a new user
    - GET /contacts - gets all contacts for the currently authenticated user
    - GET /contacts/:id - gets a specific contact
    - PUT /contacts/:id - updates a specific contact
    - DELETE /contacts/:id - deletes a specific contact
    - Use a database of your choice to store data (MongoDB, PostgreSQL... )
    - Use jwt for authorization
    - Using Node.js is prefered

FRONTEND
    - Use any popular Javascript framework (Vue, Angular, React... )
    - The app should have 3 main components/pages:
        1. Registration
        2. Login
        3. Contact list
