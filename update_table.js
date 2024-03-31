import { getNewClient } from "./utils.js";

export async function updateTodo(todoId) {
    const client = await getNewClient();
    const updateTodoQuery = 'UPDATE todos SET done = $1 where id = $2';
    const replacements = [true,todoId]
    await client.query(updateTodoQuery,replacements);
    console.log('updated')
    const getTodo = 'SELECT * from todos where id = $1'
    const getTodoRes = await client.query(getTodo,[todoId])
    for(let todo of getTodoRes.rows){
        console.log(todo)
    }

}