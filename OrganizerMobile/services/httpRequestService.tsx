import rnFetchBlob from './selfSignedHttpClient'

export default class httpRequestService {
    static getDays(){
        return rnFetchBlob.fetch('GET',' https://localhost:44392/api/day/getDays');
    }
    static getDay(date:string){
        return rnFetchBlob.fetch(`GET`,`https://localhost:44392/api/day/getDays?date=${date}`)
    }
}