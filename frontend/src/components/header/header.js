import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/app-context/index.js";
import NavBar from "./navbar.js";


const Header = () => {
  const { user } = useAppContext();
  const [headerPosition, setHeaderPosition] = useState(null)

  useEffect(() => {
    const pathname = window.location.pathname
    
    if(pathname === "/") {
      setHeaderPosition(() => {
        return {
          position: "absolute"
        }
      })
    } else {
      setHeaderPosition(() => {
        return {
          position: "relative"
        }
      })
    }
  }, [window.location.pathname])

  return (
    <header style={headerPosition}>
        <NavBar user={user}>
        </NavBar>
    </header>
  ); 
};

export default Header;