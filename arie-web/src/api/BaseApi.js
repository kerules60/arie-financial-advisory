

export default class BaseApi {

    _parseJSON(response){
        return response.json();
    }

    // _parseJSON(response) {
    //     return response.text().then(function(text) {
    //         return text ? JSON.parse(text) : {}
    //     })
    // }

    _parseText(response){
            return response.text();
    }

    _get(url){
        return fetch(url);
    }
    _withPayload(url, method, payload) {

        return fetch (url,
        {
            method: method,
            mode: 'cors',
            headers: {
                'mode': 'cors',
                'credentials': 'same-origin',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Content-Type',
                'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH'
            },
            body: JSON.stringify(payload)
        }
        ).then(this._checkStatus)
            .then(this._parseJSON)
            .then(function (data) {
                return data;
            }).catch(function (error) {
                alert('Request failed ' + error);
            });
    }

    _post(url, payload) {
        return this._withPayload(url, 'POST', payload);
    }

    _put(url, payload) {
        return this._withPayload(url, 'PUT', payload);
    }

    _delete(url) {
        return fetch(url, {method: 'DELETE'});
    }

    _checkStatus(response) {
        console.log('THIS IS  THE RESPONSE ', response);
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        else{
            const error = new Error (response.status);
            error.response = response;
            throw error;
        }
    }

    _getData(url) {
        return fetch(url, {
            headers: {
                Accept: 'application/json',
            },
            method: 'GET'
        }).then((t:any) => {
                return t.json(); // <-- this part is missing
            }).then((t:any) => {
                const results = t;
                return results;
            }
        )
    }
}