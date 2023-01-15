
 function fetcData<T>(url: string, queryOpts?: Array<{}>): Array<T> {
	let datas: T[]  = [];
	fetch(url).then(json => json.json()).then(data => {
		data.datas.map((item: T) => {datas.push(item)});
	});
	return datas;
}

export default fetcData;