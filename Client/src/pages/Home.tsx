import axios from "axios";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";




export const Home  = () => {

  
  const { isAuthenticated } = useAuth0();


  // const Search = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const [results, setResults] = useState([]);
      const [query, setQuery] = useState('');
    
    const handleSearch = async () => {
        try {
          const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&num=10&searchType=image&q=${query}`);
          setResults(response.data.items);
        } catch (error) {
          console.error(error);
        }
      };


      return (

        <div >
                 {!isAuthenticated && (
                  <>
                   <span>SIGN IN TO SEARCH</span>
                  </>
                )}
                {isAuthenticated && (
                  <>
                     <div>
                              <input type="text" placeholder="Image Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                              <button onClick={handleSearch}>Sök</button>
                              {results.length > 0 && (
                                <ul>
                                  {results.map((result: { link: string, image: { thumbnailLink: string }, title: string }) => (
                                    <li key={result.link}>
                                      <a href={result.link} target="_blank" rel="noopener noreferrer">
                                        <img src={result.image.thumbnailLink} alt={result.title} />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}

                            </div>
                  </>
                )}
              </div>
            );
          };

          