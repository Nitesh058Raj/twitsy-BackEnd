import express from 'express';
import {getTwits, createTwit, getTwit} from '../controller/twit.controller.js';
import {createUser} from '../controller/user.controller.js';

const Router = express.Router();

Router.route('/twit')
    .post(createTwit)
    .get(getTwits);

Router.route('/twit/:id')
    .get(getTwit);

Router.route('/user')
    .post(createUser);

export default Router;