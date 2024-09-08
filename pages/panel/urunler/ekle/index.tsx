import {FormEvent, FormEventHandler, useEffect, useState} from "react";
import Product from "@type/Product";
import {uploadMedia} from "@src/functions/MediaApiHandler";

import {normalizeString} from "@src/functions/normalizeString";
import {submitProduct} from "@src/functions/ProductsApiHandler";
import Category from "@type/Category";
import {getAllCategories} from "@src/functions/CategoryApiHandler";

//TODO: Seperate logic of fetching datas into different resource.

function saveProduct(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    let formData: FormData = new FormData(e.target as HTMLFormElement);
    let image = formData.get('file') as File | null;
    if (image == null || image.name.length == 0){
        alert("Lütfen bir resim girin");
        return ;
    }
    let properties: {key: string, value: string}[] = [];
    let propertyKeys: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="prop-key[]"]')
    let propertyValues: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="prop-value[]"]')
    propertyKeys.forEach((key, index) => {
        properties.push({key: key.value, value: propertyValues.item(index).value})
    })
    let product: Product = {
        name: formData.get("Name") as string,
        brand: formData.get("Brand") as string,
        uri: formData.get("Name") as string,
        productImages: [],
        price: Number.parseInt(formData.get("Price") as string),
        description: formData.get("Name") as string,
        categories: [
            {
                uri: formData.get("Categories")!.toString(),
                name: "",
            }
        ],
        tags: formData.get("tags")!.toString().split(", ").map(tag  => ({tag})),
        properties
    };

    uploadMedia(formData).then(image => {
        product.productImages.push({fileUri: image, altText: normalizeString(product.name)});
        submitProduct(product).then(product => console.log("Eklenen Ürün: ", product))
    })
    console.log(product)
}

export default function AddProduct(){
    const [propCount, setPropCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState("");
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        getAllCategories().then(
            fetchedCategories => {
                console.log(fetchedCategories);
                setCategories(fetchedCategories as Category[]);
            }
        );
    },[])
    return (
        <>
            <form onSubmit={saveProduct} className="w-10/12 grid grid-cols-2 gap-4" encType="multipart/form-data">

                <input type="hidden" name="_token"/>

                <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="Name"
                       placeholder="Ürün Adı" required={true}/>
                <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="Brand"
                       placeholder="Ürün Markası" required={true}/>

                <select className="p-1 border-b-2 bg-transparent border-primary focus-visible:outline-none"
                        name="Categories" required={true}>
                    <option selected={true}>Kategori Seç</option>
                    {categories.map((item, index) => <option key={`select-option-${index}`} value={item.uri}>{item.name}</option> )}
                </select>

                <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="number" name="Price"
                       placeholder="Ürün Fiyatı (₺)" required={true}/>

                <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="tags"
                       placeholder="Ürün Etiketleri" required={true}/>

                <label htmlFor="productImage" className="p-1 border-b-2 border-primary focus-visible:outline-none cursor-pointer">
                    {selectedImage.length > 0 ? <span className="text-gray-700">{selectedImage}</span> : "Ürün Fotoğrafı Ekle"}
                </label>
                <input id="productImage" className="hidden" type="file" name="file" accept="image/*"
                       placeholder="Ürün Görseli"
                       onChange={(e) => setSelectedImage(e.target.value.slice(e.target.value.lastIndexOf("\\") + 1))}/>
                <textarea
                    className="col-span-2 p-2 my-2 w-full border-2 border-primary rounded-md focus-visible:outline-none"
                    name="Description" placeholder="Ürün Açıklaması"></textarea>

                <div className="col-span-2 flex flex-col items-center border border-primary rounded-md">
                    <table className="table-fix w-full">
                        <thead>
                        <tr className="border-b-2 border-primary">
                            <th> Özellik Adı</th>
                            <th> Özellik Değeri</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        {new Array(propCount).fill(0).map((item, index) => (
                            <tr key={`prop-${index}`} className="border-b-[1px] border-primary">
                                <td>
                                    <input name="prop-key[]" className="w-full p-2 text-center" placeholder="Ürün Özellik Adı"
                                           required={true}/>
                                </td>
                                <td>
                                    <input name="prop-value[]" className="w-full p-2 text-center"
                                           placeholder="Ürün Özellik Değeri" required={true}/>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <div className="flex flex-row justify-center my-2">

                        <button type="button" className="text-white bg-primary p-2 mx-2 rounded-md hover:bg-primary/80"
                                onClick={() => setPropCount(propCount + 1)}>Özellik Ekle
                        </button>

                        <button type="button" className="text-white bg-primary p-2 mx-2 rounded-md hover:bg-primary/80"
                                onClick={() => setPropCount(propCount > 0 ? propCount - 1 : 0)}>Özellik Çıkar
                        </button>
                    </div>
                </div>
                <div className="col-span-2 flex flex-row items-center">
                    <button type="submit" className="text-white mx-auto bg-primary p-2 rounded-md hover:bg-primary/80">
                        Ürün Ekle
                    </button>
                </div>
            </form>
        </>
    )
}