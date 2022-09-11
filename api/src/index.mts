import express from "express";
import remultExpress from "remult/remult-express";
import { Post } from "shared";
import cors from "cors";

const app = express();

app.use(cors());

app.use(remultExpress.remultExpress({ entities: [Post] }));

app.listen(3000);
