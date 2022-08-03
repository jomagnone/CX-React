
function WrapperPage({children}) {
    return (
        <body id="page-top">
            <div id="wrapper">
              {children}
            
            </div>
        </body>
        );
  }
  
  export default WrapperPage;