import axios from "axios";

const api = axios.create();
api.defaults.baseURL = "https://gestioncio.telecom.com.ar/rest/api/2/";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Authentication"] = "OAuth 2.0";
api.defaults.headers.common["Authorization"] = "Bearer NTMzMjc4OTY5NTk4Os3hucE5NikVqtHAfyC7FfEouRN7";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";






export const FetchIssue = async (issue) => {
  let reponse = await api.get('issue/'+issue)
    return reponse.data;
  
}



export const FetchJQL = async (JQL, fields) => {
  let reponse = await api.get('search?jql='+JQL+'&fields='+fields)
  
   const object = reponse.data.issues.map(x => {
          var obj = {};
          obj['key'] = x.key;
          obj['valor'] = x.fields.summary;
          return obj;
      }
    
    )
    return object;
  
}


const JQL = 'project="ODT"%26status!="Finalizado"%26issuetype="Epic"'
const fields = "key,customfield_10377,status,project,issuetype,summary"

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

export const FetchAllIssuesFromEpic = async (epic) => {
  let reponse = await api.get('search?jql="Epic Link"="'+epic+'"')
  
   const object = reponse.data.issues.map(x => {
          var obj = {};
          obj['key'] = x.key;
          obj['valor'] = x.fields.summary;
          return obj;
      }
    
    )
    return object;
  
}

