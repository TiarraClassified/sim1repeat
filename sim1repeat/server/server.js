const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 4000;
require ('dotenv').config()
const controller  = require('./controller'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/shelf/:id', controller.shelf);
app.get('/api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.updateBin);
app.delete('/api/bin/:id', controller.deleteBin);
app.post('/api/bin/:id', controller.addBin);

massive ( process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);  
    app.listen(port, ()=> {console.log(`Big Brother is listening on port ${port}`);});
}).catch(e => {
})