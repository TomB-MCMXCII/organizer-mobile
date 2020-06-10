import rnFetchBlob from './selfSignedHttpClient' 

export default class httpTodoRequestService {
    static async deleteTodDo(id:number){
        return await rnFetchBlob.fetch('DELETE', `https://localhost:44392/api/todo/delete?id=${id}`)
    }
    static async addToDo(todo:object) {
        var jsonString = JSON.stringify(todo);
        return await rnFetchBlob.fetch('POST', `https://localhost:44392/api/todo/add`, { 'Content-Type': 'application/json'}, jsonString)
    }
}