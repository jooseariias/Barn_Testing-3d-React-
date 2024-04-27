import { useState } from "react";
import Scene from "./Components/Scene";


function App() {

  const [selectedPart, setSelectedPart] = useState("");
  const [previousPart, setPreviousPart] = useState(null);

  const handleChange = (e) => {
    setPreviousPart(selectedPart);
    setSelectedPart(e.target.value);
  };

  return (
    <div>
      <h1>Prueba Barn_Testing</h1>
      <section className="container">
        <aside>
          <h2>Seleccionar Pared para cambiar a rojo</h2>
          <div className="select-part">
          <label>
            Seleccionar Pared:
            <select value={selectedPart} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="LoftedBarn_6Wall_10x12_None_Wall1">Pared 1</option>
              <option value="LoftedBarn_6Wall_10x12_None_Wall2">Pared 2</option>
              <option value="LoftedBarn_6Wall_10x12_None_Wall3">Pared 3</option>
              <option value="LoftedBarn_6Wall_10x12_None_Wall4">Pared 4</option>
            </select>
          </label>
          </div>
        </aside>
        <div>
          <Scene selectedPart={selectedPart} previousPart={previousPart} />
        </div>
      </section>
    </div>
  );
}

export default App;
