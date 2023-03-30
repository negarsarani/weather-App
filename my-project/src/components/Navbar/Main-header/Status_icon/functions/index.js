import { Route } from "../../../../../routes"

export function logout(){
    document.cookie = "user" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    history.pushState("null" ,'null', './login')
    Route()
} 