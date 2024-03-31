import { getNewClient } from "./utils.js";

export async function getUsers(){
    const client = await getNewClient();
    const selectAllUserQuery = 'SELECT * FROM USERS';
    const userRes = await client.query(selectAllUserQuery);
    for(let users of userRes.rows){
        console.log(`ID ${users.id} Email ${users.email}`);
    }
}

export async function getUserFromEmail(email){
    const client = await getNewClient();
    const selectQuery = 'Select * from users where email = $1';
    const userRes = await client.query(selectQuery,[email])
    for(let user of userRes.rows){
        console.log(`ID ${user.id} Email ${user.email}`)
    }
}


export async function getTodosForUser(user_id){
    const client = await getNewClient();
    const selectTodosText = 'SELECT * FROM todos where user_id = $1';
    const todosRes = await client.query(selectTodosText,[user_id]);
    for(let todo of todosRes.rows){
        console.log(todo);
    }
}
