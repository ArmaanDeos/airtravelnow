import { Duffel } from "@duffel/api";
import dotenv from "dotenv";
dotenv.config();
const duffel = new Duffel({
  token: process.env.DUFFEL_API_KEY,
});

export default duffel;
