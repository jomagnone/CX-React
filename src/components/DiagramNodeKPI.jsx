import '../styles/DiagramNodeKPI.css'

  const DiagramNodeKPI= (props) => {    

      return (
        <div className="DiagramNodeKPI">
            <div className="NodeContentTitle">{props.data.desc}</div>
              <hr />
            {props.data.value}
        </div>
      );
    };
  
  export default DiagramNodeKPI;