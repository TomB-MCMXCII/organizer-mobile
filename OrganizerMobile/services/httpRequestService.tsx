import rnFetchBlob from './selfSignedHttpClient'

export default class httpRequestService {
    static async getDays(){
        return await rnFetchBlob.fetch('GET',' https://localhost:44392/api/day/getDays') 
    }
    static async getDay(date:string){
        return await rnFetchBlob.fetch(`GET`,`https://localhost:44392/api/day/getDay?date=${date}`)
    }
}