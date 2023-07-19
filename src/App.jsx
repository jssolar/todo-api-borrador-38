import { useState } from "react";
import "./App.css";
import { FaTrash} from 'react-icons/fa'



const App = () => {
  const [tarea, setTarea] = useState("");
  const [nuevaTarea, setNuevaTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleClick = () => {
    if (tarea !== "") {
      setNuevaTarea(nuevaTarea.concat(tarea));
      setTarea("");
    }
  };

  return (
    <div className="contenedor-lista container-fluid py-5 my-5">
      <form type="submit" onSubmit={handleSubmit}>
        <input
          className="input-tareas"
          type="text"
          value={tarea}
          onChange={handleChange}
        />
        <button
          className="boton-agregar-tarea "
          type="submit"
          onClick={handleClick}
        >
          Agregar nueva tarea
        </button>
        <ul className="ul-lista">
          {nuevaTarea.length > 0 ? (
            nuevaTarea.map((itemTarea, index) => {
              return (
                <li className="list-group  lista-li" key={index}>
                  <FaTrash className="borrador" />{itemTarea}<FaTrash className="borrador" />
                </li>
                
              );
            })
          ) : (
            <h4>No hay treas pendientes</h4>
          )}
        </ul>
      </form>
    </div>
  );
};

export default App;
