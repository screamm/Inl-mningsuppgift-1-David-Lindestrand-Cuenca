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
  } catch (error: any) {
    console.error(
      "Client/Error saving favorites:",
      error.response ? error.response.data : error
    );
  }

  return (
    <>
      <div>
        {/* <p>BILD SPARAD</p> */}
       {/* <IconCheckboxes imageData={result} /> */}

      </div>
    </>
  );
};

export default saveFavoriteImage;