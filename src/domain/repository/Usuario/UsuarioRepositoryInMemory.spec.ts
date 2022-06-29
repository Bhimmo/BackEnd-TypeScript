import Usuario from "../../entities/usuario/Usuario"
import UsuarioRepositoryInMemory from "./UsuarioRepositoryInMemory";

describe('testes in memory', ()=> {
    let repositoryInMemory = new UsuarioRepositoryInMemory();
    const props = {
        nome: "Daniel",
        email: "daniel@gmail.com",
        senha: "123"
    }
    
    it('create', async () => {
        let usuario = new Usuario(props);
        
        await repositoryInMemory.inserir(usuario.toJSON());
        
        expect(repositoryInMemory.items).toHaveLength(1);
        expect(repositoryInMemory.items[0]).toHaveProperty("id");
    })

    it('findAll', ( )=> {
        repositoryInMemory.items.forEach((item)=> {
            expect(item).toHaveProperty("id");
            expect(item).toHaveProperty("nome");
            expect(item).toHaveProperty("email");
            expect(item).toHaveProperty("senha");
        })
    })
})