import Student from "../models/Student.js";
import bcrypt from 'bcryptjs';
import createError from "./errorController.js";



/**
 * @access public
 * @rout /api/student
 * @method get
 */
export const getAllStudents = async (req, res, next) =>{
    try {

        const students = await Student.find();
        res.status(200).json(students);

    } catch (error) {
        
        next(error);
        
    }
}

/**
 * @access public
 * @rout /api/student/:id
 * @method post
 */
 export const getSingleStudent = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const student = await Student.findById(id);

        if( !student ){
            return next(createError(404, "Single user not found"))
        }

        if(student){
            res.status(200).json(student);
        }

        

    } catch (error) {
        
        next(error);
    }
}


/**
 * @access public
 * @rout /api/student
 * @method post
 */
 export const createStudent = async (req, res, next) =>{
    
    // Make has password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {

        const student = await Student.create({ ...req.body, password : hash_pass });
        res.status(200).json(student);

    } catch (error) {
        
        next(error);
    }
}

/**
 * @access public
 * @rout /api/student/:id
 * @method PUT/PATCH
 */
 export const updateStudent = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const student = await Student.findByIdAndUpdate(id, req.body, { new : true });
        res.status(200).json(student);

    } catch (error) {
        
        next(error);
    }
}

/**
 * @access public
 * @rout /api/student/:id
 * @method DELETE
 */
 export const deleteStudent = async (req, res, next) =>{
    const { id } = req.params;
    try {

        const student = await Student.findByIdAndDelete(id);
        res.status(200).json(student);

    } catch (error) {
        
        next(error);
    }
}