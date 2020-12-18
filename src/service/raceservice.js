import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/Race/';


class RaceService{

    create( kor,nem,datum,helyszin,tav,max_resztvevo,resztvevok,dobogosok){
        return axios.post(API_URL+'create',{
            kor,
            nem,  
            datum,
            helyszin,
            tav,
            max_resztvevo,
            resztvevok,
            dobogosok, 
        });
    }
   
    getRaces(){
        return axios.get(API_URL+'get',{ headers: authHeader() });
    }
   getRace(id){
    return axios.get(API_URL+'get/'+id,{ headers: authHeader() });
   }
deleteRace(){
    return axios.delete(API_URL+'remove/'+id,{ headers: authHeader() });
}

updateRace(id,kor,nem,datum,helyszin,tav,max_resztvevo,resztvevok,dobogosok){
    return axios.put(API_URL+'update/'+id,{
        kor,
        nem,  
        datum,
        helyszin,
        tav,
        max_resztvevo,
        resztvevok,
        dobogosok, 
    });
}

}

export default new RaceService();