
function NavBarSearch() {
    return (
    <>
    
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
               
               <div className="input-group" >
               <input className="form-control bg-light border-0 small" placeholder="Buscar Informe..." aria-label="Search" aria-describedby="basic-addon2" id="autocompletar" />
 
               <div className="input-group-append">
                   <button className="btn btn-primary" type="button">
                     <i className="fas fa-search fa-sm"></i>
                   </button>
               </div>
             
 
             </div>
           
             </form>
       
    </>
        );
  }
  
  export default NavBarSearch;