import { CreateController } from "./create/CreateController";
import { DeleteController } from "./delete/DeleteController";
import { UpdateController } from "./update/UpdateController";
import { GetByIdController } from "./getById/GetByIdController";
import { FilterController } from "./filter/FilterController";
import { ActiveController } from "./active/ActiveController";

const getByIdController = new GetByIdController().handle;
const createController = new CreateController().handle;
const deleteController = new DeleteController().handle;
const updateController = new UpdateController().handle;
const filterController = new FilterController().handle;
const activeController = new ActiveController().handle;

export const controllers = {
  createController,
  deleteController,
  filterController,
  updateController,
  getByIdController,
  activeController,
};
