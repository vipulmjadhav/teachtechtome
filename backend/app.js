const express = require('express');

const app = express();

//express acts as middleware ..we apply this to incoming requests.
//like funnel the requests come throught this , we manipulate them here.

app.use((req,res,next)=>{
    console.log('first middleware');
    next();

});

app.use((req,res,next)=>{
    res.send('hello from express');
});

module.exports = app;

