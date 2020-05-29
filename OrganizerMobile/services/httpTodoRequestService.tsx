import rnFetchBlob from './selfSignedHttpClient' 

export default class httpTodoRequestService {
    static async deleteTodDo(id:number)
    {
        return await rnFetchBlob.fetch('DELETE', `https://localhost:44392/api/todo/delete?id=${id}`)
    }
}