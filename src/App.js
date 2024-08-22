import React, { useState } from 'react';

function App() {
  const [genero, setGenero] = useState('');
  const [paginas, setPaginas] = useState('');
  const [saga, setSaga] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza una solicitud a un endpoint ficticio. 
    const response = await fetch(`http://127.0.0.1:5000/libro_aleatorio?genero=${genero}&paginas=${paginas}&saga=${saga}`);
    const data = await response.json();

    setResultado(data);
  };

  return (
    <div className="App">
      <h1>Selector de Libros Aleatorios</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Género:
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </label><br/>

        <label>
          Máximo de Páginas:
          <input
            type="number"
            value={paginas}
            onChange={(e) => setPaginas(e.target.value)}
          />
        </label><br/>

        <label>
          ¿Parte de una saga?
          <input
            type="checkbox"
            checked={saga}
            onChange={(e) => setSaga(e.target.checked)}
          />
        </label><br/>

        <button type="submit">Buscar</button>
      </form>

      {resultado && (
        <div>
          <h2>{resultado.titulo}</h2>
          <p><strong>Autor:</strong> {resultado.autor}</p>
          <p><strong>Género:</strong> {resultado.genero}</p>
          <p><strong>Páginas:</strong> {resultado.paginas}</p>
          <p><strong>Saga:</strong> {resultado.saga || 'No'}</p>
          <p><strong>Descripción:</strong> {resultado.descripcion}</p>
        </div>
      )}
    </div>
  );
}

export default App;
