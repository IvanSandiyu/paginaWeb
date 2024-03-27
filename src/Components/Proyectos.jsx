import "../css/Proyectos.css";
import crud from "../imagenes/crud.png";
import java from "../imagenes/java.jpg";
import bannerC from "../imagenes/bannerC.jpg";

const AbrirGit = () => {
  const enlaceTemporal = document.createElement('a');
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/CRUD"
  enlaceTemporal.target = "_blank"
  enlaceTemporal.click();
};
function Proyectos() {
  return (
    <>
      <div className="proyectos">
        <div className="crud">
          <img src={crud} alt="crud" id="crud" onClick={AbrirGit} />
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
