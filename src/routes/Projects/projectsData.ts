// src/projectsData.ts
type Link = {
	name: string;
	url: string;
};

export type Project = {
	src: string;
	title: string;
	date: string;
	type: string[]; // categories = ['All', 'AI/ML', 'Games', 'Web/App'];
	links?: Link[];
	skills: string;
	explanation: string[];
};

export const projects: Project[] = [
	{
		src: '/project/ImpactEducation.png',
		title: 'Impact Education Official Webpage',
		date: 'Jan 2025',
		type: ['Web/App'],
		links: [{ name: 'impactedu.org', url: 'https://www.impactedu.org/' }],
		skills: 'React, Next.js, JS, TS, Vercel, Tailwind CSS',
		explanation: [
			"Developed and deployed Impact Education's frontend website using React, Next.js, and TypeScript.",
			'Styled with Tailwind CSS and optimized for performance with Vercel deployment.'
		]
	},
	// {
	// 	src: '/project/Robo.png',
	// 	title: 'RoboGardener',
	// 	date: 'Jan 2025',
	// 	type: ['Games'],
	// 	links: [{ name: 'Github', url: '/' }],
	// 	skills: 'Unity, C#',
	// 	explanation: ['In-development.']
	// },
	{
		src: 'project/crown.png',
		title: 'Crown of Persuasion',
		date: 'Jan 2025',
		type: ['Games'],
		links: [{ name: 'itch.io', url: 'https://aki-bread.itch.io/crown-of-persuasion' }],
		skills: 'Unity, C#, Procreate',
		explanation: [
			'Developed a 2D platformer Visual novel style game for the Pirate Game Jam 2025',
			'Explored themes of what it means to be a weapon in a non-violence way, with dialogue-heavy gameplay',
			'Completed the game in ~3 weeks'
		]
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
