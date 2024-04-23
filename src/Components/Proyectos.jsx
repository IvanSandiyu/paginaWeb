import "../css/Proyectos.css";
import crud from "../imagenes/crud.png";
import java from "../imagenes/java.jpg";
import bannerC from "../imagenes/bannerC.jpg";
import asp from "../imagenes/asp.png";

const AbrirGit = () => {
  const enlaceTemporal = document.createElement("a");
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/CRUD";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};
const AbrirGitJava = () => {
  const enlaceTemporal = document.createElement("a");
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/Crud-con-Java";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};

const AbrirGitC = () => {
  const enlaceTemporal = document.createElement("a");
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/Alta.Baja.Mesa";
  enlaceTemporal.target = "_blank";
  enlaceTemporal.click();
};
const AbrirGitASP = () => {
  const enlaceTemporal = document.createElement("a");
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://github.com/IvanSandiyu/CRUD-ASP.NET";
  enlaceTemporal.target = "_blank";
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
          <img
            src={java}
            alt="java"
            id="java-proyecto"
            onClick={AbrirGitJava}
          />
        </div>
        <div className="bannerCsharp">
          <p className="texto-c">Proyectos realizados con C#</p>
          <img src={bannerC} alt="c#" id="c-proyecto" onClick={AbrirGitC} />
        </div>
        <div className="bannerASP">
          <p className="texto-asp">Proyecto realizado con ASP.NET</p>
          <img src={asp} alt="ASP" id="asp-proyecto" onClick={AbrirGitASP} />
        </div>
      </div>
    </>
  );
}
export default Proyectos;
