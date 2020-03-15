import {API_BASE_URL, TOKEN} from '../constants/ConstantVariables';
const AUTH = 'Authorization'
const BEARER = 'Bearer '

const apiRequest = (props) => {
    const headers = new Headers({
        'Content-Type':'application/json'
    })
    if(localStorage.getItem(TOKEN)){
        headers.append(AUTH, BEARER + localStorage.getItem(TOKEN))
    }
    const temps = {headers:headers}

    props = Object.assign({}, temps, props)

    return fetch(props.url, props)
        .then(res => res.json()
        .then(json => {
        if(!res.ok){
            return Promise.reject(json);
        }
        return json;
    }))
}

export function isUsernameExisting(username){
    return apiRequest({
        url: API_BASE_URL + '/auth/is-username-existing?username='+ username,
        method:'GET'
    })
}
export function isEmailExisting(email){
    return apiRequest({
        url: API_BASE_URL + '/auth/is-email-existing?email='+ email,                                                                                                                                                                                                      
        method:'GET'
    })
}

export function register(registerRequest){

    return apiRequest({
        url: API_BASE_URL + "/auth/register",
        method: 'POST',
        body: JSON.stringify(registerRequest)
    });
//     let myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     let raw = JSON.stringify(registerRequest);

//     let requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };
    
//    return fetch(API_BASE_URL+"/auth/register", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));



}

export function loginProfile(loginRequest) {
    return apiRequest({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}
export function getLoggedUserProfile(){
    if(!localStorage.getItem(TOKEN)){
        return Promise.reject("You are not priviliged to access this resource");
    }
    else{
        return apiRequest({
            url: API_BASE_URL + "/me",
            method: 'GET'
        })
    }
}