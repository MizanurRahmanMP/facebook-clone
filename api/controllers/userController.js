import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import createError from "./errorController.js";
import jwt from 'jsonwebtoken';


/**
 * @access public
 * @rout /api/user
 * @method get
 */
export const getAllUser = async (req, res, next) =>{
    try {

        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        
        next(error);
        
    }
}

/**
 * @access public
 * @rout /api/User/:id
 * @method get
 */
 export const getSingleUser = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const user = await User.findById(id);

        if( !user ){
            return next(createError(404, "Single user not found"))
        }

        if(user){
            res.status(200).json(user);
        }

        

    } catch (error) {
        
        next(error);
    }
}


/**
 * @access public
 * @rout /api/user
 * @method post
 */
 export const createUser = async (req, res, next) =>{
    
    // Make has password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {

        const user = await User.create({ ...req.body, password : hash_pass });
        res.status(200).json(user);

    } catch (error) {
        
        next(error);
    }
}

/**
 * @access public
 * @rout /api/user/:id
 * @method PUT/PATCH
 */
 export const updateUser = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const user = await User.findByIdAndUpdate(id, req.body, { new : true });
        res.status(200).json(user);

    } catch (error) {
        
        next(error);
    }
}

/**
 * @access public
 * @rout /api/user/:id
 * @method DELETE
 */
 export const deleteUser = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);

    } catch (error) {
        
        next(error);
    }
}







/**
 * @access public
 * @rout /api/user/login
 * @method post
 */
 export const userLogin = async (req, res, next) =>{
    
    // Get body data
   

   try {

   // find user
    const login_user = await User.findOne({ email : req.body.email });

    // checked user exist or not
    if( !login_user ){

        return next(createError(404, "user not found"))

    }

    // checked password
    const passwordChecked = await bcrypt.compare( req.body.password, login_user.password );


    // password heandle
    if(!passwordChecked){

        return next(createError(404, "wrong password"))

    }


    // create a token
    const token = jwt.sign({ id : login_user._id, isAdmin : login_user.isAdmin }, process.env.JWT_SECRET );

    // login user info
    const { password, isAdmin, ...login_info } = login_user._doc

    res.cookie("access_token", token).status(200).json({
        token : token,
        user : login_info
        
    });

   
    
   } catch (error) {
        next(error)
   }
}




/**
 * @access public
 * @rout /api/user/register
 * @method post
 */
 export const userRegister = async (req, res, next) =>{
    
    // Make has password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {

        const user = await User.create({ ...req.body, password : hash_pass });
        res.status(200).json(user);

    } catch (error) {
        
        next(error);
    }
}
