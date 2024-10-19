import { redirect } from "react-router-dom";

//Login function
const loginAction = async ({ request }) => {
  const data = await request.formData();
  // console.log(data);

  const submission = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const checkUser = JSON.parse(sessionStorage.getItem("user"));

  if (submission.email !== checkUser.email) {
    return { error: "Please check the email address" };
  }

  if (submission.password !== checkUser.password) {
    return { error: "Wrong password" };
  }

  return redirect("/home");
};

export default loginAction;
