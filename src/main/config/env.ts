/* eslint-disable @typescript-eslint/no-magic-numbers */
import { config } from "dotenv";

config();

export const env = {
  port: parseInt(process.env.PORT) || 8080,
};
