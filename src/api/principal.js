const role = localStorage.getItem('role');

export const isAdmin = () => {
    return role === "ROLE_ADMIN";
}

export const isUser = () => {
    return role === "ROLE_USER";
}
