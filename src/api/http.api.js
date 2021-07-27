import axios from 'axios'
const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:5000
});

class HTTPService {
    constructor(entity){
        this.entity = entity; //can be used for any entity and its api
        instance.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
                if (token) {
                  config.headers["token"] = token;
                }
                return config;
        }, function (error) {
            return Promise.reject(error);
        });
        
        instance.interceptors.response.use(res => {
            const {status} = res;
            if(status>=400){
                window.location.pathname = '/404'
            }
            return res
        }, (error)=> {
            return Promise.reject(error);
        });
        
    }

    getList = (config)=>{
        return instance.get(this.entity, config)
    }
    
    get = (id, config)=>{
        return instance.get(`/${this.entity}/${id}`, config)
    }
    
    post = (body)=>{
        return instance.post(`/${this.entity}`, body)
    }

    put = (id, body)=>{
        return instance.put(`/${this.entity}/${id}`, body)
    }
    
    patch = (id, body)=>{
        return instance.patch(`/${this.entity}/${id}`, body)
    }
    
    delete = (id)=>{
        return instance.delete(`/${this.entity}/${id}`)
    }
}

export default HTTPService