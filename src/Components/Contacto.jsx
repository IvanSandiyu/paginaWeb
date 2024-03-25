import "../css/Contacto.css";
import linkedin from "../imagenes/linkedin.svg";
import cv from "../imagenes/cv.svg";
import gmail from "../imagenes/gmail.svg";

const descargarCurriculum = () => {
  const enlaceTemporal = document.createElement('a');
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://drive.google.com/file/d/1a0us3eG80vY8ijdV33_rOhxOpSdegLe5/view?usp=drive_link"
  enlaceTemporal.target = "_blank"
  enlaceTemporal.download = "CV_IvanSandiyu2024.pdf"; 
  enlaceTemporal.click();
};

const abrirLinkedin = () => {
  const enlaceLinkedin = document.createElement('a');
  enlaceLinkedin.href = "https://www.linkedin.com/in/ivansandiyu";
  enlaceLinkedin.target = "_blank"; // Abre el enlace en una nueva pestaña
  
  enlaceLinkedin.click();

};

const abrirGmail = () => {
  const destinatario = 'isandiyu@gmail.com';
  const enlaceCorreo = `mailto:${destinatario}`;
  window.open(enlaceCorreo);
};
function Contacto() {
  return (
    <>
      <div className="contacto">
        <h1 className="texto-contacto">CONTACTO</h1>
        <div className="contactarme">
          <img src={linkedin} alt="linkedin" onClick={abrirLinkedin} id="linkedin" title="Linkedin"/>
          <img src={cv} alt="Cv" onClick={descargarCurriculum} id="cv" title="CV"/>
          <img src={gmail} alt="gmail" onClick={abrirGmail} id="gmail" title="E-mail"/>
        </div>
      </div>
    </>
  );
}

export default Contacto;
