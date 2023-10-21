import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

function PrivateRoute({ children }) {
  const dataContext = useContext(DataContext);
  let navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const userName = localStorage.getItem("name");
    if (userEmail) {
      dataContext.login();
      console.log("User Logged In");
      dataContext.setonboardingUserDetails({
        email: userEmail,
        name: userName,
      });
    } else if (!dataContext.isLoggedIn) {
      // Not logged in, so redirect to the auth page
      navigate("/auth");
    }
  }, [dataContext.isLoggedIn, navigate]);

  if (!dataContext.isLoggedIn) {
    // While the useEffect takes care of navigation,
    // it's still a good idea to render null or some kind of loader
    // until the navigation actually happens.
    return null;
  }

  return children;
}

export default PrivateRoute;
