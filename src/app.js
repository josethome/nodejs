import express from "express";
import mongoose, { mongo } from "mongoose";
import routes from "./routes";

class App {
    constructor() {
        this.server = express();

        this.database();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
    }

    database() {
        mongoose.connect(
            "mongodb+srv://<username>:123@cluster0-fyr5j.mongodb.net/test?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
    }

    routes() {
        this.server.use(routes);
    }
}

// Import/Export - Node não entende está sintaxe
// É necesSário a instalação da biblioteca sucrase
// Use: yarn add sucrase -D
export default new App().server;