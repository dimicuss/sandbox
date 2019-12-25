import getTranspositions from './getTranspositions';



interface Point {
    x: number,
    y: number,
}


interface Result {
    distance: number,
    transposition?: Point[],
}



function getDistance(a: Point, b: Point): number {
	return Math.sqrt((b.x - a.x) ** 2 + (b.y + a.y) ** 2);
}


function getPathDistance(path: Point[]): number {
	let result: number = 0;

	for (let i = 0; i < path.length; i++) {
	    let nextPoint: Point = i + 1 < path.length ? path[i + 1] : path[0];
        result = result + getDistance(path[i], nextPoint);
	}

	return result;
}


export default function findShortestPath(path: Point[]): Point[] {
	let result: Result = { distance: Infinity };
	
	function catchTransposition(transposition: Point[]): void {
		const distance: number = getPathDistance(transposition);
		if (distance < result.distance) {
			result = { transposition, distance }
		}
	}
	
	getTranspositions<Point>(path, catchTransposition);

	return result.transposition;
}
