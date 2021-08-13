import { Link } from "react-router-dom";

const Navbar = ({ admin, setAdmin }) => {
  return (
    <div>
      <nav className="navbar">
        <h1>Blood Donor</h1>
        <div className="links">
          <Link to="/">Home</Link>
          {admin._id && <Link to="/add">Add Donors</Link>}
          {!admin._id && <Link to="/login">Login</Link>}
          {!admin._id && <Link to="/signup">SignUp</Link>}
          {admin._id && (
            <Link
              onClick={() => {
                console.log("btn", admin);
                setAdmin({});
                console.log("btn", admin);
              }}
              to="/"
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
      {admin._id && (
        <h3 style={{ textAlign: "center", margin: "5px" }}>
          Welcome {admin.name}
        </h3>
      )}
    </div>
  );
};

export default Navbar;
