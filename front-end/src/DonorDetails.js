import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { deleteDonor, editDonor, getDonors } from "./Services/Api";
import { useState, useEffect } from "react";

const DonorDetails = (props) => {
  const { id } = useParams("_id");
  // const {
  //   data: donor,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:8000/donors/" + id);

  const [donor, setDonor] = useState({});
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    getDonorDetail();
  }, []);
  const getDonorDetail = async () => {
    setIsPending(true);
    console.log("ID: ", id);
    const oldDonor = await getDonors(id);
    setDonor(oldDonor.data);
    setIsPending(false);
  };
  const history = useHistory();

  const handleEdit = async (id) => {
    const editedDonor = donor;
    await editDonor(id, editedDonor);
    history.push("/");
  };

  const handleDelete = async (id) => {
    // fetch("http://localhost:8000/donors/" + donor.id, {
    //   method: "DELETE",
    // }).then(() => {
    //   console.log("Donor deleted");
    //   history.push("/");
    // });
    console.log("delete donor id: ", id);
    await deleteDonor(id);
    history.push("/");
  };

  const onValueChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  return (
    <div className="donor-details">
      {isPending && <div>Loading...</div>}
      {/* {error && <div>{error}</div>} */}
      {donor && (
        <article>
          {props.admin._id && (
            <div className="edit-donor-details">
              <label>Name: </label>
              <input
                type="text"
                value={donor.name}
                name="name"
                onChange={(e) => {
                  onValueChange(e);
                }}
              ></input>
              <label>Bloodgroup: </label>
              <input
                type="text"
                value={donor.bloodgroup}
                name="bloodgroup"
                onChange={(e) => {
                  onValueChange(e);
                }}
              ></input>
              <label>City: </label>
              <input
                type="text"
                value={donor.city}
                name="city"
                onChange={(e) => {
                  onValueChange(e);
                }}
              ></input>
              <label>Phone: </label>
              <input
                type="text"
                value={donor.phone}
                name="phone"
                onChange={(e) => {
                  onValueChange(e);
                }}
              ></input>
              <button
                onClick={() => {
                  handleEdit(donor._id);
                }}
              >
                Edit Donor
              </button>
              <button onClick={() => handleDelete(donor._id)}>
                Delete Donor
              </button>
            </div>
          )}

          <div className="donor-details">
            <h1>Donor Details</h1>
            <h2>{donor.name}</h2>
            <h3>{donor.bloodgroup}</h3>
            <p>City: {donor.city}</p>
            <p>Phone: {donor.phone}</p>
          </div>
        </article>
      )}
    </div>
  );
};
export default DonorDetails;
