import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connetionDB from "./DB/Db.js";
import noteRouter from "./routes/Note.route.js";
dotenv.config({
  path: "./.env",
});
const app = express();
app.use(cors());
app.use(express.json());

// route declearation...

app.use("/api/v1", noteRouter);

const PORT = process.env.PORT || 4000;
connetionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is started on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
