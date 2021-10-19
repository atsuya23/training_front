export async function AuthUser(e) {
  e.preventDefault();
  if (isLogin) {
    login();
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
      login();
    } catch (err) {
      alert(err);
    }
  }
}
