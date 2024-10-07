My approach to solving the problem: 
Frontend Design: Created a frontend with react.js. Connected it to the mongodb database. Used axios for posting of the data into the database.

Database Design: Created a MongoDB schema for SIM card data, including attributes like SIM Number, Phone Number, Status, and Activation Date.

API Development: Built a RESTful API using Express.js to activate and deactivate the sim cards.

Input Validation: Ensured the API checks in the mongodb schema  for required fields.


To run the app you will need:
Node.js: Install from nodejs.org.
MongoDB: Install and run it from mongodb.com. Using Mongodb compass.

created a react frontend:
React.js: npx create-react-app sim-card-manager.


Activate SIM Card
POST http://localhost:3000/activate

2. Deactivate SIM Card
POST http://localhost:3000/deactivate

3. Get SIM Details
GET http://localhost:3000/sim-details/SIM123456789

Assumptions: 
No authentication or security measures are taken it is ensured that it is a safe environment.




