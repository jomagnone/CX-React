import '../styles/DiagramNodeList.css'

  const DiagramNodeList= (props) => {    
    
      return (
        <div>
            <div className="DiagramNodeList">
            
              
              {props.data.kpis.map((k, ix) => <div key={ix}>{k}<hr /></div> )}

        </div>
        </div>
      );
    };
  export default DiagramNodeList;