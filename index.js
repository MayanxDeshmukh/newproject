import express  from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try {
        const result = await axios.get(" https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&nsfw");
        res.render("index.ejs" , {
            joke : result.data.setup,
            user : result.data.delivery,
        });
    } catch (error) {
        console.log(error.result.data);
    }
})

app.listen(port , ()=>{
    console.log(`server running at port ${port}`)
});