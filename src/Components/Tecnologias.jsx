import "../css/Tecnologias.css";
import logoCsharp from "../imagenes/CSharp.png";
import logoJava from "../imagenes/Java.svg";
import logoJavaScript from "../imagenes/JavaScript.svg";
import logoSQL from "../imagenes/Postgresql.svg";
import logoReact from "../imagenes/React.svg";




function Tecnologias() {
  
  return (
    <>
      <div className="cuadrado">
        <h1 className="texto">TECNOLOGIAS</h1>
        <div className="fila">
          <img src={logoCsharp} alt="C#" id="csharp" className="item"/>
          <img src={logoJava} alt="Java" id = "java" className="item"/>
          <img src={logoJavaScript} alt="JS" id="js" className="item"/>
          <img src={logoReact} alt="React" id="react" className="item"/>
          <img src={logoSQL} alt="PostgreSQL" id="sql" className="item"/>
        </div>
      </div>
    </>
  );
}
export default Tecnologias;
