import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import saveFavoriteImage from "../components/IconCheckboxes";
import logo from "../graphics/monkey search logo.png";
import "../index.css";

export const Home = () => {
  const { isAuthenticated, isLoading, error, user } = useAuth0();
  const [searchTime, setSearchTime] = useState("");
  const [spelling, setSpelling] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&num=10&searchType=image&q=${query}`
      );
      setResults(response.data.items);
      setSearchTime(
        `Found ${response.data.searchInformation.totalResults} results in ${response.data.searchInformation.formattedSearchTime}s.`
      );
      if (response.data.spelling) {
        setSpelling(response.data.spelling.correctedQuery);
      }
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleSaveFavorite = async (imageData) => {
    if (!user) return;
    const { title, link, image } = imageData; 
    const byteSize = image ? image.byteSize : 0;
    await saveFavoriteImage({ title, link, byteSize }, user.sub);
  };

  if (isLoading) {
    return <div className=" text-4xl flex items-center justify-center mt-60">Loading...</div>;
  }

  if (error) {
    return <div>Oops...we messed up {error && error.message}</div>;
  }

  return (
    <div>
      {!isAuthenticated && (
        <span className=" text-5xl flex justify-center  mt-40 ">LOGIN TO SEARCH</span>         
      )}
      
      {isAuthenticated && (
        <div className="">
          <div className="flex justify-center">
            <img src={logo} alt="" className="max-w-96 mt-10 -mb-8" />
          </div>
          <div className="flex flex-row justify-center mt-10">
            <input
              type="text"
              placeholder="Image Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                } 
              }}
              className="border-2 border-black rounded-md p-2 w-1/3 h-14 text-2xl"
            />
          </div>

          <div className="flex flex-row justify-center">
            {searchTime && <p>{searchTime}</p>}
            {spelling && (
              <p className="">
                Did you mean:{" "}
                <strong onClick={() => { 
                  setQuery(spelling); 
                  handleSearch(); 
                }}>
                  {spelling}
                </strong>
              </p>
            )}
          </div>

          {results.length > 0 && (
            <ul className="flex flex-wrap p-6 pl-40 pr-40 items-center justify-between">
              {results.map((result) => (
                <li className="" key={result.link}>
                  <button onClick={() => handleSaveFavorite(result)}> SPARA</button>
                  <img src={result.link} alt={result.title} className="w-96 mr-10 "/>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};