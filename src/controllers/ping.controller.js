import { pool } from "../connection/conection.js";

export const pingController = async (req, res) => {
  try {
    await pool.query(`USE LgTeslap`);

    const [result] = await pool.query(`SHOW TABLES`);
    res.send(result);
  } catch {
    res.send("there was an error");
  }
};
