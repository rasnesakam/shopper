
async function fetcData<T>(url: string, queryOpts?: Array<{}>): Promise<Array<T>> {
	let datas: T[]  = [];
	await fetch(url)
	.then(response =>{
		if (!response.ok)
			throw Error(response.statusText)
		return (response.json())
	})
	.then(data => {
		data.map((item: T) => {datas.push(item)});
	})
	.catch(err => {
		console.log(err);
	});
	return datas;
}

export default fetcData;