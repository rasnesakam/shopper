import Category from "@type/Category";

const apiUrl = process.env.NODE_ENV == "development" ? "http://localhost:5047/Categories" : "/api/shop/Categories";

export async function getAllCategories(): Promise<Category[]> {
    return fetch(apiUrl).then(res => {
        if (res.ok)
            return res.json()
        else
            throw res.statusText
    })
        .catch(err => {
            console.error(err)
            return [];
        })
        .then(data => data as Category[]);
}

export async function addCategory(category: Category): Promise<Category> {
    return fetch(`${apiUrl}/Submit`,{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(category)
    }).then(response => {
        if (response.ok)
            return response.json()
        else throw new Error(response.statusText);
    }).catch(err => {
        console.log(err);
        return null;
    }).then(data => data as Category);
}
