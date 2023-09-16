//There are the variables that are used in the project to connect to the database and the port where the server will be hosted
export const DB_HOST = process.env.DB_HOST || "172.172.92.27";
export const DB_NAME = process.env.DB_NAME || "LgTeslap";
export const DB_PASSWORD = process.env.DB_PASSWORD || "CA1015OV";
export const DB_USER = process.env.DB_USER || "Camilo";
export const DB_PORT = process.env.DB_PORT || 3306;
export const APP_PORT = process.env.APP_PORT ?? 3000;

//Secret key for the token generator
export const SECRET_KEY = "SecretKey";
