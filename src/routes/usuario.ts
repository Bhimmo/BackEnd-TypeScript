import express, {Request, Response} from "express";
const router = express.Router();
import UsuarioRepositoryInDB from "../domain/repository/Usuario/UsuarioRepositoryInDB";

import FindAllUsuarioUseCase from "../domain/useCase/usuario/findAll-usuario.use-case";
import CreateUsuarioUseCase from "../domain/useCase/usuario/create-usuario.use-case";

const userRepo = new UsuarioRepositoryInDB();

router.get('/', async (req: Request, res: Response) => {
    const userUseCase = new FindAllUsuarioUseCase(userRepo);
    const result = await userUseCase.execute();

    res.status(200).json(result);
})

router.post('/', async (req: Request, res: Response) => {
    let { nome, email, senha } = req.body;
    const userUseCase = new CreateUsuarioUseCase(userRepo);
    const result = await userUseCase.execute({nome, email, senha});

    res.status(201).json(result);
})

export default router;