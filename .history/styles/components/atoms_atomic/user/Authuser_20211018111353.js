import { Login } from "./Login";

export async function AuthUser(e) {
  e.preventDefault();
  if (isLogin) {
    Login();
  } else {
    try {
      await fetch(`${RESTAPI_URL}api/register/`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 400) {
          throw "authentication failed";
        }
      });
      Login();
    } catch (err) {
      alert(err);
    }
  }
}
