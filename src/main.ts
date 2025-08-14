import routes from "./Api/routes";
import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.use(express.json());

//GET rota
app.get('/', (req: Request, res: Response) => {
    res.json('Rota estabelecida');
});

app.use('/api', routes);

app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost: ${port}`)
});