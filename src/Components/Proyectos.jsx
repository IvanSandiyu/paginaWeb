import "../css/Proyectos.css";
import crud from "../imagenes/crud.png";
import java from "../imagenes/java.jpg";
import bannerC from "../imagenes/bannerC.jpg";
function Proyectos() {
  return (
    <>
      <div className="proyectos">
        <div className="crud">
          <img src={crud} alt="crud" id="crud" />
          <p className="texto-crud">
            CRUD realializado con FastAPI + React + PostgreSQL
          </p>
        </div>
        <div className="java">
          <p className="texto-java">
            Proyectos realizados con Java IDE Ecplipse
          </p>
          <img src={java} alt="java" id="java-proyecto" />
        </div>
        <div className="bannerCsharp">
        <p className="texto-c">
            Proyectos realizados con C#
          </p>
          <img src={bannerC} alt="c#" id="c-proyecto" />
        </div>
      </div>
    </>
  );
}
export default Proyectos;
