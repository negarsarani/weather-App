export function submit(e) {
    e.preventDefault();
    history.pushState(null, null, "/login")
    console.log(location.pathname); 
}

export function NewUser(e){
    const target = e.currentTarget
    const input = document.getElement
    console.log(target);
}
