import { useState } from "react";
import { useHistory } from "react-router";
import { postDonor } from "./Services/Api";
const Add = () => {
  const [name, setName] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const donor = { name, detail, bloodGroup, city };
  //   setIsPending(true);

  //   fetch("http://localhost:8000/donors", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(donor),
  //   }).then(() => {
  //     console.log("New Donor added");
  //     console.log(donor);
  //     setIsPending(false);
  //     //Redirects to homepage after submiting form
  //     history.push("/");
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donor = { name, bloodgroup, city, phone };
    setIsPending(true);
    console.log("Donor to post: ", donor);
    postDonor(donor);
    setIsPending(false);
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add new donor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Bloodgroup:</label>
        <input
          type="text"
          required
          value={bloodgroup}
          onChange={(e) => setBloodgroup(e.target.value)}
        />
        <label>City:</label>
        <input
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <label>Phone: </label>
        <input
          type="number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        {!isPending && <button>Add Donor</button>}
        {isPending && <button disabled>Adding Donor...</button>}
      </form>
      <div>{name}</div>
      <div>{bloodgroup}</div>
      <div>{city}</div>
      <div>{phone}</div>
    </div>
  );
};
export default Add;
