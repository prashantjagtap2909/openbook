export default function getUser() {
    const openBookUser = JSON.parse(localStorage.getItem('openBookUser'))
    return openBookUser
}