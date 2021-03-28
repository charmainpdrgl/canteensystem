"use strict";
exports.__esModule = true;

const functions = require("firebase-functions");
const env = functions.config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: env.airtable.key }).base('appEEXag8uIx61Eqt');
exports.addToAirtable = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    const objectId = snap.id;
    // Add the data to the algolia index
    return base('users').create(data);
});
