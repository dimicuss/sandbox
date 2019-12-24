function isNot(item: any) {
	return item !== this;
}


export default function getTranspositions<T>(items: T[], callback: Function, transposition: T[] = []): void {
	if (items.length === 0) {
		callback(transposition);
	} else {
		for (let j = 0; j < items.length; j++) {
			const filteredItems: T[] = items.filter(isNot, items[j]);
			const nextTransposition: T[] = [...transposition, items[j]];
			getTranspositions(filteredItems, callback, nextTransposition);
		}
	}
}