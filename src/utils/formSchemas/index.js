import * as yup from "yup";

export const addNewUserFormSchema = yup.object({
  firstName: yup.string().required("required field"),
  lastName: yup.string().required("required field"),
  email: yup.string().required("required field").email(),
  cardLoadLimit: yup
    .number()
    .required("required field")
    .typeError("required field"),
  paymentLimit: yup
    .number()
    .required("required field")
    .typeError("required field"),
  mobileNumber: yup.string().required("enter mobile number"),
  country: yup.string().required("required field"),
  userRole: yup.string().required("required field"),
  supervisor: yup.string().required("required field"),
});
