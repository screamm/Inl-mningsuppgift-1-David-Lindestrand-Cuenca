import { useAuth0 } from "@auth0/auth0-react";
import FavoriteImages from "../components/GetFavorites";
import favotext from "../graphics/Favorites monkey.png";
import loginmonkey from "../graphics/Monkey login favorites.svg";



export const Favorites = () => {

  const { isAuthenticated } = useAuth0();



  
  return (
    <div className="hiddenSearch">
      {!isAuthenticated && (
        <>
         {/* <span className="text-5xl flex justify-center mt-40 text-pinkmonkey">LOGIN TO SHOW FAVORITE IMAGES</span> */}
         <img src={loginmonkey} alt="" />
        </>
      )}
      {isAuthenticated && (
        <>
          {/* <h2 className="text-5xl flex justify-center mt-10">FAVORITE IMAGES</h2> */}

          <div className="text-5xl flex justify-center mt-16">
          <img src={favotext} alt="test h1 favorites" className="max-w-96"/>
          </div>


<div className="">
<FavoriteImages />
</div>

        </>


      )}
    </div>
  );
}
