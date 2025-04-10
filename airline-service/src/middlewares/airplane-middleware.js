const {StatusCodes} = require("http-status-codes")
const {ErrorResponse,SuccessResponse} = require("../utils/common")

const validateAirplane = (req,res,next) =>{
    const {modelNumber,capacity} = req.body;
    if(!modelNumber || !capacity){
        // return res.status(StatusCodes.BAD_REQUEST).json({
        //     success : false,
        //     message : "All fields required",
        //     error : {},
        //     data : {} 
        // })
        ErrorResponse.message =  "All fields required";
        ErrorResponse.error = {};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateAirplane
}