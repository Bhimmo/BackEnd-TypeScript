import express, {Request, Response} from "express";
const router = express.Router();
import TipoUsuarioRepositoryInDB from "../domain/repository/tipoUsuario/TipoUsuarioRepositoryInDB";
import FindAllTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/findAll-tipoUsuario.use-case";
import FindOneTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/findOne-tipoUsuario.use-case";
import CreateTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/create-tipoUsuario.use-case";
import DeleteTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/delete-tipoUsuario.use-case";
import UpdateTiposUsuarioUseCase from "../domain/useCase/tipoUsuario/update-tipoUsuario.use-case";

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

    if (!descricao) {
        res.status(500).json({message: "Error nos paramentros"})
        return false;
    }

    const tipoUseCase = new CreateTiposUsuarioUseCase(tipoRepo);
    const result = await tipoUseCase.execute(descricao);

    res.status(201).json(result);
})

router.delete('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({message: "ID invalido"})
        return false;
    }

    try {
        const tipoUseCase = new DeleteTiposUsuarioUseCase(tipoRepo);
        await tipoUseCase.execute(id);
        
        res.status(204).json();
    } catch (e: any) {
        res.status(500).json({
            Error: e.message
        });
    }
})

router.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { descricao } = req.body;

    if (!id || !descricao) {
        res.status(500).json({Error: "dados inválidos"});
    }

    try {
        const tipoUseCase = new UpdateTiposUsuarioUseCase(tipoRepo);
        const result = await tipoUseCase.execute(id, descricao);
    
        res.status(200).json(result);
    } catch (e: any) {
        res.status(500).json({
            Error: e.message
        })
    }
})
export default router;
