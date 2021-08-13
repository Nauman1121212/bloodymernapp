import { Link } from "react-router-dom";

const DonorList = (props) => {
  const { donors, title, handleDelete } = props;

  return (
    <div className="donor-list">
      <h1>{title}</h1>
      {donors.map((donor) => (
        <div className="donor-preview" key={donor._id}>
          <Link to={`/donors/${donor._id}`}>
            <h2>{donor.name}</h2>
            <h5>{donor.bloodGroup}</h5>
            <p>{donor.city}</p>
          </Link>
          {/* <button onClick={() => handleDelete(donor.id)}>delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default DonorList;
