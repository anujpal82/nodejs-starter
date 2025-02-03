import express from "express";
import entryPoint from "./routes/index.js";
import { errorHandler } from "./utils.js";

const app = express();

app.use("/api/v1/", entryPoint);

// Global error handler (MUST be placed after all routes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
