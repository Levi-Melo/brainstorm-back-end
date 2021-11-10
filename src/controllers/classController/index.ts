import { CreateController } from "./create/CreateController";
import { GetByIdController } from "./getById/GetByIdController";
import { UpdateController } from "./update/UpdateController";
import { DeleteController } from "./delete/DeleteController";
import { FilterController } from "./filter/FilterController";
import { ActiveController } from "./active/ActiveController";

const createController = new CreateController().handle;
const getByIdController = new GetByIdController().handle;
const updateController = new UpdateController().handle;
const deleteController = new DeleteController().handle;
const filterController = new FilterController().handle;
const activeController = new ActiveController().handle;

export const controllers = {
  createController,
  getByIdController,
  updateController,
  deleteController,
  filterController,
  activeController,
};
