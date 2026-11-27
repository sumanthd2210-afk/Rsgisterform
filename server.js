const express=require("express")
const fs=require("fs")
const path=require("path")

const app=express()
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));

//save user data
app.post("/register",(req,res)=>{
    const{name,password}=req.body
    const userData=`Name:${name},Password:${password}\n`
    fs.appendFile("userData.txt",userData,(err)=>{
        if(err){
            return res.send("err saving data")
        }else{
            res.send("user register successfully")
        }
    })})

    //.start server
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});