import createTable from "./create_table.js";
import createEntries from "./insert_entries.js"
import {getUsers,getUserFromEmail,getTodosForUser} from "./get_all_entries.js"
import {updateTodo} from "./update_table.js"
import express from 'express'
import cors from 'cors';



const app = express();

app.use(cors());


const PORT = 5000

app.get("/signUp",(req,res) => {
    console.log("requessssst")
    return res.status(200).json({
        message: "agaya bhidu"
    })
});


app.get("/login",(req,res) => {
    res.status(200).json({
        message: "login agaya bhidu"
    })
});

app.listen(3100,() => {
     console.log("app is running")
})
