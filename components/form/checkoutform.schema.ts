import * as yup from "yup";

export const checkoutFormSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("Full Name is required"),
  address: yup.string().required("Address is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});
