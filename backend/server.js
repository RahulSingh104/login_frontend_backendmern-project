const express= require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');
// Middleware for parsing JSON 

app.use(express.json());

//enable cors
app.use(cors())

app.post('/register',async(req,res)=>{
    try{
        const {username,password} = req.body;
        console.log(req.body);
        const user =new user({username,password});
        await user.save();
        res.status(201).json({message:'User registered successfully'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})

//login 

app.post('/login',async(req,res)=>{
    try{
        const {username, password} =req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }

        if(user.password!== password ){
            return res.status(401).json({error:'Invalid password'});
        }
        res.status(200).json({message:'Login successful'})
    }
    catch(error){
        res.status(500).json({error: 'Login failed'})
    }
})
connectDB();

app.listen(port,()=>{
    console.log('Server is listening on port 8000');
});