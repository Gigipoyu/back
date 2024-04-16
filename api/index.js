import express  from "express";


const app = express()
const server = app.listen(); // Port not specified

console.log(`Server is running on port ${server.address().port}`);


export default app