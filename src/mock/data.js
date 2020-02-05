import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Royeden portfoilo', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
	subtitle: ''
	,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profil.jpg',
  paragraphOne: 'I make useful stuff. Fullstack Developer. 👍 + 💻 = 😁😆',
  paragraphTwo: 'A to Z 개발 경험을 지향합니다.',
	paragraphThree: `
	`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 's_project-min.png',
		title: '쇼핑몰 앱 - (주)금방',
		infotitle: "See Project Presentation",
    info: 'react-native, node, graphql, apollo, prisma, mysql, aws, 개발기획 ',
		info2: `
		(회사 프로젝트 중단, 내용변경 -> 개인 프로젝트 작업중)
		B2C 쇼핑몰앱 (고객 -> 소매업), C2C(소매업 -> 도매업) 및 관리자(소매업) 앱까지 개발 및 기획
		`,
    url: 'https://docs.google.com/presentation/d/15sN5Ru3IKQx7g6PYB0yuWQFQgX5qIF1tivGyCkF7Yd8/edit?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'kumbang-min.png',
    title: '금시세 앱 - (주)금방',
    info: 'react-native, node, mysql, aws, firebase',
		info2: `
		금일 api를 작성하고 앱에 금,은 도소매 시세 정보제공,
    예측시세 알고리즘을 통해 금 시세 예측 정보 제공,
		상품 정보를 제공하고 판매 
		`,
    url: 'https://play.google.com/store/apps/details?id=com.keumbang.upstoregoldprice',
		repo: ''
		
		, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/kimsunsoo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
