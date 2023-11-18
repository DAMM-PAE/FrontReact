//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://nattech.fib.upc.edu:40540/api"
;


export async function apiGet(url){
    let response;
    const apiURL = `${API_URL}${url}`;
    console.log(apiURL);
    try {
        const res = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Allow-Control-Allow-Origin': '*'
            }
        });
        response = await res.json();
    } catch (error) {
        response = console.error('Error:', error);
    }
    return console.log('Success:', response);
}
