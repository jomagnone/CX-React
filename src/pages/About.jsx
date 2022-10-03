import WrapperRow from '../components/WrapperRow.jsx'
import WrapperContainer from '../components/WrapperContainer.jsx'
import CardDescriptionDetail from '../components/CardDescriptionDetail.jsx'



function About() {
    return (
    <>
    <WrapperContainer>
        <WrapperRow>
            <CardDescriptionDetail desc={"Diseñar soluciones innovadoras y eficientes que potencien la experiencia de nuestros clientes y que contribuyan a la evolución de OPR"} title={"Customer Experience"} />
            <CardDescriptionDetail desc={"Potenciar e innovar la coordinación logística de la atención técnica, optimizando la asignación del trabajo y el cumplimiento de lo pactado con el cliente, para fortalecer su experiencia en el delivery de la última milla de nuestro servicio."} title={"Area: Delivery Tecnico"} />
            <CardDescriptionDetail desc={"Diseñar y construir soluciones que evolucionen la interacción con los clientes a través de la digitalizacion con foco en la  experiencia omnicanal para generar cercania y un vinculo mas frecuente en el journey tecnico"} title={"Area: Exp. Digital"} />
            <CardDescriptionDetail desc={"Idear, planificar y coordinar el despliegue de los nuevos productos, proyectos y evolutivos  en OPR.  Diseñar las estrategias de acompañamiento en las implementaciones asegurando la adopcion de los cambios y minimizando el impacto en la operacion."} title={"Area: Go 2 Market"} />
            <CardDescriptionDetail desc={"Idear, planificar y coordinar todas las mediciones y análisis de datos para todo despliegue de nuevos productos, proyectos y evolutivos en OPR; como así también soporte de análisis para la búsqueda continua de oportunidades de mejora en los procesos actuales."} title={"Area: Analitycs"} />
            <CardDescriptionDetail desc={"Liderar el desarrollo del producto Field Service Management, en el marco de un equipo agil  e integrado al ecosistema de la Tribu OSS. Coordinar de las dependencias con los Squads del Cluster WFM y las interdependencias con la Tribu Clientes."} title={"Area: Fuerza de Trabajo"} />
            <CardDescriptionDetail desc={"Soporte y evolución de los procesos técnicos de OPR, identificando oportunidades que potencien la experiencia y eficiencia con mirada punta a punta del Journey del cliente."} title={"Area: Soporte y Procesos"} />
        </WrapperRow>
    </WrapperContainer>
    </>
        );
  }
  
  export default About;