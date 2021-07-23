import BaseApi from './BaseApi';

class Api extends BaseApi {
     ROOT_URl = 'http://arietest.us-west-2.elasticbeanstalk.com';
    getLoanTypes() {
        return this._getData(this.ROOT_URl+ `/api/getLoanTypes`);
    }
    getServices(){
        return this._getData(this.ROOT_URl+ `/api/getServices`);
    }

}

export default new Api();