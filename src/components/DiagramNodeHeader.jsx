import '../styles/DiagramNodeHeader.css'

  const DiagramNodeHeader= (props) => {    

      return (
        <div className="diagramNodeHeader">
            {props.content}
        </div>
      );
    };
  export default DiagramNodeHeader;