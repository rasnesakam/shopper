import Product from "@type/Product";
import {any} from "prop-types";
import product from "@type/Product";


const apiUrl = process.env.NODE_ENV == "development" ? "http://localhost:5047" : "/api/shop";

export async function submitProduct(product: Product): Promise<Product> {
    return fetch(`${apiUrl}/Products/Submit`,{
        method: "Post",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.ok)
            return response.json();
        else throw new Error(response.statusText);
    }).catch(err => console.error(err)).then(data => data as Product);
}

export async function getProducts(token: string | null = null) : Promise<Product[]> {
    return fetch(`${apiUrl}/Products/All`,{
        method: "Get",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.ok)
            return response.json();
        else throw new Error(response.statusText);
    }).catch(err => console.error(err)).then(data => data as Product[]);

}