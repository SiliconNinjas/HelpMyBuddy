import express from "express";
import http from "http";
import { PORT } from "./config /config.keys";
import { connectionOptions } from "./config /ormconfig";
import authRoutes from "./routes/user.route";
import { createConnection } from "typeorm";

const app = express();

const server = http.createServer(app);

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to HelpMyBuddy");
});

//! USER
app.use("/api/auth", authRoutes);

// Database connection
const connect = async () => {
  let retry = 5;
  while (retry) {
    try {
      createConnection(connectionOptions);
      break;
    } catch (error) {
      console.log(error);
      const wait = async () => {
        await new Promise(() => setTimeout(() => "nothing", 5000));
      };
      await wait();
      retry -= 1;
    }
  }
};
connect()
  .then(() => {
    console.log("Connected to database ✅");
  })
  .catch((err) => {
    console.error("Error during Connecting to database", err);
  });

//Server listening
server.listen(PORT, () => {
  console.log(`Server is rocking at http://localhost:${PORT} 🚀`);
});
process.on("uncaughtException", (err) => {
  console.log(err);
});
