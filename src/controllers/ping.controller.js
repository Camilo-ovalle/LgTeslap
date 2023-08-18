import { pool } from "../connection/conection.js";

export const pingController = async (req, res) => {
  await pool.query(`USE universidad`);

  const [result] = await pool.query(`SELECT * FROM users`);
  res.send(result);
};
