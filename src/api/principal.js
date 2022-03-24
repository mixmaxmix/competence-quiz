const role = localStorage.getItem('role');

export const isAdmin = async() => {
    return role === "ROLE_ADMIN";
}

export const isUser = async() => {
    return role === "ROLE_USER";
}
