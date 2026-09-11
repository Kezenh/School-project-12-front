/**
 * Fetch performance datas 
 * @param { String } userId 
 * @return { Promise }
 */
async function fetchPerformanceDatas(userId) {
    return fetch("https://school-project-12-back.onrender.com/user/" + userId + "/performance")
    .then((response) => response.json())
    .then((res) => res.data)
    .catch((err) => console.log(err))
}

export default fetchPerformanceDatas