import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <p>This page does not exist</p>
      <Link to="/">Back to Homepage...</Link>
    </div>
  );
};

export default NotFound;
