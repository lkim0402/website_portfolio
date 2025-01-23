// src/projectsData.ts
type Link = {
	name: string;
	url: string;
};

export type Project = {
	src: string;
	title: string;
	date: string;
	type: string[]; // categories = ['All', 'AI/ML', 'Games', 'App'];
	links?: Link[];
	skills: string;
	explanation: string[];
};

export const projects: Project[] = [
	{
		src: 'pumpkin.png',
		title: 'RoboGardener',
		date: 'Jan 2025',
		type: ['Games'],
		links: [{ name: 'Github', url: '/' }],
		skills: 'Unity, C#',
		explanation: ['In-development.']
	},
	{
		src: 'pumpkin.png',
		title: 'Sound Visualizer Software',
		date: 'Jan 2025 - Present',
		type: ['App'],
		links: [{ name: 'Github', url: '/' }],
		skills: 'Unity, C#',
		explanation: ['Creating a sound visualizer software that visualizes music in real-time.']
	},
	{
		src: 'pumpkin.png',
		title: 'AI Simulation World',
		date: 'Jan 2025 - Present',
		type: ['AI/ML', 'Games'],
		links: [{ name: 'Github', url: '/' }],
		skills: 'Unity, C#, HuggingFace',
		explanation: ['Creating a sound visualizer software that visualizes music in real-time.']
	},
	{
		src: 'project/BinGenius.png',
		title: 'BinGenius - 2024 EduHacks Hackathon',
		date: 'Jan 2024',
		type: ['AI/ML'],
		links: [{ name: 'Github', url: 'https://github.com/lkim0402/BinGenius?tab=readme-ov-file' }],
		skills: 'TensorFlow, Python, Kaggle, Jupiter Notebook, React, CSS, HTML, Vercel',
		explanation: [
			'Developed CNN model BinGenius that performs trash classification (recyclable, general waste, compost).',
			'Achieved 75% accuracy and secured 3rd place in the competition.'
		]
	},
	{
		src: 'project/TensorFlow.png',
		title: 'TensorFlow Projects',
		date: 'Sept 2023',
		type: ['AI/ML'],
		links: [{ name: 'Github', url: 'https://github.com/lkim0402/Tensorflow_Exam_Prep' }],
		skills: 'TensorFlow, Python, Kaggle, Jupiter Notebook',
		explanation: [
			'Dived into different Computer Vision/NLP/Time Series projects using TensorFlow and Python',
			'Obtained TensorFlow certification.'
		]
	}
];
