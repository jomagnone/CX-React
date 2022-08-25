const api = "https://gestioncio.telecom.com.ar/rest/api/2/";
const token = "ODU2OTMyNjk1MDEwOpyggcSWAysOsED4PTS5vYc/pbMd";
const getIssue = "issue/";





export const FetchIssue = async () => {
  let reponse = await fetch('https://gestioncio.telecom.com.ar/rest/api/2/issue/ODT-11', {
    headers: {
      'Authentication': 'OAuth 2.0',
      'Authorization': 'Bearer ODU2OTMyNjk1MDEwOpyggcSWAysOsED4PTS5vYc/pbMd',
      'Content-Type': 'application/json',

      
    },
    method: 'GET',
    })
  let JSONreponse = await reponse.json();
 
  if (reponse.ok) {
    return JSONreponse;
  }else {
      alert("error al obtener el catalogo");
      return false;    
  }
  

}

export const FetchCourseList = async () => {
  let reponse = await fetch('https://hackathon-telecom.herokuapp.com/api/cursos', {
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          method: 'GET',
                          })
  let JSONreponse = await reponse.json();
   
  if (reponse.ok) {
           console.log(JSONreponse);
           return JSONreponse;
   }else {
          alert("error al obtener el catalogo");
          return false;
          
   }
}


export const FetchCourse = async (idCourse) => {
  let reponse = await fetch('https://hackathon-telecom.herokuapp.com/api/cursos/'+idCourse, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'GET',
      })
  let JSONreponse = await reponse.json();

  if (reponse.ok) {
      return JSONreponse;
  }else {
      alert("error al obtener el catalogo");
  return false;

}
}
