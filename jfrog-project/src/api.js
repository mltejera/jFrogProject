import base64 from 'base-64'

let username = 'admin'
let password = 'oIyDqEQ9Oh'

function formRepoHeader(repoKey){
    let body = "items.find(\r\n{\r\n\"repo\":{\"$eq\":\""+ repoKey + "\"}\r\n}\r\n)\r\n"

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password))

    return ({method:'POST', headers: headers,body: body })
}

function getRepoURL(){
    return 'http://35.202.33.2:8093/artifactory/api/search/aql';
}

function formFileStatsUrl(repoKey, path){
    return 'http://35.202.33.2:8093/artifactory/api/storage/' + repoKey + '/' + path + '?stats'
}

function formFileStatisticsHeader(){
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password))

    return ({method:'GET', headers: headers })
}

export async function getFileStats(repoKey, path){
    try{
        let result = await fetch(formFileStatsUrl(repoKey, path), formFileStatisticsHeader())
        
        let response = await result.json()

        return response;
    } catch (error) {
        console.log("Error in getRepoFiles")
        throw error
    }
}

export async function getRepoFiles(repoKey) {
    try{
        let result = await fetch(getRepoURL(), formRepoHeader(repoKey))
        let response = await result.json()
        return response;
    } catch (error) {
        console.log("Error in getRepoFiles")
        throw error
    }
}


