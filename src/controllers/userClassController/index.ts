import { CreateController } from "./create/CreateController";
import { GetByIdController } from "./getById/GetByIdController";
import { UpdateController } from "./update/UpdateController";

const getByIdController = new GetByIdController().handle;
const createController = new CreateController().handle;
const updateController = new UpdateController().handle;

export const controllers = {
  getByIdController,
  createController,
  updateController,
};
