import axios  from "axios"
import Config from "./config"

var api=axios.create({
    baseURL:Config.baseUrl,
    timeout:300000
})

api.interceptors.request.use((config)=>{
    config.headers["user"]='5f69cd1b0023164a8b9f3ee3'
    return config;
},(error)=>{
    console.log("request error",error)
    return Promise.reject(error)
})

api.interceptors.response.use((res)=>{
    console.log('request config',res)
    return res;
},(error)=>{
    console.log("response error",error)
    return Promise.reject(error)
})

const get=async (url,data)=>{
    const response=await api.get(url,data)
    .catch(error=>{
        errorHeader(error)
        console.log('get error===>',error)
    })
    return responseHeader(response)
}

const post=async (url,data)=>{
    const response=await api.post(url,data)
    .catch(error=>{
        errorHeader(error)
        console.log('get error===>',error)
    })
    return responseHeader(response)
}

const put=async (url,data)=>{
    const response=await api.put(url,data)
    .catch(error=>{
        errorHeader(error)
        console.log('get error===>',error)
    })
    return responseHeader(response)
}

const del=async (url,data)=>{
    const response= await api.request({data,url,method:'delete'})
    return responseHeader(response)
}


/* 统一处理返回体 */
function responseHeader(response){
    console.log('response===>',response)
    if(response && response.status===200){
        if(!response.data){
            return {}
        }
        return response.data
    }
    console.log('response error',response)
    return null
}


/* 统一处理错误返回体 */
function errorHeader(error){
    console.log("xxx error===>",error.response)
    let errorMsg=error.response && error.response.data && error.response.data.message
    console.log('///',errorMsg)
}

export { get,post,put,del }