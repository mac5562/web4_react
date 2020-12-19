import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/Runners/';


class RunnerService{

    create(nevezo_id,email,vezeteknev,keresztnev,kor,nem ){
        return axios.post(API_URL+'create',{
            nevezo_id,
            email,
            vezeteknev,
            keresztnev,
            kor,
            nem,  
        });
    }
   
    getRunners(){
        return axios.get(API_URL+'get',{ headers: authHeader() });
    }
   getRunner(id){
    return axios.get(API_URL+'get/'+id,{ headers: authHeader() });
   }
deleteRunner(){
    return axios.delete(API_URL+'remove/'+id,{ headers: authHeader() });
}

updateRunner(id,nevezo_id,email,vezeteknev,keresztnev,kor,nem){
    return axios.put(API_URL+'update/'+id,{
            nevezo_id,
            email,
            vezeteknev,
            keresztnev,
            kor,
            nem,  
    });
}
}

export default new RunnerService();