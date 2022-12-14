import createError from "../controllers/errorController.js";
import jwt from 'jsonwebtoken'



// Check user is authanticked or not
export const userMiddleware = (req, res, next) =>{

    try {
        
        const token = req.cookies.access_token;

        // check token
        if( !token ){
        return next(createError(401, "You are not authanticked"));

        }

        // if login toket
        const login_user = jwt.verify(token, process.env.JWT_SECRET);

        if( !login_user ){
            return next(createError(401, "invalid token"));

        }

        if( login_user.id !== req.params.id ){
            return next(createError(401, "You are not be able to access this feture"));
        }
        
        if( login_user ){
            req.user = login_user;
            next()
        }

    } catch (error) {
        return next(error);
    }

}


