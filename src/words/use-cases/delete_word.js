export const deleteWord = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/Words/${id}`;
    const res = await fetch(url, {
        method: 'DELETE'
    })
    const deleteRes = await res.json();
    return true;
}