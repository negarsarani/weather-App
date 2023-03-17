export function submit(e) {
    e.preventDefault();
    history.pushState(null, null, "/login")
    console.log(location.pathname); 
}
