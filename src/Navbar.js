import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div >
      <Link to="/" style={{textDecoration:"none",margin:"10px"}}> Home </Link>
      <Link to="/profile" style={{textDecoration:"none",margin:"10px"}}> Profile </Link>
      <Link to="/contact" style={{textDecoration:"none",margin:"10px"}}> Contact </Link>
    </div>
  );
};
