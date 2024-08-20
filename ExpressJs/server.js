import express from "express";
import path from "path";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { fileURLToPath } from "url";
import posts from "./routes/post.js";
import logger from "./middleware/logger.js";

const port = process.env.PORT || 9000;
const app = express();

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Body parser Middleware POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger
app.use(logger);

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
