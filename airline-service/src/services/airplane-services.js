const {AirplaneRepository} = require("../repository");
const AppError = require("../utils/erros/app-error");
const {StatusCodes} = require("http-status-codes")

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.log("Coming inside service"); 
        if(error.name == "TypeError"){
            throw new AppError('Cannot create a new Airplane object inside airplane service',StatusCodes.INTERNAL_SERVER_ERROR);
        } 
        throw new AppError("Can't create new Ariplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError("Can't fetch airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(data){
    try {
        const airplane = await airplaneRepository.get(data);
        
        return airplane;
    } catch (error) {
        // if(error.statusCode == 404){
        //     throw new AppError(error.explanation,error.statusCode);
        // }
        throw new AppError(error.explanation || "Can't fetch airplane",error.statusCode ||  StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(data){
    try {
        const deletedAirplane = await airplaneRepository.destory(id);
        return deletedAirplane
    } catch (error) {
        throw new AppError(error.explanation || "Can't delete Airplane",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateAirplane(id,data){
    try {
        const updatedData = await airplaneRepository.update(id,data);
        return updatedData;
    } catch (error) {
        throw new AppError(error.explanation || "Can't delete Airplane",error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
}

