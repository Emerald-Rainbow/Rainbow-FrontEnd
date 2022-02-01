import { useContext } from "react";
import UserContext from "@context/user/UserContext";
import { useRouter } from "next/router";
import FullPageLoader from "@components/Loader/FullPageLoader/FullPageLoader";

export default function profile(props) {
  const router = useRouter();
  const { user, userLoading, userError, logout } = useContext(UserContext);
  if (!userLoading && !user) {
    router.push("/signup");
  }
  function Content() {
    if (props.children) {
      if (userLoading) {
        return <FullPageLoader />;
      } else {
        return props.children;
      }
    } else {
      return null;
    }
  }
  return <Content />;
}


// Expected Usage:
// If used as self closed component <ProtectedRoute/> will redirect page if user is not logged in, 
// but all other components in page will be displayed until user is loaded

// if page component is wrapped inside <ProtectedRoute></ProtectedRoute> then it will display a spinner 
// unitl user loads, then either redirects or display page components
