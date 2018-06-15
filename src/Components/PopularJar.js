import React, { Component } from 'react';
import base64 from 'base-64'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        let url = 'http://35.202.33.2:8093/artifactory/api/search/aql';
        //let url = 'http://35.202.33.2:8093/artifactory/api/application.wadl';
        let username = 'admin';
        let password = 'oIyDqEQ9Oh';

        let body = JSON.stringify({
            "repo": {"$eq":"libs-release-local"}
        })
        
        let headers = new Headers();
        
        headers.append('Authorization', 'Basic ' + username + ":" + password)

        fetch(url, {method:'GET',
                headers: headers,
                body: body
               })
        .then(response => {
            console.log(response)
            console.log(response.status)
            //response.json()
        } )
        .then(json => console.log(json));

        
        function parseJSON(response) {

            return response.json()
        }       
    }


  render() {
    return (
      <div className="App">
        "Hello World"
      </div>
    );
  }
}

export default App;
