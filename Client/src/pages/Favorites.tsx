import { useAuth0 } from "@auth0/auth0-react";


export const Favorites = () => {



  const { isAuthenticated } = useAuth0();


  return (
    <div className="hiddenSearch">
      {!isAuthenticated && (
        <>
         <span>SIGN IN TO SHOW FAVORITE IMAGES</span>
        </>
      )}
      {isAuthenticated && (
        <>
          <h2>Here are your favorite images</h2>

        </>


      )}
    </div>
  );
}
