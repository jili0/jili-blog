import "../stylesheets/nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeStyle = {color:"#333", backgroundColor: "#ccc"}
  return (
    <nav>
      <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/">Home</NavLink>
      <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/post">Post</NavLink>
      <NavLink style={({isActive}) => isActive ? activeStyle : null} to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;
