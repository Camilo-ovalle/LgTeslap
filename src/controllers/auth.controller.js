import { pool } from "../connection/conection.js";

export const loginController = async (req, res) => {
  res.send("login");
};

/* Here is the explanation for the code above:
1. First we destructure the req.body to extract the userName, email, and password
2. Then we set the database we want to use with the USE command
3. Then we run the query to insert the values into the users table
4. Finally we send the result of the query to the frontend */
export const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    await pool.query("USE LgTeslap");
    const [result] = await pool.query(
      `INSERT INTO users(user_name, user_email, user_password) VALUES('${userName}', '${email}', '${password}')`
    );

    if (result.affectedRows === 1) {
      res.status(200).send("User registered successfully");
    } else {
      res.status(500).json("There was an error during the registration");
    }
  } catch (error) {
    res.send(error);
  }
};
