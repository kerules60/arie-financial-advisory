import BaseApi from './BaseApi';

class Api extends BaseApi {

    getLoanTypes() {
        return this._getData(`./api/getLoanTypes`);
    }

}

export default new Api();