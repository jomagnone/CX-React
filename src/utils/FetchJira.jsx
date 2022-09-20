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


// para hoja de inciativa
export const FetchEpicWithoutSubtask = async (epic) => {
  let reponse = await api.get('issue/'+epic)

  let obj = {};
    obj['key'] = reponse.data.key;
    obj['title'] = reponse.data.fields.summary;
    obj['desc'] = reponse.data.fields.description;
    obj['status'] = reponse.data.fields.status.name;
    obj['kr'] ="Operacion Digital";

    let reponseIssues = await api.get('search?jql="Epic Link"="'+obj['title']+'"&fields=key,summary,status')
 
    const issues = reponseIssues.data.issues.map(x => {
           let issue = {};
           issue['key'] = x.key;
           issue['desc'] = x.fields.summary;
           issue['status'] = x.fields.status.name;
           issue['iconStatus'] = "success";
           return issue;
       }
     )

    obj['issues'] = issues;

    obj['avanceEpic'] = ''+(parseInt((issues.filter(st => st.status === "Done" || st.status === "Finalizado").length / issues.length)*100))+'%';
    obj['avanceEpic'] = obj['avanceEpic'] === "NaN%" ? "0%" :obj['avanceEpic'] 
    
    obj['pending'] =''+(issues.filter(st => st.status !== "Done" && st.status !== "Finalizado").length );
                 
                 

    return obj;
  
}




// para avance de los issue
export const FetchIssueAvance = async (issue) => {

  let reponse = await api.get('search?jql=issuetype="Sub-task"%26parent="'+issue.key+'"&fields=key,summary,status')
  let object ={}
  object.subtaskList = reponse.data.issues.map(x => {
      var obj = {};
      obj['key'] = x.key;
      obj['desc'] = x.fields.summary;
      obj['status'] = x.fields.status.name;
    
      return obj;
     } 
    )
    object.parent = issue.key;
    object.desc = issue.desc;
    object.status = issue.status;
    object.avanceAllSubtask= ''+parseInt((object.subtaskList.filter(x => x.status !== "Done" && x.status === "Finalizado").length / object.subtaskList.length)*100)+"%"
    object.avanceAllSubtask = object.avanceAllSubtask === "NaN%" && (object.status === "Finalizado" || object.status === "Done") ? "100%" : object.avanceAllSubtask
    object.avanceAllSubtask = object.avanceAllSubtask === "NaN%" && (object.status !== "Finalizado" && object.status !== "Done") ? "0%" : object.avanceAllSubtask
    
    object.avanceIssue = object.subtaskList.length === 0 && (object.status === "Finalizado" || object.status === "Done") ? "100%" : object.avanceAllSubtask
    object.avanceIssue = object.avanceAllSubtask === "100%" && (object.status !== "Finalizado" && object.status !== "Done") ? "99%" : object.avanceAllSubtask
    //console.log(object)
    return object.avanceIssue;

}




