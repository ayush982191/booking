const { StatusCodes } = require("http-status-codes");
const {CityService} = require("../services");
const {ErrorResponse,SuccessResponse} = require("../utils/common")
const createCity =async (req,res)=>{
    try {
        const newCity = await CityService.createCity({
            name : req.body.city
        });
        SuccessResponse.data = newCity;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.data = error;
          res 
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse) 
    }
}

module.exports = {
    createCity,
}

