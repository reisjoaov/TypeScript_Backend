import routes from "./Api/routes";
import express, {NextFunction, Request, Response} from "express";
import Logger from './infra/Logger';

const app = express();
const port = 3000;

app.use(express.json());

app.use ((req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} Chamada ao método: ${req.method} url: ${req.url} `);
    next();
});

app.use('/api', routes);
app.use(Logger);

//GET rota
app.get('/', (req: Request, res: Response) => {
    res.json('Rota estabelecida');
});

app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost: ${port}`)
});