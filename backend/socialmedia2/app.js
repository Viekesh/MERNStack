import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";



const app = express();

app.use(express.json());

// "json()" it is a method used in express to recognize the incoming request object as a json object.
// It is the middleware function in express and is based upon the body parser.
// This method is called as a middleware that only parses json in our application using the "app.use(express.json())".
// This method is used to parse the incoming request with json payloads.


app.use(bodyParser.json({limit:"30mb", extended:"true"}));

app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));

// Express "bodyParser" is an npm module used to process data sent in an HTTP request body.
// It provides four express middleware for parsing JSON, text, urlencoded and raw data sets over an HTTP
// request body.
// It is specifically used in the context of POST, PUT and PATCH HTTP request where the information you want
// is contained in the body.
// Using bodyParser allows you to access "req.body" from within routes and use that data.
// So, the basically the bodyParser is used for in order to get access to the POST data then we have to use
// bodyParser, it allows express to read the body and then parse that into a json object that we can understand.


dotenv.config({path:"config/config.env"});

// dotenv is a simple way that allow you to create secret keys that your application needs to function
// and keep them from going public.


export default app;