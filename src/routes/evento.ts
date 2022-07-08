import express, {Request, Response} from "express";
const router = express.Router();

import EventoRepositoryInDB from "../domain/repository/evento/EventoRepositoryInDB";
import CreateEventoUseCase from "../domain/useCase/evento/create-evento.use-case";
import FindAllEventoUseCase from "../domain/useCase/evento/findAll-evento.use-case";
import FindOneEventoUseCase from "../domain/useCase/evento/findOne-evento.use-case";
import DeleteEventoUseCase from "../domain/useCase/evento/delete-evento.use-case";

const eventoRepo = new EventoRepositoryInDB();

router.get('/', async (req: Request, res: Response) => {
    const eventoUseCase = new FindAllEventoUseCase(eventoRepo);
    const result = await eventoUseCase.execute();

    res.status(200).json(result);
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    const eventoUseCase = new FindOneEventoUseCase(eventoRepo);
    const result = await eventoUseCase.execute(id);

    res.status(200).json(result);
})

router.post('/', async (req: Request, res: Response) => {
    const {
        nome,
        descricao,
        dataInicio,
        dataFinal,
        valor,
        statusId,
        enderecoId
    } = req.body;

    if (!nome || !descricao || !dataInicio || !dataFinal || !valor) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    const eventoUseCase = new CreateEventoUseCase(eventoRepo);
    const result = await eventoUseCase.execute(nome, descricao, dataInicio, dataFinal, valor, statusId, enderecoId);
    
    res.status(201).json(result);
})

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    const eventoUseCase = new DeleteEventoUseCase(eventoRepo);
    await eventoUseCase.execute(id);

    res.status(204).json();
})

export default router;