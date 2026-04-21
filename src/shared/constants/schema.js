import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter a valid email address."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Field is Required"),
});
