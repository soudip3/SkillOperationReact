const platformClient = require('purecloud-platform-client-v2/dist/node/purecloud-platform-client-v2.js');
const jp = require('jsonpath')
const userAPI = new platformClient.UsersApi()
export function getUserID() {
    let body = { 
        "expand": "", // [String] | Which fields, if any, to expand.
        "integrationPresenceSource": "" // String | Get your presence for a given integration. This parameter will only be used when presence is provided as an expand.
      };
    return userAPI.getUsersMe(body)
    .then((data:any)=>{
        const divisionID = data.id;
        return divisionID
    })
    .catch((err:any)=>{
        return(err)
    })
}

export function getSkill(userId:string){
    let opts = { 
        "pageSize": 25, // Number | Page size
        "pageNumber": 1, // Number | Page number
        "sortOrder": "ASC" // String | Ascending or descending sort order
      };
      
      // List routing skills for user
      return userAPI.getUserRoutingskills(userId, opts)
        .then((data:any) => {
            const skillArray = jp.query(data, '$.entities[?(@.id=="cb8856d4-7647-43bf-9d32-c055af95dd70")].id')
            console.log(skillArray)
            return skillArray.length
        })
        .catch((err:any) => {
          console.error(err);
        });
}