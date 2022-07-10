import express, {Request, Response} from "express";
import EnderecoRepositoryInBD from "../domain/repository/endereco/EnderecoRepositoryInBD";
const router = express.Router();
import CreateEnderecoUseCase from "../domain/useCase/endereco/create-endereco.use-case";

const enderecoRepo = new EnderecoRepositoryInBD();

router.post('/', async (req: Request, res: Response) => {
    const { logradouro, bairro, numero, cep, complemento } = req.body;

    if (!logradouro || !bairro || !numero || !cep) {
        res.status(500).json({Error: "dados inválidos"});
        return false;
    }

    const enderecoUseCase = new CreateEnderecoUseCase(enderecoRepo);
    const result = await enderecoUseCase.execute({logradouro, bairro, numero, cep, complemento});

    res.status(200).json(result);
})

export default router;