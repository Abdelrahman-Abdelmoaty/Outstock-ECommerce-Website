import * as yup from "yup";
export const signupSchema = yup
  .object({
    name: yup
      .string()
      .required("This field is required")
      .matches(/^[A-Za-z ]+$/, "Name can only contains characters and spaces"),
    username: yup
      .string()
      .required("This field is required")
      .matches(/^[A-Za-z0-9_]+$/, "Username can only contain characters, digits and underscore '_'"),
    email: yup.string().required("This field is required").email(),
    phoneNumber: yup
      .string()
      .required("This field is required")
      .matches(/01\d{9}/, "This number should match egyption phone numbers"),
    password: yup
      .string()
      .required("This field is required")
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/, "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character."),
    password_confirmation: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Mismatched passwords"),
  })
  .required();

export const loginSchema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
});
