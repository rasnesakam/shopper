
async function fetcData<T>(url: string, queryOpts?: Array<{}>): Promise<Array<T>> {
	let datas: T[]  = [];
	await fetch(url).then(data => data.json()).then(data => {
		console.log(data)
		data.map((item: T) => {datas.push(item)});
	});
	return datas;
}

export default fetcData;