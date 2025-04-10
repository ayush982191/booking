const {AirplaneService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {ErrorResponse,SuccessResponse} = require("../utils/common")

async function createAirplane(req,res){
try {  
    const airplane =await AirplaneService.createAirplane({
        modelNumber : req.body.modelNumber,
        capacity : req.body.capacity
    });
    SuccessResponse.message = "airplane created sucessfully";
    SuccessResponse.data = airplane;
    // return res.status(StatusCodes.CREATED).json({
    //     success : true,
    //     message : "airplane created sucessfully",
    //     body : airplane,
    //     error : {}
    // })
    return res
    .status(StatusCodes.CREATED)
    .json(SuccessResponse)

} catch (error) {
    return res
    .status(error.statusCode || 500)
    .json(ErrorResponse)
}
}

async function getAirplanes(req,res) {
    try {
        const airplanes =await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return  res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || 500)
                .json(ErrorResponse)
    }
}

async function getAirplane(req,res){
    try {
        const {id} = req.params;
        const airplane = await AirplaneService.getAirplane(id);
        SuccessResponse.data = airplane;
        return res
               .status(StatusCodes.OK)
               .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || 500)
                .json(ErrorResponse)
    }
}

async function destroyAirplane(req,res){
    try {
        const {id} = req.params;
        const destoryedAirplane = await AirplaneService.destroyAirplane(id);
        SuccessResponse.data = destoryedAirplane;
        return res.
        status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || 500)
                .json(ErrorResponse)
    }
}

async function updateAirplane(req,res){
    try {
        const {id} = req.params;
        const { capacity } = req.body;
        console.log(id," and ",capacity)
        const updateAirplane = await AirplaneService.updateAirplane(id,req.body);
        SuccessResponse.data = updateAirplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || 500)
                .json(ErrorResponse)
    }
    
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}