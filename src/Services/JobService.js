import networkInstance from  '../NetworkManager';

const proxy = "https://cors-anywhere.herokuapp.com/"
const serviceHost = "https://jobs.github.com/"
const searchPath = proxy+serviceHost+"positions.json?search=";
const jobDetailsPath = proxy+serviceHost+"positions/";
const companyLogoDefault = "https://www.designevo.com/res/templates/thumb_small/green-square-and-brown-tree.png";

class JobService{
   
    fetchAllJobsByKeyword = (keyword) => {
        return networkInstance.get(searchPath+keyword)
        .then(response => response.data);
    }    

    fetchJobById = (id) => {
        return networkInstance.get(jobDetailsPath+id+'.json')
        .then(response => {
            if(response.data.company_logo)
                return response.data
            else
                return {...response.data,company_logo : companyLogoDefault}
        });
    }
} 

export default JobService;
