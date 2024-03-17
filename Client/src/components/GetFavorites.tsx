import { useState, useEffect } from 'react';
import axios, { isAxiosError } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


const FavoriteImages = () => {
  const { user } = useAuth0();
  const [favoriteImages, setFavoriteImages] = useState<
    { title: string; link: string }[]>([]);
  




    const handleRemoveFavorite = async (imageUrl: string) => {


      type errorType = {
        thisIsANumber: number;
      };

      try {
        const response = await axios({
          method: 'delete',
          url: `http://localhost:3000/users/favorites`,
          data: {
            userId: user?.sub,
            imageUrl: imageUrl
          }
        });
        console.log("Favorite image removed successfully:", response.data);
        setFavoriteImages(prevImages => prevImages.filter((image) => image.link !== imageUrl));

      }
                  
      catch (error: unknown) {

        if (isAxiosError<errorType>(error)) {
        console.log(
          "There was a problem with the axios operation:",
          error.response ? error.response.data.thisIsANumber : error

        );
      }
    }
  }



  useEffect(() => {
    if (!user || !user.sub) return;

    const userId = user.sub;
    const url = `http://localhost:3000/users/${userId}/favorites`;



    const fetchData = async () => {


      type errorType = {
        thisIsANumber: number;
      };


      try {
        const response = await axios.get(url);
        setFavoriteImages(response.data);
      } 
      
      
      catch (error: unknown) {

        if (isAxiosError<errorType>(error)) {
        console.log(
          "There was a problem with the axios operation:",
          error.response ? error.response.data.thisIsANumber : error

        );
      }
    }
  }
  
    fetchData();
  }, [user, user?.sub]);

  return (
    <div>

      
      
      

      <div className="flex flex-wrap p-6 pl-40 pr-40 items-center justify-between">
        {favoriteImages.map((image, index) => (
          <div key={index} >
            <div >
            <button className='border-2 border-rose-800 rounded-md bg-pinkmonkey w-20 text-base text-white ' onClick={() => handleRemoveFavorite(image.link)} >Delete</button>
            </div>
            <img src={image.link} alt={image.title} className=" w-96 mr-10  " />


          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteImages;