import times from 'lodash/times';
import createElement from 'dom-draft-js-renderer/es/createElement';
import createDocumentFragment from 'dom-draft-js-renderer/es/createDocumentFragment';


const brRegEx = /\n/g;


function renderBr() {
	return createElement('br');
}


function renderTr(rows, common) {
	return rows.map(row => createElement('tr', row.map(block => createBlock(block, common))));
}


export default {
	styles: {
		BOLD: children => createElement('strong', children),
		ITALIC: children => createElement('em', children),
		STRIKE: children => createElement('strike', children),
		UNDERLINE: children => createElement('u', children),
	},
	entities: {
		LINK: (children, entity) => {
			const a = createElement('a', { href: entity.data.url }, children);
			if (a.hostname.indexOf('playground.ru') === -1) {
				a.setAttribute('target', '_blank');
				a.setAttribute('rel', 'nofollow');
			}
			return a;
		},
	},
	blocks: {
		image: (children, { text }) => createElement('img', { src: '', alt: text }),
		unstyled: children => createElement('p', children),
		blockquote: children => createElement('blockquote', children),
		'table-cell': (children, block) => createElement('td', children, block.data),
		'code-block': children => createElement('pre', children),
		'header-two': children => createElement('h2', children),
		'header-four': children => createElement('h4', children),
		'header-three': children => createElement('h3', children),
		'ordered-list-item': (children, { depth = 0 }) => createElement('li', children, { class: `list-depth-${depth}` }),
		'unordered-list-item': (children, { depth = 0 }) => createElement('li', children, { class: `list-depth-${depth}` }),
		separator: () => createElement('hr'),
		table: (children, block, common) => {
			const { head = [], body = [], options = [] } = block.data;
			return createElement('table', { class: `table table-bordered table-striped ${options.join(' ')}` }, [
				createElement('thead', renderTr(head, common)),
				createElement('tbody', renderTr(body, common)),
			]);
		},
	},
	decorators: {
		BR: {
			render: (children, common, text) => {
				return createDocumentFragment(times(text.length, renderBr))
			},
			strategy: (text, addRange) => {
				let match, offset;
				while ((match = brRegEx.exec(text)) !== null) {
					offset = match.index;
					addRange(offset, match[0].length);
				}
			},
		},
	},
};
