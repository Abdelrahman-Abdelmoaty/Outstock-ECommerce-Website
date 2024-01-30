import * as y from "yup";

const REQUIRED_MESSAGE = "This field is required";

// Register form validation schema
export const registerSchema = y.object({
  name: y
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(/^[A-Za-z ]+$/, "Name can only contains characters and spaces"),
  username: y
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(
      /^[A-Za-z0-9_]+$/,
      "Username can only contain characters, digits and underscore '_'",
    ),
  email: y.string().required(REQUIRED_MESSAGE).email(),
  phoneNumber: y
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(
      /01\d{9}$/,
      "This number should match egyption phone number format [xxx-xxxx-xxxx]",
    ),
  password: y
    .string()
    .required(REQUIRED_MESSAGE)
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character.",
    ),
  password_confirmation: y
    .string()
    .required(REQUIRED_MESSAGE)
    .oneOf([y.ref("password")], "Passwords must match"),
});
export type RegisterFormData = y.InferType<typeof registerSchema>;

// Login form validation schema
export const loginSchema = y.object({
  email: y
    .string()
    .email("Email must be a valid email")
    .required(REQUIRED_MESSAGE),
  password: y.string().required(REQUIRED_MESSAGE),
});
export type LoginFormData = y.InferType<typeof loginSchema>;

export const addProductSchema = y.object().shape({
  name: y.string().required(REQUIRED_MESSAGE),
  price: y.string().required(REQUIRED_MESSAGE),
  quantity: y.string().required(REQUIRED_MESSAGE),
  categoryId: y.string().nullable(),
  colorId: y.string().nullable(),
  images: y
    .mixed()
    .required(REQUIRED_MESSAGE)
    .test("size", "Please select photos", (value) => {
      const files = value as File[];
      return files.length > 0;
    }),
});
