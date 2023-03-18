import database from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import QUERY from "../query/twitdb.query.js";
import HttpStatus from "../domain/httpStatus.js";


export const createUser = (req, res) => {
    logger.info(`${req.method} : ${req.originalUrl} , Creating User...`);
  
    database.query(QUERY.USER.CREATE, Object.values(req.body), (error, results) => {
      if (error) {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
          .send(
            new Response(
              HttpStatus.INTERNAL_SERVER_ERROR.code,
              HttpStatus.INTERNAL_SERVER_ERROR.status,
              "Problem",
              { error: error }
            )
          );
      } else {
        res
          .status(HttpStatus.CREATED.code)
          .send(
            new Response(
              HttpStatus.CREATED.code,
              HttpStatus.CREATED.status,
              "User Created",
              { query_info: results }
            )
          );
      }
    });
  };
  