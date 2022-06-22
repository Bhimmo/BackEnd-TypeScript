
type PropsEvento = {
    nome: string,
    descricao: string,
    valor: number,
    dataInicial: Date,
    dataFinal: Date
}

class Evento {
    constructor(public props: PropsEvento) {}
}