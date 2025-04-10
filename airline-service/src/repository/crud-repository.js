const { StatusCodes } = require("http-status-codes");
const {logger} = require("../config");
const AppError = require("../utils/erros/app-error");

class CrudRepository{
    constructor(model){
        this.model = model; 
    }
    async create(data){ 
        try { 
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            if(error.name == "SequelizeUniqueConstraintError"){
                let explanation = [];
                error.errors.forEach(element => {
                    explanation.push(element.value + " "+element.message)
                });
                throw new AppError(explanation,StatusCodes.BAD_REQUEST)
             }
            console.log("Error inside curd repo ",error)
            logger.error("Error inside create crud repo");
            throw error;
        }
    }
    async destory(id){
     try {
           const deletedItem = await this.model.destory({
            where : {
                id 
            } 
            
        })
        if(!deletedItem){
            throw new AppError("Data not found",StatusCodes.NOT_FOUND);
        }
        return deletedItem;
     } catch (error) {
        console.log("Error inside delete in crud repo");
        logger.error("Error inside delete in crud repo");
        throw error;
     }
    }
    async get(id){
        try {
            const response = await this.model.findByPk(id); 
            if(!response){
                throw new AppError("Data is not present",StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            logger.error("Error inside get in crud repo");
            throw error;
        }
    }
    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Error inside getAll in crud repo")
            logger.error("Error inside getAll in crud repo");
            throw error;
        }
    }
    async update(id,data){
        try {
            console.log("id="+id+" and "+data)
            const response = await this.model.update(data,{
                where : {
                    id 
                }
            })
            console.log(response)
            return response;
        } catch (error) {
            console.log("Error inside update in crud repo")
            logger.error("Error inside update in crud repo");
            throw error;
        }
    }

}

module.exports = CrudRepository;