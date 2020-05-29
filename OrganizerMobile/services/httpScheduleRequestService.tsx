import rnFetchBlob from './selfSignedHttpClient' 

export default class httpScheduleRequestService {
    static async deleteScheduleItem(id:number)
    {
        return await rnFetchBlob.fetch('DELETE', `https://localhost:44392/api/schedule/delete?id=${id}`)
    }
}