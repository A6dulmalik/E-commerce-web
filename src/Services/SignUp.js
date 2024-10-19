import { redirect } from "react-router-dom";

//SignUp function
const signUpAction = async ({ request }) => {
  const data = await request.formData();

  const user = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Storing user in session storage for accessibility during login
  sessionStorage.setItem("user", JSON.stringify(user));

  // Email validation constant (Note the case-insensitivity with the 'i' flag)
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Separate email validation check
  if (!emailRegex.test(user.email)) {
    return { error: "Invalid email address" };
  }

  // Separate password validation check
  if (user.password.length < 6) {
    return { error: "At least 6 characters long" };
  }

  // Redirect to login if both validations pass
  return redirect("/login");
};

export default signUpAction;
