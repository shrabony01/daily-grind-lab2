import express from 'express';

const app=express();
const port=3000;

//root route
app.get('/',(req,res)=>{
    res.send("Welcome to The Daily Grind Coffee Shop API!");
});

//api route
app.get("/api/fun-fact",async(req,res)=>{
    try{
        const response = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random"
        );
        const json=await response.json();

        res.status(200).json({ fact:json.text });
        
    }catch(e){
        res.status(500).json({error:"The fact was not fun"});
    }
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});