import { API_RM } from "../constants/Api.constants";

class RyMService{
    //Creamos una funcion asincrona con un fetch que se comuica con apis
    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        //Interceptor para un futuro    
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTERS_BY_ID(id));
        return response.json();
    }
}

export default new RyMService()