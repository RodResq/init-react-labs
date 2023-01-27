import React from "react";
import HelloWorld from "./components/HelloWorld";
import SayMayName from "./components/SayMyName";

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
            <SayMayName name="Mattheus" />
            <SayMayName name={nome} />
        </div>
    );
}

export default App