import { getNewClient } from "./utils.js";

export async function getuserFromEmailAndTodosWithJoin(){
    const client = await getNewClient();
    const joinQuery = `
    SELECT users.* ,todos.title,todos.description,todos.done
    FROM users
    LEFT JOIN todos ON users.id = todos.user_id
    where user_id = $1
    `
    const res = await client.query(joinQuery);
    

}