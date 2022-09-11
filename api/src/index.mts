import express from 'express';
import remultExpress from 'remult/remult-express';
import {Post} from 'shared';

const app = express();

app.use(remultExpress.remultExpress({entities: [Post]}));

app.listen(3000);

