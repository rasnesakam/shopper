const apiUrl = process.env.NODE_ENV == "development" ? "http://localhost:5047/Image" : "/api/shop/Image";

export async function uploadMedia(form: FormData): Promise<string> {
    return fetch(apiUrl, {
        method: "POST",
        body: form
    }).then(responese => {
        if (responese.ok)
            return responese.json();
        else
            throw responese.statusText
    }).catch(err => console.error(err))
        .then(data => data.file);
}