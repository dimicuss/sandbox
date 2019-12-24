import { Decimal } from 'decimal.js';
import findShortestPath from './findShortestPath'


let points = [
    { x: 1, y: 1 },
    { x: 7, y: 4 },
    { x: 7, y: 1 },
    { x: 1, y: 3 }
].map(({ x, y }) => ({ x: new Decimal(x), y: new Decimal(y) }));


console.log(findShortestPath(points));
