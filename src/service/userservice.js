import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/User/';


class UserService{

    create(jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem){
        return axios.post(API_URL+'create',{
            jogosultsag,
      email,
      jelszo,
      vezeteknev,
      keresztnev,
      szuletesi_datum,
      nem,
        });
    }
   
    getUsers(){
        return axios.get(API_URL+'get',{ headers: authHeader() });
    }
   getUser(id){
    return axios.get(API_URL+'get/'+id,{ headers: authHeader() });
   }
deleteUser(){
    return axios.delete(API_URL+'remove/'+id,{ headers: authHeader() });
}

updateUser(id,jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem){
    return axios.put(API_URL+'update/'+id,{
        email,
        jelszo,
        vezeteknev,
        keresztnev,
        szuletesi_datum,
        nem,
    });
}
}

export default new UserService();