import db from "../models/index.js";

export const getAllStepsRepository = async () => {
  try {
    return await db.Step.findAll();
  } catch (err) {
   throw new Error(`Error getting all steps: ${err}`);
  }
};
