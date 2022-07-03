import express, {Request, Response} from "express";
const router = express.Router();
import TipoUsuarioRepositoryInDB from "../domain/repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import FindAllTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/findAll-tipoUsuario.use-case";
import FindOneTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/findOne-tipoUsuario.use-case";
import CreateTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/create-tipoUsuario.use-case";

const tipoRepo = new TipoUsuarioRepositoryInDB();

router.get('/', async (req: Request, res: Response) => {
    const tipoUseCase = new FindAllTiposUsuarioUseCase(tipoRepo);
    const result = await tipoUseCase.execute();

    res.status(200).json(result);
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const tipoUseCase = new FindOneTiposUsuarioUseCase(tipoRepo);
    const result = await tipoUseCase.execute(id);

    res.status(200).json(result);
})

router.post('/', async (req: Request, res: Response) => {
    const { descricao } = req.body;

    const tipoUseCase = new CreateTiposUsuarioUseCase(tipoRepo);
    const result = await tipoUseCase.execute(descricao);

    res.status(201).json(result);
})
export default router;
