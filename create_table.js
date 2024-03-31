import { getNewClient } from "./utils.js";

async function createTable(){
    const client = await getNewClient();
    const createNewTableQuery = `
    CREATE TABLE USERS (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );`;

    await client.query(createNewTableQuery);

    const createTodoQuery = `
     CREATE TABLE todos(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT false
     )`

     await client.query(createTodoQuery);

}

export default createTable;