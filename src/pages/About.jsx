import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import CardDescriptionDetail from '../components/CardDescriptionDetail.jsx'
let text = `• Proveer información mediante indicadores de Disponibilidad y Performance técnica de la red, a fin de notificar el nivel de servicio a los distintos estratos de la Compañía.
                <br />
                • Investigar nuevos indicadores y correlación de métricas existentes que permitan identificar oportunidades de mejora.
                <br />
                • Realizar el seguimiento de la evolución de los indicadores, producto de su gestión operativa.
                <br />
                • Interactuar con distintas áreas de la Compañía compartiendo el conocimiento técnico, en búsqueda de la mejora continua de los servicios.
                <br />
                • Identificar las necesidades de herramientas de monitoreo y detección de fallas para la red HFC y elaborar las definiciones funcionales de la mismas.
                <br />
                • Gestionar la implementación con IT y brindar soporte funcional de las herramientas de monitoreo de la red HFC.
                <br />
                • Gestionar la mejora continua de las métricas y umbrales que utilizan las herramientas de monitoreo HFC para el correcto diagnóstico de fallas y performance de la red.
                <br />`



function About() {
    return (
    <>
    <WrapperContainer>
        <WrapperRow>
            <CardDescriptionDetail desc={"Nuestro Objetivo como area es generar y administrar información acerca del funcionamiento y prestaciones de la infraestructura técnica, basándose en la obtención de métricas e indicadores clave adoptados por la Compañía, para la gestión y verificación de la calidad de servicio; identificar las herramientas de monitoreo, detección y diagnóstico de la red HFC utilizadas en las áreas operativas, gestionar su implementación, roadmap evolutivo y soporte funcional."} title={"Sobre Nostros"} />
            <CardDescriptionDetail desc={text} title={"Responsabilidades"} />
        </WrapperRow>
    </WrapperContainer>
    </>
        );
  }
  
  export default About;