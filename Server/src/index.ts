import express from 'express';

const app = express();
const port = 4000;
app.use(()=>{
    console.log("Heyyyyy")
})

app.listen(port,()=>{
    console.log(`Server is successfully listening on port: ${port}`)
})

