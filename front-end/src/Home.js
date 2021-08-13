import SearchBar from "./components/SearchBar";
import DonorList from "./DonorList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { getDonors } from "./Services/Api";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);

  const [donors, setDonors] = useState([]);
  const [query, setQuery] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    getAllDonors();
  }, []);

  const getAllDonors = async () => {
    setIsPending(true);
    const donorsList = await getDonors();
    console.log("Donors: ", donorsList);
    setDonors(donorsList.data);
    setIsPending(false);
  };

  useEffect(() => {
    const filteredDonors = donors;
    const newfilteredDonors = filteredDonors.filter((donor) =>
      donor.city.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredData(newfilteredDonors);
  }, [query]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="home">
      <SearchBar value={query} onChange={handleSearch} />
      {/* {error && <div>{error}</div>} */}
      {isPending && <div>Loading...</div>}
      {donors && (
        <DonorList
          donors={filteredData && query ? filteredData : donors}
          title={"All Donors"}
        />
      )}
    </div>
  );
};

export default Home;
