import { Decimal } from 'decimal.js';
import getTranspositions from './getTranspositions';



interface Point {
    x: Decimal,
    y: Decimal
}


interface Result {
    distance: Decimal,
    transposition?: Point[],
}



function getDistance(a: Point, b: Point): Decimal {
	return b.x.minus(a.x).pow(2).plus(b.y.minus(a.y).pow(2)).sqrt();
}


function getPathDistance(path: Point[]): Decimal {
	let result: Decimal = new Decimal(0);

	for (let i = 0; i <= path.length - 2; i ++) {
		result = result.plus(getDistance(path[i], path[i + 1]));
	}

	return result;
}


export default function findShortestPath(path: Point[]): Point[] {
	let result: Result = { distance: new Decimal(Infinity) };
	
	function catchTransposition(transposition: Point[]) {
		const distance: Decimal = getPathDistance(transposition);

		if (distance.lessThan(result.distance)) {
			result = { transposition, distance }
		}
	}
	
	getTranspositions<Point>(path, catchTransposition);

	return result.transposition;
}
