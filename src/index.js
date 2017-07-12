function optSearch(){
	let first = arguments[0]
	let second = arguments[1]
	let len = arguments.length
	let strArr = arguments[len-1].slice(1).split('&')
	let obj = {}
	strArr.map(item=>{
		let temIndex = item.indexOf('=')
		let name = item.slice(0,temIndex)
		obj[name] = item.slice(temIndex+1)
	})
	if(typeof first === 'object' && first !== null) {
		Object.assign(obj,first)
		return obj2str(obj)
	}else if(len === 1) {
		return obj
	}else if(len === 2) {
		return obj[first]
	}else if(len === 3) {
		if(second === true) {
			delete obj[first]
			return obj2str(obj)
		}else{
			obj[first] = second
			return obj2str(obj)
		}
	}
	function obj2str(ob){
		let str = ''
		for(let i in ob) {
			str += (i+'='+ob[i]+'&')
		}
		return '?'+str.slice(0,-1)
	}
}
export default optSearch