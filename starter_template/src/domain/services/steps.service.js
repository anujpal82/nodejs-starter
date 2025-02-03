import { getAllStepsRepository } from "../../adapters/sequelize/repositories/step.repository.js";

export const getAllStepsService = async () => {
    try{
        return await getAllStepsRepository();
    }
    catch(err){
        throw new Error(`Error getting all steps service: ${err}`);
    }
};
