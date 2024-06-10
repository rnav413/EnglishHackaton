import React, { useState } from 'react';

const WritingTest = () => {
  const [topic, setTopic] = useState("Tema aleatorio");
  const [composition, setComposition] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  // Aquí puedes configurar la lógica para manejar la selección de temas y el límite de tiempo.
  // También se puede agregar lógica para deshabilitar copiar-pegar y correctores del navegador.

  const handleSubmit = () => {
    // Lógica para enviar la composición al backend y obtener la retroalimentación
  };

  return (
    <div className="container">
      <h2 className="mt-5">Prueba de Escritura</h2>
      <p>Tema: {topic}</p>
      <textarea
        value={composition}
        onChange={(e) => setComposition(e.target.value)}
        rows="10"
        cols="50"
        maxLength="500"
      />
      <p>Tiempo restante: {timeLeft} segundos</p>
      <button onClick={handleSubmit} className="btn btn-primary mt-3">Enviar</button>
    </div>
  );
};

export default WritingTest;
