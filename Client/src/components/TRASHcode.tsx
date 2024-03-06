


//FRÅN HOME.TSX



  // const [message, setMessage] = useState("Testar att hämta data från servern");

  // useEffect(() => {
  //   fetch("http://localhost:3000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  // const API = import.meta.env.VITE_GOOGLE_API_KEY;
  // const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // console.log(API);
  // console.log(ClientID);  


  // useEffect(() => {
  //   const search = async () => {
      
  //       const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&num=10&searchType=image&q=flowers`);
  //       const data = response.data;
  //       console.log(data);

  //   }
  //   search();
  // }
  // , []);











  
//     return (
//       <div className="hiddenSearch">
//         {!isAuthenticated && (
//           <>
//            <span>SIGN IN TO SEARCH</span>
//           </>
//         )}
//         {isAuthenticated && (
//           <>
//             <input type="text" placeholder="Sök på Google"/>

// <button onClick={() => {

// handleSearch();

//   // axios.get(`https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_API_KEY}&cx=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&num=10&searchType=image&q=flowers`);
//   console.log("Söker på Google");
// }}
// >Sök</button>
//           </>
//         )}
//       </div>
//     );
//   };





//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );