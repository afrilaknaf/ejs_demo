let express=require('express')
// console.log(express)
let app=express()
let port=3000;


app.get("/demo",(req,res)=>{
    res.send('<h1>Hello welcome</h1>')
})

app.get("api/login",(req,res)=>{
    res.send("<h1>Login page opened</h1>")
})

app.get("/page",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

let user="Afril Bsc";
let Pro_title="Bio-Pic";
let obj={
    name:"Afril",course:"Mern stack"
};
let ar=["html","css","javascript","react","node","monogdb"]

let person_data=[]

let body=require('body-parser');
app.use(body.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    // res.send('demo')
    res.render('index.ejs',{user,Pro_title,obj,ar,person_data})
})
app.post("/",(req,res)=>{
    person_data.push(req.body.person);
    res.redirect("/")
})
app.listen(port,console.log('server running on',port))
