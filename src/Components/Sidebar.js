import React, { useContext } from "react";
import Avatar from "./Avatar";
import Theme from "./Theme";
import SidebarStyles from "../Styles/SidebarStyles";
import { Auth } from "../Context/auth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const auth = useContext(Auth);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    auth.setUserLoggedIn(false);
    navigate("/login");
  };

  const Component = () => {
    if (!auth.userLoggedIn) return null;

    return (
      <div className={classes.Sidebar}>
        <div className="bottom-elements">
          <div className="Sidebar-Theme" style={{marginTop:'25px',fontSize:"25px"}}>
            <Theme />
          </div>
          <div className="Sidebar-Avatar" style={{ marginTop: "300px" }}>
            <Avatar />
          </div>
          <div
            className="link"
            onClick={logout}
            style={{ cursor: "pointer", marginTop: "260px",fontWeight:"bold",fontSize:"25px" }}
          >
            <small>Logout</small>
          </div>
        </div>
      </div>
    );
  };

  const classes = SidebarStyles();
  return <Component />;
}
