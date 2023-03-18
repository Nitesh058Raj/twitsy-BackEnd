import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/twitdb.query.js";
import HttpStatus from "../domain/httpStatus.js";

export const getTwits = (req,res) => {
    logger.info(`${req.method}:${req.originalUrl}, Getting the twit...`);
    database.query(QUERY.TWIT.SELECT_ALL, (error, results) => {
        if(!results){
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No twit found'));
        }
        else{
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Twit is here:', {
                twit: results
            }));
        }
    });
};

export const getTwit = (req,res) => {
    logger.info(`${req.method}:${req.originalUrl}, Getting the twit...`);
    database.query(QUERY.TWIT.SELECT, [req.params.id] , (error, results) => {
        if(!results){
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No twit found'));
        }
        else{
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Twit is here:', {
                twits: results
            }));
        }
    });
};

export const createTwit = (req,res) => {
    logger.info(`${req.method} : ${req.originalUrl} , creating twit...`);

    database.query(QUERY.TWIT.CREATE, params, (error,results) => {
        if(error){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send(new Response( HttpStatus.INTERNAL_SERVER_ERROR.code,HttpStatus.INTERNAL_SERVER_ERROR.status, 'Problem',{error: error}));
        }
        else{
            res.status(HttpStatus.CREATED.code).send( new Response( HttpStatus.CREATED.code, HttpStatus.CREATED.status, 'twit Created', {query_info: results}) );
        }
    })

};