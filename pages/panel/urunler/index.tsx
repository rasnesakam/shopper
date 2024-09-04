import {useState} from "react";
import Product from "@type/Product";
import mockProducts from "@src/mock/products"
export default function Products(){

    const [products, setProducts] = useState<Product[]>(mockProducts);
    const [search, setSearch] = useState("");

    return <div className="w-full flex flex-col items-center">
        <input className="w-10/12 focus-visible:outline-primary p-2 m-2 border border-primary rounded-md" placeholder={"Ürün Ara"} value={search} onChange={(e) => setSearch(e.target.value)}/>
        <table className="table-fixed w-full text-center">
            <thead className="">
            <tr>
                <th>Görsel</th>
                <th>Başlık</th>
                <th>Kategori</th>
                <th>Fiyat</th>
            </tr>
            </thead>
            <tbody className="">
                {products.map((product, index) => <tr key={`product-${index}`}>
                    <td>
                        <img className="w-16 h-16 mx-auto" src={product.productImages[0].fileUri}
                             alt={product.productImages[0].altText}/>
                    </td>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {/* Kategori Gelecek */}
                        {product.description}
                    </td>
                    <td>
                        {/* Kategori Gelecek */}
                        {product.price}₺
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
}
