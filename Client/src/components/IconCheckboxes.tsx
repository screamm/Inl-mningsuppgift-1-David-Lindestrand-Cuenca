import axios from "axios";


interface Image {
  title: string;
  link: string;
  byteSize: number;
}

const saveFavoriteImage = async (image: Image, userId: string) => {
  const favoriteObject = {
    title: image.title,
    link: image.link,
    byteSize: image.byteSize,
  };


  try {
    const response = await axios.post("http://localhost:3000/users", {
      userId,
      favorites: [favoriteObject],
    });

    console.log("Client/Favorite saved successfully:", response.data);
  } 
  
  catch (error: unknown) {
    console.error(
      "Client/Error saving favorites:",
      error instanceof Error ? error.message : error
    );
  }

  return (
    <>
      <div>
 

      </div>
    </>
  );
};

export default saveFavoriteImage;