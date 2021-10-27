import { CreateController } from "./create/CreateController";
import { ActiveController } from "./active/ActiveController";
import { DeleteController } from "./delete/DeleteUserController";
import { GetByIdController } from "./getById/GetByIdController";
import { UpdateController } from "./update/UpdateUserController";
import { FilterController } from "./Filter/FilterController";

const getByIdController = new GetByIdController().handle;
const createController = new CreateController().handle;
const activeController = new ActiveController().handle;
const deleteController = new DeleteController().handle;
const updateController = new UpdateController().handle;
const filterController = new FilterController().handle;

export const controllers = {
  getByIdController,
  createController,
  activeController,
  deleteController,
  updateController,
  filterController,
};
