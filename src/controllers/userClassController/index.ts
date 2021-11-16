import { CreateController } from "./create/CreateController";
import { FilterController } from "./filter/FilterController";
import { UpdateController } from "./update/UpdateController";

const filterController = new FilterController().handle;
const createController = new CreateController().handle;
const updateController = new UpdateController().handle;

export const controllers = {
  filterController,
  createController,
  updateController,
};
