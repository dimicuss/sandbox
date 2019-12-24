import { Decimal } from 'decimal.js';
import findShortestPath from './findShortestPath';


console.log(findShortestPath([
    { x: new Decimal(1), y: new Decimal(1) },
    { x: new Decimal(7), y: new Decimal(4) },
    { x: new Decimal(7), y: new Decimal(1) },
    { x: new Decimal(1), y: new Decimal(3) },
]));
