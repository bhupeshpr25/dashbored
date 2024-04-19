export interface Model {
	index: number;
	modelName: string;
	versions: string;
	license: string;
	contributors: string;
	rating: number;
	logo: string;
	content: string;
}

export const models: Model[] = [
	{
		index: 1,
		modelName: 'Chat GPT',
		versions: 'v2.1',
		license: 'MIT',
		contributors: './assets/user3.svg',
		rating: 4,
		logo: './assets/chatgpt.svg',
		content: 'chat.openai.com'
	},
	{
		index: 2,
		modelName: 'TensorFlow',
		versions: 'v1.1',
		license: 'MIT',
		contributors: './assets/user2.svg',
		rating: 3,
		logo: './assets/tensorflow.svg',
		content: 'www.tensorflow.org'
	},
	{
		index: 3,
		modelName: 'Bard',
		versions: 'v0.5',
		license: 'Private',
		contributors: './assets/user1.svg',
		rating: 3,
		logo: './assets/bard.svg',
		content: 'bard.google.com'
	},
	{
		index: 4,
		modelName: 'Chat GPT',
		versions: 'v0.1',
		license: 'MIT',
		contributors: './assets/user3.svg',
		rating: 4,
		logo: './assets/chatgpt.svg',
		content: 'chat.openai.com'
	},
	{
		index: 5,
		modelName: 'Chat GPT',
		versions: 'v0.1',
		license: 'MIT',
		contributors: './assets/user3.svg',
		rating: 4,
		logo: './assets/chatgpt.svg',
		content: 'chat.openai.com'
	},
	{
		index: 6,
		modelName: 'Chat GPT',
		versions: 'v0.1',
		license: 'MIT',
		contributors: './assets/user3.svg',
		rating: 4,
		logo: './assets/chatgpt.svg',
		content: 'chat.openai.com'
	}
];
