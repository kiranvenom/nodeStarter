import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
const app = express();
import v1 from './routes/v1/index.route';

const port = process.env.PORT;
app.use(express.json());

app.use('/api/v1', v1);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.send({ working: true, error: false });
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
