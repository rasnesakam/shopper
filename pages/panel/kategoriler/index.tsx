import {FormEvent, useState} from "react";
import Category from "@type/Category";
import {faTrashAlt, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {submitHandler} from "@src/functions/submitForm";
import {normalizeString} from "@src/functions/normalizeString";
import {addCategory} from "@src/functions/CategoryApiHandler";

//TODO: Fetch initial categories after page load instead of getServerSideProps()

export async function getServerSideProps(){
    let categories = await fetch("http://localhost/api/shop/Categories").then(response => response.json()).catch(err => {
        console.error(err);
        return []
    });
    console.log("Categories", categories)
    return {
        props: {
            categoriesProp: categories
        }
    }
}

export default function Categories({categoriesProp}: {categoriesProp: Category[]}){
    const [categories, setCategories] = useState<Category[]>(categoriesProp);
    const [newCategoryName, setNewCategoryName] = useState("");

    function addNewCategory(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        let formData = new FormData(e.target as HTMLFormElement);
        let category: Category = {
            name: formData.get("name")!.toString(),
            uri: formData.get("uri")!.toString(),
            status: 0
        }
        addCategory(category).then(data => {
            setCategories([...categories, data as Category])
        })
    }

    return <div className="w-11/12 p-10">

        <div className="w-full mx-auto">
            <div className="text-2xl font-semibold mt-3 mb-2">Kategori Ekle</div>
            <div className="w-full border border-primary mx-auto rounded-md">
                <form onSubmit={addNewCategory}>
                    <table className="table-fixed w-full text-center">
                        <tbody>
                        <tr>
                            <td>
                                <input type="text" className="focus-visible:outline-primary p-1 m-2 border-b-2 border-primary" name="uri"
                                       placeholder="Kategori Kimliği" readOnly={true}
                                       value={normalizeString(newCategoryName)}/>
                            </td>
                            <td>
                                <input type="text" className="focus-visible:outline-primary p-1 m-2 border-b-2 border-primary"
                                       name="name" placeholder="Kategori Adı"
                                       onChange={(e) => setNewCategoryName(e.target.value)}/>
                            </td>
                            <td>
                                <button type="submit">Ekle</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </form>
            </div>
        </div>

        <div className="text-2xl font-semibold mt-3 mb-2">Tüm Kategoriler</div>
        <div className="full border mx-auto border-primary rounded-md">
            <table className="table-fixed w-full text-center">
                <thead className="border-b-2 border-primary">
                <tr>
                    <th>Kategori İsmi</th>
                    <th>Durum</th>
                    <th>Seçenekler</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((item, index) => (<tr key={`category-${index}`} className="border-b-1 border-primary">
                    <td>{item.name}</td>
                    <td>{item.status == 1 ?
                        <p className="text-sm text-black">Yayında</p> :
                        <p className="text-sm text-gray-600">Taslak</p>}
                    </td>
                    <td className="flex flex-row justify-center gap-2 p-2">
                        <form>
                            <input type="hidden" name="URI" value={item.uri}/>
                            <button className={`${item.status == 1 ? "bg-warning": "bg-success"} p-2 rounded md text-white hover:brightness-90`}>
                                <FontAwesomeIcon icon={item.status == 1 ? faEyeSlash : faEye} className="w-4 h-4" />
                            </button>
                        </form>

                        <form action={`/api/Categories/Delete/${item.uri}`} method="Delete" onSubmit={submitHandler((r) => {
                            if (r.status == 200)
                                setCategories(categories.splice(index,1))
                        })}>
                            <button className="bg-danger p-2 rounded-md text-white hover:brightness-90">
                                <FontAwesomeIcon icon={faTrashAlt} className="w-4 h-4"/>
                            </button>
                        </form>

                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>
    </div>
}