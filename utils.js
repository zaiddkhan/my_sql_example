import pkg from 'pg';
const { Client } = pkg;



export async function getNewClient(){
    const client = new Client("postgres://dzhuennd:7jhfjRJ4yzC5gItlzbsKroRGypQYgr3V@raja.db.elephantsql.com/dzhuennd");
    await client.connect();
    return client;
}