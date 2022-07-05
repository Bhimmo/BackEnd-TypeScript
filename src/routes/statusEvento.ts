import express, {Request, Response} from "express";
const router = express.Router();

import StatusEventoRepositoryInBD from "../domain/repository/statusEvento/StatusEventoRepositoryInBD";
import FindAllStatusEventoUseCase from "../domain/useCase/statusEvento/findAll-statusEvento.use-case";
import FindOneStatusEventoUseCase from "../domain/useCase/statusEvento/findOne-statusEvento.use-case";

const statusRepo = new StatusEventoRepositoryInBD();

router.get('/', async (req: Request, res: Response) => {
    const statusUseCase = new FindAllStatusEventoUseCase(statusRepo);
    const result = await statusUseCase.execute();

    res.status(200).json(result);
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({Error: "Id nao encontrado"});
        return false;
    }

    const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
    const result = await statusUseCase.execute(id);

    res.status(200).json(result);
})

export default router;