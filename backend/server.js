const express = require('express')
const cors = require('cors')
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const {Schema}=mongoose;
const courseSchema=new Schema(
    {
      url:{
          type:String,
          required:true
      },
      name:{
          type:String,
          required:true
      },
      author:{
          type:String,
          required:true,
      },
      desc:{
          type:String,
          required:true
      },
      price:{
          type:Number,
          required:true
      }
    },
    {timestamps:true}
)

const Courses=mongoose.model("courses",courseSchema)

//get all courses
app.get("/courses",(req,res)=>{
  Courses.find({},(err,docs)=>{
      if(!err){
          res.send(docs)
      }else{
          res.status(500).json({message:err})
      }
  })
})
 
//add course
app.post("/courses",(req,res)=>{
    let course=new Courses({
        url:req.body.url,
        name:req.body.name,
        author:req.body.author,
        desc:req.body.desc,
        price:req.body.price
    })
    course.save()
    res.send({message:"succesfully"})
})

//get course by id
app.get("/courses/:id",(req,res)=>{
    const {id}=req.params;
    Courses.findById(id,(err,docs)=>{
        if(!err){
           if(docs){
               res.send(docs)
           }else{
               res.status(404).send({message:"Not found"})
           }
        }else{
            res.status(500).json({message:err})
        }
    })
})
//delete course
app.delete("/courses/:id",(req,res)=>{
    const {id}=req.params;
    Courses.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send({message:"Deleted"})
        }else{
            res.send({message:err})
        }
    })
})

const PORT=process.env.PORT;
const DB=process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD)
mongoose.connect(DB,err=>{
    console.log(err);
    if(!err){
        console.log("connected");
        app.listen(PORT,()=>{
            console.log("App is up and running");
        })
    }
})
