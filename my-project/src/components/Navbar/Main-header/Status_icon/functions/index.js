import { Route } from "../../../../../routes"

export function logout(){
    history.pushState("null" ,'null', './login')
    Route()
} 