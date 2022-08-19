import '../styles/DiagramNodeSide.css'

  const DiagramNodeSide= (props) => {    

      return (
        <div className="diagramNodeSide">
            {props.content}
        </div>
      );
    };
  export default DiagramNodeSide;