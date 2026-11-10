import express from 'express';

const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("Welcome to The Daily Grind Coffee Shop API!");
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});