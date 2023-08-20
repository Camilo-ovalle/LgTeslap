import { pool } from "../connection/conection.js";

// User Creation query
export const usersListController = async (req, res) => {
  try {
    await pool.query("USE LgTeslap");
    const [result] = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    res.send("There was an error");
  }
};

// User deleting query
export const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id; // Suponiendo que el ID esté en los parámetros de la URL
    await pool.query("USE LgTeslap");

    const [result] = await pool.query(
      `DELETE FROM users WHERE user_id = '${userId}'`
    );

    if (result.affectedRows === 1) {
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).json("There was an error");
  }
};
