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
const getAllCity = async(req,res)=>{
    try {
        const allCities = await CityService.getAllCity();
        SuccessResponse.data = allCities;
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
const getCity = async(req,res)=>{
    try {
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;
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
const deleteCity = async(req,res)=>{
    try {
        const deletedCity = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = deletedCity;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse)
    }catch (error) {
        ErrorResponse.data = error;
        res 
          .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
          .json(ErrorResponse) 
    }
}


module.exports = {
    createCity,
    getCity,
    getAllCity,
    deleteCity
}

