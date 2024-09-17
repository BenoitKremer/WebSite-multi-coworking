/* eslint-disable no-unused-expressions */
const client = require('./database.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(3300, () => {
  console.log("Server listening on port 3300");
})

client.connect();

app.get('/users', (req, res)=>{
  client.query('Select * from users', (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
  client.end;
})

app.get('/users/:id', (req, res)=>{
  client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
  client.end;
})

app.post('/users', (req, res)=>{
  const user = req.body;
  let query = `insert into users values(
    ${user.id},
    '${user.first_name}',
    '${user.last_name}',
    '${user.email}',
    '${user.phone_number}',
    '${user.password}')`

  client.query(query,  (err, result)=>{
    if(!err){
      res.send('User added successfully')
    }
    else{
      console.log(err.message)
    }
  })
  client.end;
})

app.put('/users/:id', (req, res)=>{
  let user = req.body;
  let query = `update users set
    first_name = '${user.first_name}',
    last_name = '${user.last_name}',
    email = '${user.email}',
    phone_number = '${user.phone_number}',
    password = '${user.password}'
    where id=${user.id}`

  client.query(query,  (err, result)=>{
    if(!err){
      res.send('User updated successfully')
    }
    else{
      console.log(err.message)
    }
  })
  client.end;
})

app.delete('/users/:id', (req, res)=>{
  let query = `delete from users where id=${req.params.id}`

  client.query(query,  (err, result)=>{
    if(!err){
      res.send('User deleted successfully')
    }
    else{
      console.log(err.message)
    }
  })
  client.end;
})