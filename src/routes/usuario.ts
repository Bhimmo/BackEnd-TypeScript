import express, {Request, Response} from "express";
const router = express.Router();
import UsuarioRepositoryInDB from "../domain/repository/Usuario/UsuarioRepositoryInDB";

import FindAllUsuarioUseCase from "../domain/useCase/usuario/findAll-usuario.use-case";
import CreateUsuarioUseCase from "../domain/useCase/usuario/create-usuario.use-case";
import DeleteUsuarioUseCase from "../domain/useCase/usuario/delete-usuario.use-case";
import UpdateUsuarioUseCase from "../domain/useCase/usuario/update-usuario.use-case";
import FindOneUsuarioUseCase from "../domain/useCase/usuario/findOne-usuario.use-case";

const userRepo = new UsuarioRepositoryInDB();

router.get('/', async (req: Request, res: Response) => {
    const userUseCase = new FindAllUsuarioUseCase(userRepo);
    const result = await userUseCase.execute();

    res.status(200).json(result);
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    const userUseCase = new FindOneUsuarioUseCase(userRepo);
    const result = await userUseCase.execute(id);

    res.status(200).json(result);
})

router.post('/', async (req: Request, res: Response) => {
    let { nome, email, senha, tipoId } = req.body;

    if (!nome || !email || !senha || !tipoId) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    try {
        const userUseCase = new CreateUsuarioUseCase(userRepo);
        const result = await userUseCase.execute({nome, email, senha, tipoId});
    
        res.status(201).json(result);
    } catch (e: any) {
        res.status(500).json({Error: e.message})
    }
})

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    try {
        const userUseCase = new DeleteUsuarioUseCase(userRepo);
        await userUseCase.execute(id);
    
        res.status(204).json();
    } catch (e: any) {
        res.status(500).json({Error: e.message});
    }
})

router.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email, senha, tipoId } = req.body;

    if (!id || !nome || !email || !senha || !tipoId) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    try {
        const userUseCase = new UpdateUsuarioUseCase(userRepo);
        const result = await userUseCase.execute(id, req.body);
    
        res.status(200).json(result);
    } catch (e: any) {
        res.status(500).json({Error: e.message});
    }
})

export default router;