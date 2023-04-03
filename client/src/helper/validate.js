import { toast } from "react-hot-toast";

//validate Login page
export async function loginValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  return errors;
}

//validate Register page
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  emailVerify(errors, values);
  passwordVerify(errors, values);
  confirmPasswordVerify(errors, values);
  return errors;
}

//------------------------------------------------------------------------------------------------

//validate password
function passwordVerify(errors = {}, values) {
  const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4 characters");
  } else if (!specialCharacters.test(values.password)) {
    errors.password = toast.error("Password must special characters");
  }

  return errors;
}

//validate username
function usernameVerify(errors = {}, values) {
  if (!values.username) {
    errors.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid Username...!");
  }

  return errors;
}

//validate email
function emailVerify(errors = {}, values) {
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.email) {
    errors.email = toast.error("Email Required...!");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid Email...!");
  } else if (!email.test(values.email)) {
    errors.username = toast.error("Invalid Email...!");
  }

  return errors;
}

//validate confirm password
function confirmPasswordVerify(errors = {}, values) {
  if (!values.confirm_password) {
    errors.confirm_password = toast.error("Confirm Password Required...!");
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = toast.error(
      "Password and Confirm Password should be same"
    );
  }

  return errors;
}
