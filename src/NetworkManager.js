import axios from 'axios';
class NetworkManager{

    get(url){
            return axios.get(url);
        }

    post(url,parameters,headers,callback){

        }
} 

const networkInstance = new NetworkManager(); 
export default networkInstance;
