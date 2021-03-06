import express from "express";
import { connectToDatabase } from "./services/database.service"
import { gamesRouter } from "./routes/games.router";


const app = express()


connectToDatabase()
    .then(() => {
        app.use("/games", gamesRouter);

        app.listen(3000, () => {
            console.log(`Server started at http://localhost:${3000}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });