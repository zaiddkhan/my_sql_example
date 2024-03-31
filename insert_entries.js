import { getNewClient } from "./utils.js";

async function createEntries() {
    const client = await getNewClient();
    const insertUserQuery = 'INSERT INTO USERS (email,password) VALUES ($1,$2) RETURNING id';
    const userValues = ['zaiddkhhan@gmail.com','hashed_password'];
    let response = await client.query(insertUserQuery,userValues);
    const insertTodoQuery = 'INSERT INTO TODOS (title,description,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id';
    const todoValues   = ['Go to gym ','heavyweight',response.rows[0].id,false];
    await   client.query(insertTodoQuery,todoValues);
    console.log('data inserted');
}

export default createEntries;