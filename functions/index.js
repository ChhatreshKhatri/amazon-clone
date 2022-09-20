const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { response, request } = require("express");
const stripe = require('stripe')("sk_test_51KptYXSCoJFuuUPNrvRck3AZ3AYdmbOIjHVL9LPw7VnCCbe9XeNgzb7585on42xDeJe5RjbnSn0vpOzIMgELq22E00ddMnDXM7");
//running express app on backend cloud functions
//firebase emulators:start to start
// API

//App config
const app=express();


//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request,response)=>response.status(200).send('Hello world'))
// app.get('/ck',(request,response)=>response.status(200).send('Hello ck'))
//http://localhost:5001/clone-a2550/us-central1/api/ck

app.post("/payments/create", async (request,response) =>{
    const total=request.query.total;
    console.log('payment recieved>>>>>>>>',total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    //ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//listen command
exports.api=functions.https.onRequest(app)