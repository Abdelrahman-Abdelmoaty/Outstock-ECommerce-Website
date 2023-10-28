import * as yup from "yup";

const reqMsg = "This field is required";

export const signupSchema = yup
  .object({
    name: yup
      .string()
      .required(reqMsg)
      .matches(/^[A-Za-z ]+$/, "Name can only contains characters and spaces"),
    username: yup
      .string()
      .required(reqMsg)
      .matches(/^[A-Za-z0-9_]+$/, "Username can only contain characters, digits and underscore '_'"),
    email: yup.string().required(reqMsg).email(),
    phoneNumber: yup
      .string()
      .required(reqMsg)
      .matches(/01\d{9}/, "This number should match egyption phone numbers"),
    password: yup
      .string()
      .required(reqMsg)
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/, "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character."),
    password_confirmation: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Mismatched passwords"),
  })
  .required();

export const loginSchema = yup.object({
  email: yup.string().email().required(reqMsg),
  password: yup.string().required(reqMsg),
});

export const addProductSchema = yup.object().shape({
  name: yup.string().required(reqMsg),
  price: yup.string().required(reqMsg),
  quantity: yup.string().required(reqMsg),
  categoryId: yup.string().nullable(),
  colorId: yup.string().nullable(),
  images: yup
    .mixed()
    .required(reqMsg)
    .test("size", "Please select photos", (value) => {
      const files = value as File[];
      return files.length > 0;
    }),
});
