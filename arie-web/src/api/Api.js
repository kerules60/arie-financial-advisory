import BaseApi from './BaseApi';

class Api extends BaseApi {

    getLoanTypes() {
        return this._getData(`http://localhost:8080/api/getLoanTypes`);
    }
    getServices(){
        return this._getData(`http://localhost:8080/api/getServices`);
    }

}

export default new Api();