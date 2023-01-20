export async function fetchItems(){
    const url = 'http://localhost:3004/items'
    const r = await window.fetch(
        url, 
        {
            method: 'GET'
        }
    )
    return await r.json()
} 