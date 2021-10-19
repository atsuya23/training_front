export async function Login() {
  try {
    await fetch(`${RESTAPI_URL}api/auth/jwt/create/`, {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          throw "authentication failed";
        } else if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const options = { path: "/" };
        cookie.set("access_token", data.access, options);
        alert(data);
      });
    router.push("/main-page");
  } catch (err) {
    alert(err);
  }
}
