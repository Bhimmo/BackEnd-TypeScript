import express, {Request, Response} from "express";
import TipoUsuarioRepositoryInDB from "../domain/repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import FindAllTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/findAll-usuario.use-case";
const router = express.Router();

const tipoRepo = new TipoUsuarioRepositoryInDB();

router.get('/', async (req: Request, res: Response) => {
    const tipoUseCase = new FindAllTiposUsuarioUseCase(tipoRepo);
    const result = await tipoUseCase.execute();

    res.status(200).json(result);
})

export default router;
