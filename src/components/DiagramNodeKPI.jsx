import '../styles/DiagramNodeKPI.css'

  const DiagramNodeKPI= (props) => {    

      return (
        <div className="DiagramNodeKPI">
          <hr className="LineDotted"/>
            <div className="NodeContentTitle">{props.data.desc}</div>
          <hr className="LineDotted" />
             {/* <hr />
            {props.data.value}
            */} 
        </div>
      );
    };
  
  export default DiagramNodeKPI;