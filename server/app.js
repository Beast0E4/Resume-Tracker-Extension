import express from "express";
import cors from "cors";
import applicationRoutes from "./src/routes/application.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/applications", applicationRoutes);

export default app;
