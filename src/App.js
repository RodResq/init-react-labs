import React from "react";
import HelloWorld from "./components/HelloWorld";

function App() {
    const nome = 'fulano';
    const nomeUpper = nome.toUpperCase();
    const url = 'https://via.placeholder.com/150';

    function soma(a, b) {
        return a + b;
    }

    return (
        <div className="App">
            <HelloWorld />
            <h2>Meu primeiro app.</h2>
            <p>Ola, {nomeUpper}</p>
            <p>Soma: { soma(1, 2) }</p>
            <img src="{url}" alt="Minha Imagem" />

        </div>
    );
}

export default App