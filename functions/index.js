const functions = require("firebase-functions");

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
var serviceAccount = require(".serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import * as express from 'express';
const cors = require("cors");

//MAIN APP
admin.initializeApp();

const app = express();
app.use(corse({ origin: true}));



//ROUTES 
app.get("/", (req, res) => {
    return res.status(200).send("WELCOME");
})

// CREATE

// READ

// UPDATE 

//DELETE

//Export API to firebase
export const api = functions.https.onRequest(app);


