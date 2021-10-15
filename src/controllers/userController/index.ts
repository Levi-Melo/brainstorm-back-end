import { SignInUserController } from "./signIn/SignInUserController";
import { CreateController } from "./create/CreateController";
import { DeleteUserController } from "./delete/DeleteUserController";
import { UpdateUserController } from "./update/UpdateUserController";
import { GetByIdUserController } from "./getById/GetByIdUserController";
import { FilterUserController } from "./filter/FilterUserController";
import { ConfirmAccountController } from "./confirmAccountController/ConfirmAccountController";
import { ResetPasswordController } from "./resetPassword/ResetPasswordController";
import { ActiveController } from "./active/ActiveController";

const getByIdController = new GetByIdUserController().handle;
const resetPasswordController = new ResetPasswordController().handle;
const confirmAccountController = new ConfirmAccountController().handle;
const signInController = new SignInUserController().handle;
const createController = new CreateController().handle;
const deleteController = new DeleteUserController().handle;
const updateController = new UpdateUserController().handle;
const filterController = new FilterUserController().handle;
const activeController = new ActiveController().handle;

export const controllers = {
  createController,
  signInController,
  deleteController,
  filterController,
  updateController,
  getByIdController,
  confirmAccountController,
  activeController,
  resetPasswordController,
};
