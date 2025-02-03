import { getAllStepsService } from "../../../domain/services/steps.service.js";
import successResponse from "../utils.js";

export const getAllStepsController = async (req, res,next) => {
  try {
    const result = await getAllStepsService();
    successResponse(res, result, "Success");
  } catch (err) {
    next(err);
  }
};
