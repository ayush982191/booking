const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/erros/app-error");


const validateCity = (req,res,next) =>{
    const {name} = req.body;
    if(!name){
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.data = new AppError("CityName not found",StatusCodes.NOT_FOUND)
        return res.
        status(StatusCodes.NOT_FOUND)
        .json(ErrorResponse)
    }
}

module.exports = {
    validateCity
}