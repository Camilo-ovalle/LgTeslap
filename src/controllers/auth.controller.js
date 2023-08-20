import { pool } from "../connection/conection.js";
import bcrypt from "bcryptjs";
import { tokenGen } from "../libs/jwt.js";

export const loginController = async (req, res) => {
  const { email, password } = await req.body;

  //Here we are looking if there is any email that match with the one sent by the client
  try {
    await pool.query("USE LgTeslap");
    const [logInData] = await pool.query(
      `SELECT COUNT(*) AS count FROM users WHERE user_email = '${email}'`
    );
    const count = logInData[0].count;
    //If there is any match, we will do a second query to find the user information and compare the password
    if (count > 0) {
      const [useFound] = await pool.query(
        `SELECT * FROM users WHERE user_email = '${email}'`
      );

      const isMatch = await bcrypt.compare(password, useFound[0].user_password);
      if (!isMatch) {
        res.status(401).send("Invalid password");
      } else {
        // if the password match  we create a token with the user id and we save it into a cookie
        const token = await tokenGen({ id: useFound[0].user_id });
        res.cookie("token", token);
        res.json({
          id: useFound[0].user_id,
          name: useFound[0].user_name,
          email: useFound[0].user_email,
        });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {}
};

export const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const cryptPassword = await bcrypt.hash(password, 10);
    // here we use the pool to connect to the database and create a query to insert the new user

    await pool.query("USE LgTeslap");
    const [result] = await pool.query(
      `INSERT INTO users(user_name, user_email, user_password) VALUES('${userName}', '${email}', '${cryptPassword}')`
    );
    // here we get the id of the new user to do a new query and get the user data
    const userId = result.insertId;

    const [userSaved] = await pool.query(
      `SELECT user_id, user_name, user_email FROM users WHERE user_id = ${userId};`
    );

    //Here we create the token using an external function for the new user and send it to the frontend and it is saved into a cookie
    const token = await tokenGen({ id: userSaved[0].user_id });
    res.cookie("token", token);
    res.json({
      id: userSaved[0].user_id,
      name: userSaved[0].user_name,
      email: userSaved[0].user_email,
    });
  } catch (error) {
    res.status(500).send("there was an error");
  }
};

export const logOutController = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
