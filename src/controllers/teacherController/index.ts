import { CreateController } from "./create/CreateController";
import { ActiveController } from "./active/ActiveController";
import { DeleteController } from "./delete/DeleteController";
import { GetByIdController } from "./getById/GetByIdController";
import { UpdateController } from "./update/UpdateUserController";
import { FilterController } from "./filter/FilterController";

const filterController = new FilterController().handle;
const getByIdController = new GetByIdController().handle;
const createController = new CreateController().handle;
const activeController = new ActiveController().handle;
const deleteController = new DeleteController().handle;
const updateController = new UpdateController().handle;

export const controllers = {
  filterController,
  getByIdController,
  createController,
  activeController,
  deleteController,
  updateController,
};
