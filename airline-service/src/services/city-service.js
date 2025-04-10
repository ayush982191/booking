const { StatusCodes } = require("http-status-codes");
const {CityRepository} = require("../repository");
const AppError = require("../utils/erros/app-error");



const cityRepository = new CityRepository();

const createCity = async(name) =>{
    try {
        const newCity = await cityRepository.create(name);
        return newCity;

    } catch (error) {  
        throw new AppError(error.explanation ||"Unable to create City",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
const getCity = async(id)=>{
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        throw new AppError(error.explanation||"Unable to get city",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const getAllCity = async()=>{
    try {
        const allCities = await cityRepository.getAll();
        return allCities;
    } catch (error) {
        throw new AppError(error.explanation||"Unable to get all city name",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const deleteCity = async(id)=>{
    try {
        const deletedCity = await cityRepository.destory(id);
        return deletedCity;
    } catch (error) {
        throw new AppError(error.explanation||"Unable to get all city name",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR);  
    }
}
module.exports = {
    createCity,
    getCity,
    getAllCity,
    deleteCity
}