import axios from "axios";
import dotenv from 'dotenv';  // Import dotenv
import express from 'express';

dotenv.config();

function run () {
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);
};

run();