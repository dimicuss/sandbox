function isNot(item) {
	return item !== this;
}


function getTranspositions(items, callback, transposition = []) {
	if (items.length === 0) {
		callback(transposition);
	} else {
		for (let j = 0; j < items.length; j++) {
			const currentItem = items[j];
			const filteredItems = items.filter(isNot, currentItem);
			
			getTranspositions(filteredItems, callback, [...transposition, currentItem]);
		}
	}
}


function getDistance(a, b) {
	return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}


function getPathDistance(path) {
	let result = 0;
	
	for (let i = 0; i < path.length - 1; i ++) {
		result = result + getDistance(path[i], path[i + 1]);
	}
	
	return result;
}


export default function findShortestPath(path) {
	let minPath = { distance: Infinity };
	
	function catchTransposition(path) {
		let distance = getPathDistance(path);
		
		if (distance < minPath.distance) {
			minPath = { path, distance }
		}
	}
	
	getTranspositions(path, catchTransposition)
	
	return minPath.path;
}
