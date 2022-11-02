import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const lowerCase = text.toLowerCase();

  const words = lowerCase.split(" ");

  const primeiraLetra = text.charAt(0);

  const ultimaLetra = text.slice(-1);

  const startsWithA = words.filter((word) => word.startsWith("A"));
  const startsWitha = words.filter((word) => word.startsWith("a"));
  const startsWithAfinal = startsWithA.length + startsWitha.length;

  const endWithZ = words.filter((word) => word.endsWith("Z"));
  const endWithz = words.filter((word) => word.endsWith("z"));
  const endWithZfinal = endWithZ.length + endWithz.length;

  function reverseString(text) {
    var newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
      newString += text[i];
    }
    return newString;
  }

  return (
    <div>
      <h1 className="title">Introduz uma frase</h1>
      <main className="main">
        <input
          className="input"
          placeholder="Introduza uma frase"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button
          value={text}
          onClick={() => {
            setText("");
          }}
        >
          Apagar frase
        </button>
        <h3>Quantidade de palavras: {words.length}</h3>
        <h3>Quantidade de palavras (que começam com A): {startsWithAfinal}</h3>
        <h3>Quantidade de palavras (que acabam com Z): {endWithZfinal}</h3>
        <h3>Primeira letra da frase: {primeiraLetra}</h3>
        <h3>Última letra da frase: {ultimaLetra}</h3>
        <h3>Frase ao contrário: {reverseString(text)}</h3>
      </main>
    </div>
  );
}

export default App;
