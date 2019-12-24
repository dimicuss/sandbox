export default function getTranspositions<T>(items: T[], callback: Function, transposition: T[] = []): void {
	if (items.length === 0) {
		callback(transposition);
	} else {
		for (let i = 0; i < items.length; i++) {
			const filteredItems: T[] = [];
			const nextTransposition: T[] = [...transposition, items[i]];

			for (let j = 0; j < items.length; j++) {
                if (items[j] !== items[i]) {
                    filteredItems.push(items[j]);
                }
            }

			getTranspositions(filteredItems, callback, nextTransposition);
		}
	}
}