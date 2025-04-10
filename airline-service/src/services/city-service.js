const { StatusCodes } = require("http-status-codes");
const {CityRepository} = require("../repository");
const AppError = require("../utils/erros/app-error");



const cityRepository = new CityRepository();

const createCity = async(name) =>{
    try {
        console.log("Before")
        const newCity = await cityRepository.create(name);
        console.log("After")
        return newCity;

    } catch (error) {  
        throw new AppError(error.explanation ||"Unable to create City",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity
}