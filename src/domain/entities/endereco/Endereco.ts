import crypto from 'crypto';

export default class Endereco {
    public readonly id: string;
    constructor(
        public logradouro: string,
        public bairro: string,
        public numero: string,
        public cep: string,
        public complemento?: string,
        id?: string
    ) {
        this.id = id || crypto.randomUUID();
    }
}