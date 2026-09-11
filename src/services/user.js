/**
 * Fetch user datas 
 * @param { String } userId 
 * @return { Promise }
 */
async function fetchUserDatas(userId) {
    return fetch("https://school-project-12-back.onrender.com/user/" + userId)
    .then((response) => response.json())
    .then((res) => res.data)
    .catch((err) => console.log(err))
}

export default fetchUserDatas