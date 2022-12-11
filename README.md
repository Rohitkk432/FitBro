# <img src="https://raw.githubusercontent.com/Rohitkk432/FitBro/d2f70cac4d9e999ebd346413b586dc6b591fc3c9/client/src/images/fitbro-logo.svg" height="60" > FitBro
All in one solution for getting Excercises for a Specific Body part , Workout Routines, Diet Charts, and much more.
[Video Demo](https://drive.google.com/file/d/1iTcLurThHMo4bTwuGm4lHEjutDIU9vJc/view?usp=sharing)

## About
- OOP Group 1 project.
- <strong>Frontend</strong> pages in <code>./client/src/pages</code> , components in <code>./client/src/components</code> in which <strong>React Class Components</strong> are used.
- OOP used in frontend to structurise response data from backend and add methods to it for easy use on frontend. Check in <code>./client/src/classModels</code>
- <strong>Backend</strong> structurized as 
  - Server <code>./server/src/index.ts</code> comprising of the main server code.
  - Router <code>./server/src/routes.ts</code> comprising of routes to get info from Database.
  - Models in <code>./server/src/models</code> contains mongoose schemas for the different collections(tables) in database.
- <strong>Database</strong> used is MongoDB Atlas (cloud Database).

## Tech Stacks
- <strong>Client</strong> - React, Typescript, Tailwind.
- <strong>Server</strong> - Node, Typescript, Express, MongoDB, Mongoose.

## Installation
### Server
- MongoDB URI is added with readonly permissions. 
- if u want to change DB change .env file in server folder and add your MONGODB_URI variable, and the data to the database as per schema.
- commands for running the server
```
cd server

# install packages/dependancies.
npm install

# To build and start server.
npm run build
npm run start

# To start in development mode.
npm run dev
```

### Client
- commands for starting client/frontend
```
cd client

# install packages/dependancies.
npm install

# To start client. 
npm run start

# To start in development mode.
npm run start --watch
```

## Class Diagram
![FitBroClassDiagram](https://user-images.githubusercontent.com/74586376/206570502-283401a2-8714-442a-bfd0-ad8b075c969d.jpg)

## UML State Diagram
<img width="700" alt="image" src="https://user-images.githubusercontent.com/74586376/206903590-50d47ae7-0f69-48f6-b109-afeb3545f6d2.png">

## Sequence Diagram
<img width="700" alt="image" src="https://user-images.githubusercontent.com/74586376/206903634-e138dd92-940d-45ca-a700-224cc664a2a7.png">


## Database NoSQL
### Note : NoSQL database (MongoDB Atlas) here foreign key is just refered as _id used there.
![Fitbro database](https://user-images.githubusercontent.com/74586376/206573546-8225d9c2-d8d3-461a-ba8b-9da95a8e71c0.png)

## SnapShots
### Landing Page
<img width="960" alt="image" src="https://user-images.githubusercontent.com/74586376/206570846-ffa45d92-3439-463d-9da8-11e7a61a3ad3.png">

### Anatomy Page
<img width="958" alt="image" src="https://user-images.githubusercontent.com/74586376/206570988-2cfa5135-daa0-4af0-a14c-562ab571d52e.png">
<img width="959" alt="image" src="https://user-images.githubusercontent.com/74586376/206571026-485bf704-1e86-4a26-9ee6-e8f9f6d73f2c.png">
<img width="957" alt="image" src="https://user-images.githubusercontent.com/74586376/206571077-11dbe98e-bd5f-4a37-b68e-7dd17899853e.png">

### Workout Page
<img width="960" alt="image" src="https://user-images.githubusercontent.com/74586376/206571158-ba77596f-6ba8-48b0-ae45-849721ba83a8.png">
<img width="959" alt="image" src="https://user-images.githubusercontent.com/74586376/206571178-af24ec07-b349-4aec-ac00-30ee0f973486.png">

### Diet Chart Page
<img width="959" alt="image" src="https://user-images.githubusercontent.com/74586376/206571282-447f9c1e-01e9-449d-af2f-911d9949d4e5.png">

### Calorie Page
<img width="959" alt="image" src="https://user-images.githubusercontent.com/74586376/206571427-f8e71587-fd38-4932-b552-7f6644a7c7e6.png">
<img width="957" alt="image" src="https://user-images.githubusercontent.com/74586376/206571460-9dd1c2b1-dbda-452d-9ef0-c165d4101947.png">

