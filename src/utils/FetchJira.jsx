import axios from "axios";

const api = axios.create();
api.defaults.baseURL = "https://gestioncio.telecom.com.ar/rest/api/2/";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Authentication"] = "OAuth 2.0";
api.defaults.headers.common["Authorization"] = "Bearer NTMzMjc4OTY5NTk4Os3hucE5NikVqtHAfyC7FfEouRN7";

const statusList = [{status:'Done', statusIn:'Done'},
                {status:'Done', statusIn:'Closed'},
                {status:'Done', statusIn:'CLOSED - REJECTED'},
                {status:'Done', statusIn:'Fixed'},
                {status:'Done', statusIn:'Finalizado'},
                {status:'Done', statusIn:'Terminada'},
                {status:'Pending', statusIn:'In progress'},
                {status:'Pending', statusIn:'Open'},
                {status:'Pending', statusIn:'Backlog'},
                {status:'Bloqueado', statusIn:'Bloqueado'},
                {status:'Bloqueado', statusIn:'Blocked'},
                {status:'Anulado', statusIn:'Anulado'},
                {status:'Anulado', statusIn:'DEFERRED'}
          ]


// Categorias del Sidebar
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


// Epicas para iniciativa
export const FetchEpicWithoutSubtask = async (epic) => {
  let reponse = await api.get('issue/'+epic)
  let obj = {};
    obj['key'] = reponse.data.key;
    obj['title'] = reponse.data.fields.summary;
    obj['desc'] = reponse.data.fields.description;
    obj['status'] = reponse.data.fields.status.name;
    obj['kr'] ="Operacion Digital";
    obj['project'] = reponse.data.key.indexOf("-")? reponse.data.key.substring(0,reponse.data.key.indexOf("-")):  obj.key
    let reponseIssues = await api.get('search?jql="Epic Link"="'+obj['title']+'"%26project='+obj['project']+'&fields=key,summary,status,description')
    const issues = reponseIssues.data.issues.map(x => {
           let issue = {};
           let status = statusList.filter(st => st.statusIn == x.fields.status.name)[0]?.status 
           issue['key'] = x.key;
           issue['desc'] = x.fields.summary;
           issue['fullDesc'] = x.fields.description;
           issue['status'] = status? status : x.fields.status.name;
           issue['iconStatus'] = "success";
           return issue;
       }
     )
    obj['issues'] = issues.sort((a, b) => a.status > b.status? 1:-1);;
    obj['avanceEpic'] = ''+(parseInt((issues.filter(st => st.status === "Done" ).length / issues.length)*100))+'%';
    obj['avanceEpic'] = obj['avanceEpic'] === "NaN%" ? "0%" :obj['avanceEpic'] 
    obj['pending'] =''+(issues.filter(st => st.status !== "Done" ).length );
    obj['countAllIssues'] =''+(issues.length );
    return obj;
}


// Defectos para iniciativa
export const FetchDefectWithoutSubtask = async (project) => {
  let reponse = await api.get('project/'+project)
  let obj = {};
    obj['key'] = reponse.data.key;
    obj['title'] = reponse.data.name;
    obj['desc'] = reponse.data.description;
    obj['kr'] =reponse.data.projectCategory.name;
    let reponseIssues = await api.get('search?jql=project='+project+'%26issuetype=Defecto%26status!=Anulado%26status!=DEFERRED&fields=key,summary,status,description&maxResults=1000')
    const issues = reponseIssues.data.issues.map(x => {
           let issue = {};
           let status = statusList.filter(st => st.statusIn == x.fields.status.name)[0]?.status 
           issue['key'] = x.key;
           issue['desc'] = x.fields.summary;
           issue['fullDesc'] = x.fields.description;
           issue['status'] = status? status : x.fields.status.name;
           issue['iconStatus'] = "success";
           return issue;
       }
     )
    obj['issues'] = issues.sort((a, b) => a.status > b.status? -1:1);
    obj['avanceEpic'] = ''+(parseInt((issues.filter(st =>  st.status === "Done").length / issues.length)*100))+'%';
    obj['avanceEpic'] = obj['avanceEpic'] === "NaN%" ? "0%" :obj['avanceEpic'] 
    obj['pending'] =''+(issues.filter(st =>  st.status !== "Done" ).length );
    obj['countAllIssues'] =''+(issues.length );
    return obj;
}




// para avance de los issue
export const FetchIssueAvance = async (issue) => {
  let reponse = await api.get('search?jql=issuetype="Sub-task"%26parent="'+issue.key+'"&fields=key,summary,status')
  let object ={}
  object.subtaskList = reponse.data.issues.map(x => {
      var obj = {};
      let status = statusList.filter(st => st.statusIn == x.fields.status.name)[0]?.status 
      obj['key'] = x.key;
      obj['desc'] = x.fields.summary;
      obj['status'] = status? status : x.fields.status.name;
      return obj;
     } 
    )
    object.parent = issue.key;
    object.desc = issue.desc;
    
    object.status = issue.status;
    object.avanceAllSubtask= ''+parseInt((object.subtaskList.filter(x =>  x.status === "Done" ).length / object.subtaskList.length)*100)+"%"
    object.avanceAllSubtask = object.avanceAllSubtask === "NaN%" && (object.status === "Done") ? "100%" : object.avanceAllSubtask
    object.avanceAllSubtask = object.avanceAllSubtask === "NaN%" && (object.status !== "Done") ? "0%" : object.avanceAllSubtask
    object.avanceIssue = object.subtaskList.length === 0 && (object.status === "Done") ? "100%" : object.avanceAllSubtask
    object.avanceIssue = object.avanceAllSubtask === "100%" && ( object.status !== "Done") ? "99%" : object.avanceAllSubtask
    return object.avanceIssue;

}




