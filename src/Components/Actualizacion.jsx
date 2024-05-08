
const nuevaPag = () => {
  const enlaceTemporal = document.createElement('a');
  // Asignar la URL del archivo a descargar al atributo 'href' del enlace
  enlaceTemporal.href = "https://new-pagina.vercel.app/"
  enlaceTemporal.target = "_blank"
  enlaceTemporal.click();
};

const estilosH1 = {
  cursor: 'pointer' ,
};

function Actualizacion() {
  return (
    <>
    
      <div className="actualizacion">
        <h1 onClick={nuevaPag} style={estilosH1}>Nueva pagina en proceso haga click aquí</h1>
      </div>
    </>
  );
}
export default Actualizacion;
