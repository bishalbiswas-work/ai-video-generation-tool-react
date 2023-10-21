import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import DataContext from "../../context/DataContext";

const Logout = () => {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutProcedure = () => {
      localStorage.clear();
      // Consider removing window.location.reload() for a smoother user experience.
      window.location.reload();
      navigate("/auth");
    };

    logoutProcedure();
  }, [navigate]); // Dependency array ensures this effect only runs once when the component is mounted.

  return null; // Return null if you don't want to render anything.
};

export default Logout;
