import axios from "axios";

const api = axios.create();
api.defaults.baseURL = "https://gestioncio.telecom.com.ar/rest/api/2/";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Authentication"] = "OAuth 2.0";
api.defaults.headers.common["Authorization"] = "Bearer NTMzMjc4OTY5NTk4Os3hucE5NikVqtHAfyC7FfEouRN7";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.common["Accept"] = "*/*";
api.defaults.headers.common["Access-Control-Allow-Method"]= "GET";
api.defaults.headers.common["Access-Control-Allow-Headers"]= "*";


// para sidebar
export const FetchAllEpic = async (proyect) => {
  let reponse = await api.get('search?jql=project="'+proyect+'"%26status!="Finalizado"%26issuetype="Epic"&fields=key,summary')
  
   const object = reponse.data.issues.map(x => {
          var obj = {};
          obj['key'] = x.key;
          obj['valor'] = x.fields.summary;
          return obj;
      }
    
    )
    return object;
  
}



// '"ODT-12"'
// para hoja de inciativa
export const FetchEpic = async (epic) => {
  let reponse = await api.get('issue/'+epic)
  
  var obj = {};
    obj['key'] = reponse.data.key;
    obj['title'] = reponse.data.fields.summary;
    obj['desc'] = reponse.data.fields.description;
    obj['status'] = reponse.data.fields.status.name;
    FetchAllIssuesFromEpic(reponse.data.fields.summary)
          .then(r => {
                  obj['issues'] = r;
                  r.map((i,ix) => FetchSubsTaskFromIssue(i.key)
                      .then(r => {obj.issues[ix]['subtask'] = r
                                  obj.issues[ix]['avanceIssue']= r.avanceAllSubtask
                                  { r.subtask.length == 0 && (obj.issues[ix].status === "Done" || obj.issues[ix].status === "Finalizado")
                                    ? obj.issues[ix]['avanceIssue'] = 100 
                                    : obj.issues[ix]['avanceIssue']= r.avanceAllSubtask
                                    }
                            })
                      .catch(e => console.log(e)))
                  obj['avanceEpic'] = (parseInt((r.filter(st => st.status == "Done" || st.status == "Finalizado").length / r.length)*100));
                  obj['pending'] = (r.filter(st => st.status != "Done" && st.status != "Finalizado").length );
                 
                 
                })
          .catch(e => console.log(e))
    obj['kr'] ="Operacion Digital"
    

    return obj;
  
}


// uso interno
export const FetchAllIssuesFromEpic = async (epic_link) => {
  let reponse = await api.get('search?jql="Epic Link"="'+epic_link+'"&fields=key,summary,status')
 
   const object = reponse.data.issues.map(x => {
          var obj = {};
          obj['key'] = x.key;
          obj['desc'] = x.fields.summary;
          obj['status'] = x.fields.status.name;
          obj['iconStatus'] = "success";
          return obj;
      }
    )
    
    return object;
  
}



// uso interno
export const FetchSubsTaskFromIssue = async (issue) => {

  let reponse = await api.get('search?jql=issuetype="Sub-task"%26parent="'+issue+'"&fields=key,summary,status')

  var object ={}
  object.subtask = reponse.data.issues.map(x => {
    var obj = {};
    obj['key'] = x.key;
    obj['desc'] = x.fields.summary;
    obj['status'] = x.fields.status.name;
   
    return obj;
     } 
    )
    object.parent = issue;
    object.avanceAllSubtask= parseInt((object.subtask.filter(x => x.status != "Done" && x.status == "Finalizado").length / object.subtask.length)*100)
    object.avanceAllSubtask = object.avanceAllSubtask ? object.avanceAllSubtask : 0
    return object;

}
