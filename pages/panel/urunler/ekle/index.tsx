import {useState} from "react";

export default function AddProduct(){
    const [propCount, setPropCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState("");
    return <>
        <form className="w-10/12 grid grid-cols-2 gap-4">

            <input type="hidden" name="_token"/>

            <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="Name"
                   placeholder="Ürün Adı" required={true}/>
            <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="Brand"
                   placeholder="Ürün Markası" required={true}/>

            <select className="p-1 border-b-2 bg-transparent border-primary focus-visible:outline-none"
                    name="Categories"
                    placeholder="Ürün Adı" required={true}>
                <option>Kategori 1</option>

                <option>Kategori 2</option>

                <option>Kategori 3</option>
            </select>

            <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="number" name="Price"
                   placeholder="Ürün Fiyatı (₺)" required={true}/>

            <input className="p-1 border-b-2 border-primary focus-visible:outline-none" type="text" name="tags"
                   placeholder="Ürün Etiketleri" required={true}/>

            <label htmlFor="productImage" className="p-1 border-b-2 border-primary focus-visible:outline-none cursor-pointer">
                {selectedImage.length > 0 ? <span className="text-gray-700">{selectedImage}</span> : "Ürün Fotoğrafı Ekle"}
            </label>
            <input id="productImage" className="hidden" type="file" name="Image" accept="image/*"
                   placeholder="Ürün Görseli" required={true}
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
                                <input name="prop-key" className="w-full p-2 text-center" placeholder="Ürün Özellik Adı"
                                       required={true}/>
                            </td>
                            <td>
                                <input name="prop-value" className="w-full p-2 text-center"
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
}