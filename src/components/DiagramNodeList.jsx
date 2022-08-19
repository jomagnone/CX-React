import '../styles/DiagramNodeList.css'

  const DiagramNodeList= (props) => {    
    {console.log(props.data.kpis)}
      return (
        <div>
            <div className="DiagramNodeList">
            
              
              {props.data.kpis.map((k) => <div>{k}<hr /></div> )}

        </div>
        </div>
      );
    };
  export default DiagramNodeList;