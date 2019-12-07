export default {
	entityMap: {
		0: {
			data: {
				color: "red"
			},
			type: 'LINK',
			mutability: 'MUTABLE'
		}
	},
	blocks: [
		{
			type: 'unstyled',
			data: {},
			text: 'some\nt\ne\nxt',
			inlineStyleRanges: [{ style: 'UNDERLINE', offset: 0, length: 4  }],
			entityRanges: [{ key: 0, offset: 0, length: 3 }],
		},
		{
			type: 'unstyled',
			data: {},
			text: 'some text',
			inlineStyleRanges: [],
			inlineEntityRanges: [],
		},
		{
			type: 'unstyled',
			data: {},
			text: 'some text',
			inlineStyleRanges: [],
			inlineEntityRanges: [],
		},
		{
			type: 'unstyled',
			data: {},
			text: 'some text',
			inlineStyleRanges: [],
			inlineEntityRanges: [],
		},
		{
			type: 'unstyled',
			data: {},
			text: 'some text',
			inlineStyleRanges: [],
			inlineEntityRanges: [],
		},
	]
}