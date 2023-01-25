export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('access_token'));

    if (user && user.access_token) {
        return { Authorization: `Bearer ${user.access_token}` , "Content-type": "application/json" };
    } else {
        return {};
    }
}