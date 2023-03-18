import express from 'express';
import {getTwits, createTwit, getTwit} from '../controller/twit.controller.js';

const Router = express.Router();

Router.route('/twit')
    .post(createTwit)
    .get(getTwits);

Router.route('/twit/:id')
    .get(getTwit);

export default Router;