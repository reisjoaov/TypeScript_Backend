import { Router } from "express";
import UsuarioRepositorio from "../infra/UsuarioRepositorio";
import UsuarioController from "./UsuarioController";

const routes = Router();

const usuarioRepositorio = new UsuarioRepositorio();
const usuarioController = new UsuarioController(usuarioRepositorio);

routes.use('/usuarios', usuarioController.router);

export default routes;