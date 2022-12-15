import axios from "axios";
axios.defaults.withCredentials = true

const api = axios.create();
api.defaults.baseURL = "https://gestioncio.telecom.com.ar/rest/api/2/";
api.defaults.headers.common["Content-Type"] = "application/jsonp";
api.defaults.headers.common["Authentication"] = "OAuth 2.0";
api.defaults.headers.common["Authorization"] = "Bearer NTMzMjc4OTY5NTk4Os3hucE5NikVqtHAfyC7FfEouRN7";



export const AuthorizeConnection = async (fn) => {
    const apiAuth = axios.create();
    apiAuth.defaults.baseURL = "https://auth.atlassian.com/authorize";
    apiAuth.defaults.headers.common["Content-Type"] = "application/json";
    apiAuth.defaults.headers.common["Authentication"] = "OAuth 2.0";
    apiAuth.defaults.headers.common["Authorization"] = "Bearer cQKDP7t6woyGjk04ou9b044A";
    apiAuth.defaults.headers.common["Cookie"] = "cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MWYxODlmNGUyMThmMDAwNmFmMzUyMjIiLCJlbWFpbERvbWFpbiI6InRlY28uY29tLmFyIiwiaW1wZXJzb25hdGlvbiI6W10sImNyZWF0ZWQiOjE2NzA4Njg5NDksInJlZnJlc2hUaW1lb3V0IjoxNjcwODcwOTAwLCJ2ZXJpZmllZCI6dHJ1ZSwiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYzRkZWIzNjktZWYxZS00YTg0LWFmOTktODA1OTczNjcyMTI1Iiwic3RlcFVwcyI6W10sImF1ZCI6ImF0bGFzc2lhbiIsIm5iZiI6MTY3MDg3MDMwMCwiZXhwIjoxNjczNDYyMzAwLCJpYXQiOjE2NzA4NzAzMDAsImVtYWlsIjoiam1hZ25vbmVAdGVjby5jb20uYXIiLCJqdGkiOiJjNGRlYjM2OS1lZjFlLTRhODQtYWY5OS04MDU5NzM2NzIxMjUifQ.V1kkL3Xw8kuzzcSGDCfbLpgTFWc-medpUNSITleoLxfcvDy2LHHFIrRIY-2KwrpL6qh_xv9aGw55dBQgRsKQrroQ5a16KFXom9A7L2wMq_OhHNTFQ-ONSzA5JoQ7kky53IN2MSmZAe52OeVGnUOpfxt9KWrY1Vvvn2d12fj1cCMhzH7cOlKhkOjO5h4h4WAO5OEPuQAGvsERsbdy_SBiTY-NPSa3KU3H8XDgya8DQCMT-nqhtEJhLzUj_0JCuYcKh2iryQ3do5DmM8Fd8k_N5sB2X043FgDAFdzoBgRa6musxBBEn6u2fNkS1wxB3uPO5ylUhRC2Nu893S5pH7zOdg; atlassian.xsrf.token=B3CM-8OD3-9DV8-MKVQ_d33121d0273740c89b200806a0c9ecc4c9a5226d_lin; cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MWYxODlmNGUyMThmMDAwNmFmMzUyMjIiLCJlbWFpbERvbWFpbiI6InRlY28uY29tLmFyIiwiaW1wZXJzb25hdGlvbiI6W10sImNyZWF0ZWQiOjE2NzA4Njg5NDksInJlZnJlc2hUaW1lb3V0IjoxNjcwODY5NTQ5LCJ2ZXJpZmllZCI6dHJ1ZSwiaXNzIjoic2Vzc2lvbi1zZXJ2aWNlIiwic2Vzc2lvbklkIjoiYzRkZWIzNjktZWYxZS00YTg0LWFmOTktODA1OTczNjcyMTI1Iiwic3RlcFVwcyI6W10sImF1ZCI6ImF0bGFzc2lhbiIsIm5iZiI6MTY3MDg2ODk0OSwiZXhwIjoxNjczNDYwOTQ5LCJpYXQiOjE2NzA4Njg5NDksImVtYWlsIjoiam1hZ25vbmVAdGVjby5jb20uYXIiLCJqdGkiOiJjNGRlYjM2OS1lZjFlLTRhODQtYWY5OS04MDU5NzM2NzIxMjUifQ.lNLsy0JorH_vneUQhI1ybKcSZJDHwIX6jPUHUmpiRp2xUvFztwZM_vHun4-AzIAIIRwrLW2zSu2QczuN5gXwyWXvL6s9ZeeqR1X--Y9f6XLVqnyLY5b4NzCaeZ275f_Eax-K2AzUghx5JaijjHjIgTLP-Ua6Kb73SIjxcLhrR7dYfNoI1g1GhqG-TqMJ3AZ_mK8j59xeW0msqWresbCgQueM6acqakBN8uG0t2gcUV_yCmQwe_FvNC4pPG4ylGecegdJAspM7ejWV4_gQPUix7n7kG7k5x9U4dPRARcGNJAUYIPWNmzR8JqMWiuCXEIO7ww5h6aKrfX9GkH7fahZ4Q";

    let reponse = await apiAuth.get('?audience=api.atlassian.com&client_id=vZ63cznFWmhjxsd3SuZ9mVHn6l5pwCDH&scope=read%3Ame&redirect_uri=http%3A%2F%2Flocalhost%3A3000&state=OK&response_type=code&prompt=consent',{ withCredentials: true })
    return reponse.then(fn()).catch(fn())
     
    }
    
export const FetchCloudAllProject = async () => {
  const apiCloud = axios.create();
  //apiCloud.defaults.baseURL = "https://tecocloud.atlassian.net/rest/api/2";
  apiCloud.defaults.baseURL = "https://api.atlassian.com/ex/jira/537abee0-2269-4caf-b0ae-33ebd9fbba30/rest/api/2";
  apiCloud.defaults.headers.common["Content-Type"] = "application/json";
  apiCloud.defaults.headers.common["Authentication"] = "OAuth 2.0";
  apiCloud.defaults.headers.common["Authorization"] = "Bearer eyJraWQiOiJmZTM2ZThkMzZjMTA2N2RjYTgyNTg5MmEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MWYxODlmNGUyMThmMDAwNmFmMzUyMjIiLCJuYmYiOjE2NzA5NTAxNzEsImlzcyI6Imh0dHBzOi8vYXRsYXNzaWFuLWFjY291bnQtcHJvZC5wdXMyLmF1dGgwLmNvbS8iLCJpYXQiOjE2NzA5NTAxNzEsImV4cCI6MTY3MDk1Mzc3MSwiYXVkIjoidlo2M2N6bkZXbWhqeHNkM1N1WjltVkhuNmw1cHdDREgiLCJqdGkiOiI5ZTFlZWY3Zi0yY2RiLTQxNTUtYmM2Mi1kZDFlYzcwODFhOGUiLCJodHRwczovL2F0bGFzc2lhbi5jb20vdmVyaWZpZWQiOnRydWUsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS9zZXNzaW9uX2lkIjoiMDFiMmNlMjQtMjAyZi00Mjk4LTkwYWUtMjRlZmMwOGQ5MzU3IiwiY2xpZW50X2lkIjoidlo2M2N6bkZXbWhqeHNkM1N1WjltVkhuNmw1cHdDREgiLCJjbGllbnRfYXV0aF90eXBlIjoiUE9TVCIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9zeXN0ZW1BY2NvdW50RW1haWwiOiJhOTc2ODAxZC1kNzVlLTRjNGUtODAxNi04NjNhYTRlZDExYzFAY29ubmVjdC5hdGxhc3NpYW4uY29tIiwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL3VqdCI6ImI5NzUwNjNkLTU0MjktNDgwNy04MzMyLTM1NmNmNDg0ZjEyMyIsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS92ZXJpZmllZCI6dHJ1ZSwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL2F0bF90b2tlbl90eXBlIjoiQUNDRVNTIiwic2NvcGUiOiJtYW5hZ2U6amlyYS1wcm9qZWN0IHJlYWQ6amlyYS13b3JrIHJlYWQ6amlyYS11c2VyIiwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tLzNsbyI6dHJ1ZSwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL29hdXRoQ2xpZW50SWQiOiJ2WjYzY3puRldtaGp4c2QzU3VaOW1WSG42bDVwd0NESCIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9lbWFpbERvbWFpbiI6InRlY28uY29tLmFyIiwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL3N5c3RlbUFjY291bnRFbWFpbERvbWFpbiI6ImNvbm5lY3QuYXRsYXNzaWFuLmNvbSIsImh0dHBzOi8vYXRsYXNzaWFuLmNvbS9maXJzdFBhcnR5IjpmYWxzZSwiaHR0cHM6Ly9hdGxhc3NpYW4uY29tL3N5c3RlbUFjY291bnRJZCI6IjYzOGUyN2E3NWZjMTYwNTQ0ZTFkNDA5ZSJ9.hAZGB6UqKEMreDc3nXlvOKXxn9xV3xQv7lCtiCk-5yH1jtTMp2Lre6loYe6zUM7zGY7VrENuFXSKmG7z5hPfW7BXbDSdP1cmJwKOIuFtlW_6dzLxi_aHqBC64VHamHD8Tq7JMM4VX5Vy9J_lJpsrGrb_jQXou4--LuvyEN2W14SRohQcEk6siA_Ip5x9TWd-J5EGdPQ_8OpP3TkiX78vHWIw80srGff8Btl51qkEGpTyEGW50TG2xt-ZPjXNieiYhvmd5ac7xOdleFS9JM97a4IgQxlCIjjypwaqI17djjjTej1oEyFKXO-hQlQZLj0CVyZR1qdYJh85HkjT11OdfA";

  let reponse = await apiCloud.get('/project', { withCredentials: true })
  reponse.then(r => console.log(r)).catch(e=> console.log(e))
}



const statusList = [{status:'Done', statusIn:'Done'},
                {status:'Done', statusIn:'Closed'},
                {status:'Done', statusIn:'CLOSED - REJECTED'},
                {status:'Done', statusIn:'Fixed'},
                {status:'Done', statusIn:'Finalizado'},
                {status:'Done', statusIn:'Terminada'},
                {status:'Done', statusIn:'Cerrada'},
                {status:'Pending', statusIn:'In progress'},
                {status:'Pending', statusIn:'Open'},
                {status:'Pending', statusIn:'Backlog'},
                {status:'Pending', statusIn:'Abierta'},
                {status:'Pending', statusIn:'En progreso'},
                {status:'Bloqueado', statusIn:'Bloqueado'},
                {status:'Bloqueado', statusIn:'Blocked'},
                {status:'Anulado', statusIn:'Anulado'},
                {status:'Anulado', statusIn:'DEFERRED'},
                {status:'Done', statusIn:'REJECTED'}
                
          ]


// Categorias del Sidebar
export const FetchAllEpic = async (proyect) => {
  let reponse = await api.get('search?jql=project="'+proyect+'"%26status!="Finalizado"%26issuetype="Epic"&fields=key,summary' , { withCredentials: false })
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
  let reponse = await api.get('issue/'+epic , { withCredentials: false })
  let obj = {};
    obj['key'] = reponse.data.key;
    obj['title'] = reponse.data.fields.summary;
    obj['desc'] = reponse.data.fields.description;
    obj['status'] = reponse.data.fields.status.name;
    obj['kr'] ="Operacion Digital";
    obj['epic'] = reponse.data.fields.customfield_10103
    obj['project'] = reponse.data.key.indexOf("-")? reponse.data.key.substring(0,reponse.data.key.indexOf("-")):  obj.key
    let reponseIssues = await api.get('search?jql="Epic Link"="'+obj.epic+'"%26project='+obj['project']+'&fields=key,summary,status,description' , { withCredentials: false })
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
    let reponseIssues = await api.get('search?jql=project='+project+'%26issuetype=Defecto%26status!=Anulado%26status!=DEFERRED&fields=key,summary,status,description&maxResults=1000', { withCredentials: false })
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
  let reponse = await api.get('search?jql=issuetype="Sub-task"%26parent="'+issue.key+'"&fields=key,summary,status' , { withCredentials: false })
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




