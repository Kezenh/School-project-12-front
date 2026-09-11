/**
 * Fetch activity datas 
 * @param { String } userId 
 * @return { Promise }
 */
async function fetchActivityDatas(userId) {
    return fetch("https://school-project-12-back.onrender.com/user/" + userId + "/activity")
    .then((response) => response.json())
    .then((res) => res.data.sessions)
    .catch((err) => console.log(err))
}

export default fetchActivityDatas