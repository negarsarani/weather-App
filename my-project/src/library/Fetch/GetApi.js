export const key = '9c34003dd89dc2ca836a1475676bfe21';


export async function getData(url, query) {
    try {
        let data = await fetch(url + query);
        return await data.json();
    } catch (error) {
        console.log("error");
    }
}
