import express from "express";
import http from "http";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";
import { createConnection } from "typeorm";
import { PORT } from "./config /config.keys";
import { connectionOptions } from "./config /ormconfig";

// Create Express application instance
const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to HelpMyBuddy :)");
});

// Routes for user-related operations
app.use("/api/user", userRoutes);

// Routes for task-related operations
app.use("/api/task", taskRoutes);

// Function to establish database connection
const connect = async () => {
  let retry = 5;
  while (retry) {
    try {
      await createConnection(connectionOptions);
      break;
    } catch (error) {
      console.log(error);

      const wait = async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      };
      await wait();
      retry -= 1;
    }
  }
};

// Attempt to connect to the database
connect()
  .then(() => {
    console.log("Connected to database ✅");
  })
  .catch((err) => {
    console.error("Error during database connection", err);
  });

// Start the server and listen for incoming requests
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} 🚀`);
});

// Error handling for uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(err);
});
