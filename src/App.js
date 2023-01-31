import React from "react";
import './index.css'
import SayMayName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
    const nome = 'fulano';
    const nomeUpper = nome.toUpperCase();
    const url = 'https://via.placeholder.com/150';

    function soma(a, b) {
        return a + b;
    }

    return (
        <div className="App">
            <SayMayName name="Mattheus" />
            <SayMayName name={nome} />
            <Pessoa foto="https://via.placeholder.com/150" nome="Rodrigo" idade="34" profissao="Programador"/>
        </div>
    );
}

export default App