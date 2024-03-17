
const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");
const { addFavoriteSchema } = require("./schemas/addFavorite");
const joi = require("joi");


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const usersFilePath = "users.json";


// HÄMTA ANVÄNDARES FAVORITBILDER

app.get("/users/:userId/favorites", async (req, res) => {
  const { userId } = req.params; 
  console.log("Server/Fetching favorite images for userId:", userId);
  try {
    console.log("Server/Reading from users.json"); 
    const usersData = await fs.readFile(usersFilePath, "utf8"); 
    console.log(
      "Server/Data read from users.json:",
      usersData.substring(0, 100)
    );
    const users = JSON.parse(usersData); 
    const userFavorites = users.find(
      (user) => user.userId === userId 
    )?.favorites;

    if (!userFavorites) {
      
      return res
        .status(404)
        .send("Server/User not found or has no favorite images.");
    }

    res.json(userFavorites); 
  } catch (error) {
    console.error("Server/Error fetching user's favorite images:", error);
    res.status(500).send("Server error fetching user's favorite images");
  }
});




// LÄGG TILL ANVÄNDARES FAVORITBILDER

app.post("/users", async (req, res) => {

  const { error } = addFavoriteSchema.validate(req.body); 
  if (error) {
    
    return res.status(400).send(error.details[0].message);
  }

    const { userId, favorites } = req.body; 
  try {
    console.log("Server/Reading from users.json for update"); 
    const usersData = await fs.readFile(usersFilePath, "utf8");
    let users = JSON.parse(usersData);

    let userIndex = users.findIndex((user) => user.userId === userId); 
    if (userIndex === -1) {
      console.log(`Server/Adding new user with userId: ${userId}`);
      users.push({ userId, favorites: favorites }); 
    } else {
      console.log(`Server/Updating existing favorites for userId: ${userId}`);
      users[userIndex].favorites.push(...favorites); 
    }


    console.log(
      "Server/Updating users.json with data:",
      JSON.stringify(users, null, 2).substring(0, 100) 
    ); 
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2)); 
    res.status(201).send("Server/Favorite image saved"); 


  } catch (error) {
    console.error("Server/Error saving favorite image:", error);
    res.status(500).send("Server error saving favorite image");
  }
});




// TAG BORT EN ANVÄNDARES FAVORITBILD

  app.delete('/users/favorites', async (req, res) => {
    const { userId, imageUrl } = req.body;


  
  const usersData = await fs.readFile(usersFilePath, 'utf8');
  let users = JSON.parse(usersData);
  const userIndex = users.findIndex(user => user.userId === userId);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  
  users[userIndex].favorites = users[userIndex].favorites.filter(image => image.link !== imageUrl);

  
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

  res.status(200).send('Favorite image removed successfully');
});




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});