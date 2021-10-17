import Cookie from "universal-cookie";

export function Logout() => {
    const cookie = new Cookie();
    const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
}