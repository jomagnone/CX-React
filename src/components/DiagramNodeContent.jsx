import '../styles/DiagramNodeContent.css'

  const DiagramNodeContent= (props) => {    

      return (
        <div className="DiagramNodeContent">
            <div className="NodeContentTitle">{props.data.title}</div>
            <hr />
            <ul>
              {props.data.items.map((o,ix) => <li key={ix}>{o}</li>)}
            </ul>
        </div>
      );
    };
  
  export default DiagramNodeContent;