require('dotenv').config();


const {HoldingsModel} = require('./Models/HoldingsModel')
const {PositionsModel} = require('./Models/PositionsModel')
const {OrdersModel} = require('./Models/OrdersModel')
const session = require('express-session');
const User = require('./Models/user.js')

const express = require('express'); 
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const bcrypt = require("bcrypt");

const crypto = require("crypto");



app.use(cors({
    origin: [
        "http://localhost:3000", 
        "http://localhost:3001", 
        "https://fullstackstockfrontend.onrender.com", 
        "https://fullstackstockdashboard.onrender.com"
    ],
    credentials: true   
}));




  
app.use(bodyParser.json());


const seedUsers = async () => {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10);

        const user = new User({
            name: 'John Doe',
            username: 'johndoe',
            password: hashedPassword
        });

        await user.save();
        console.log('User seeded successfully');
    } catch (err) {
        console.error('Error seeding user:', err);
    }
};

// seedUsers();


 

app.get('/allHoldings',async (req,res)=>{
    const holding = await HoldingsModel.find({});
    res.json(holding);
});

app.get('/allPositions',async (req,res)=>{
    const postion = await PositionsModel.find({});
    res.json(postion);
});

app.get('/allOrders',async (req,res)=>{
    const postion = await OrdersModel.find({});
    res.json(postion);
});

app.get('/user', async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const user = await User.findOne({ token });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});




app.post('/newOrder',async (req,res)=>{
    let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    })
    await newOrder.save();
})






app.post('/login',async (req,res)=>{

    const {username,password} = req.body;

    if(!username || !password){
        return res.status(400).json({message:"Please enter both username and password"});
    }

    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"Invalid username or password"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            let token = crypto.randomBytes(20).toString("hex");
              
            res.cookie("username", username, {
                httpOnly: true, 
                secure: true, 
                sameSite: "None", 
                domain: req.hostname.includes("localhost") ? "localhost" : "fullstackstockbackend.onrender.com", 
                path: '/',
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
            });

            return res.status(200).json({message:"Logged in successfully",token});

        }
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        

    }
    catch(e){
        res.json({message:`Something went wrong ${e}`});

    }
})

app.post('/register',async (req,res)=>{
    const {name,username,password} = req.body;

    const existingUser = await User.findOne({username});

    try{
        if (existingUser)  {
            return res.status(302).json({ message: "User already exists" });
        }
        const hashedpassword = await bcrypt.hash(password,10);
    
        const newUser = new User({
            name,
            username,
            password:hashedpassword
        });
        await newUser.save();
        res.status(201).json({message:"User registered "});

    }
    catch(err){
        res.json({message:`Something went wrong ${err}`});
    }
})


app.get('/getUsername', async (req, res) => {
    const username = req.headers.username; 

    if (!username) {
        return res.status(401).json({ message: "Unauthorized: No username provided" });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ username: user.username });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
});



app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        await mongoose.connect(url);

        console.log("Database connected:", mongoose.connection.db.databaseName);
    } catch (error) {
        console.error("Database connection error:", error);
    }
});
