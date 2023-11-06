# BookManagement
The Simple Book Management Online System is a user-friendly, Backend application that provides a convenient way to manage and organize your collection of books.
# Environment Setup
 Download and install Node.js

# Run Locally
 ```
    git clone https://github.com/Aku5602/Bookopia
```
Go to directory where cloned code and run following command 
```
   npm install
```
# Install dependencies and generate .env file
```
  npm install
  touch .env
```
In this .env file enter the MongoDB Atlas Url:
# Start the server
```
   node index.js or nodemon
```
Go to http://localhost:4000/v1/api/ in any browser to see the application running.

# EndPoints
Insert New Book in DB: /newbook
```
 POST:http://localhost:4000/v1/api/newbook
```
Getting All Books Data from DB: /books
```
GET:http://localhost:4000/v1/api/books
```
Get Specific Book: /book/:id, id Means BookId
```
GET:http://localhost:4000/v1/api/book/65491b7d62074ac7a7075565
```
Update Book Data : /updatebook/:id
```
  POST:http://localhost:4000/v1/api/updatebook/1d43f9c9-e6a9-46ab-92ed-98ac8cfe79e9
```
Remove the book Data : /removebook/:id, Now this time id is document _id
```
DELETE:http://localhost:4000/v1/api/removebook/65491b7d62074ac7a7075565
```
 





