import axios from "axios";
const api = "https://gestioncio.telecom.com.ar/rest/api/2/";
const token = "ODU2OTMyNjk1MDEwOpyggcSWAysOsED4PTS5vYc/pbMd";
const getIssue = "issue/";



let config = {
  headers: {
    'Authentication': 'OAuth 2.0',
    'Authorization': 'Bearer ODU2OTMyNjk1MDEwOpyggcSWAysOsED4PTS5vYc/pbMd',
    'Content-Type': 'application/json'
  }
}

export const FetchIssue = async () => {
  let reponse = await axios.get('rest/api/2/issue/ODT-11', config)
    return reponse.data;
  
}


