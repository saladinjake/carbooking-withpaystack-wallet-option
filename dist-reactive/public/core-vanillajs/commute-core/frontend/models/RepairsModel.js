import ApiBotServices from '../../backend/services/postgres_api_bot';
export default class SOSModel{
	constructor(){}

	static submitRequest(repairs){
       return ApiBotServices.saveSOSRequest(repairs)
	}

	
}