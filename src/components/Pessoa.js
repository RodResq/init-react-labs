import Frase from "./Frase";

function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <Frase />
            <Frase />
            <img src={foto} alt={nome} />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa;