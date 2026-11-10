import express from 'express';

const app=express();
const port=3000;
//root router
app.get("/api/fun-fact",async(req,res)=>{
    // res.send("Welcome to The Daily Grind Coffee Shop API!");

    try{
        const response = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random"
        );
        const json=await response.json();

    }catch(e){
        res.status(500).json({error:"The fact was not fun"});
    }
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});