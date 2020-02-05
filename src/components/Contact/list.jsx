import React from 'react';

const timelineData = [
	{
			text: 'Fullstack 개발',
			text2:'(react-native && graphql && 유지보수 && 기획)',
			date: '2019.09 ~ 2019.12 (주)금방 ',
			category: {
		tag: 'app-ideas',
		color: '#FFDB14'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text: 'aws와 graphql을 통해 serverless와 백엔드 개발',
			date: ' 2019.10 AWS & Graphql',
			category: {
		tag: '',
		color: '#e17b77'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text: '프로젝트 개발에 필요한 기획 관리 능력, 협업  ',
			date: '2019.10 개발 상품 기획 ',
			category: {
		tag: '',
		color: '#1DA1F2'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text:	'Hyperleger-fabric docker를 이용한',
			text2:	"peer와 orderer 블록체인 체인코드 개발 ",
			date: '2019.06 Hyperleger-fabric & Docker',
			category: {
		tag: '',
		color: '#018f69'
	},
			link: {
					url:
							'',
					text: ''
			}
	},
	{
			text: '블록체인 마스터 과정 (한국 표준협회, 한국블록체인연구교육원)',
			text2:"Hyperleger-fabric, Ethereum 개발",
			date: '2019.05 ~ 2019.11 블록체인 마스터 과정',
			category: {
		tag: '',
		color: '#018f69'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text: 'express서버 개발, 데이터(Mysql, mongodb)와',
			text2:" react 라이브러리를 이용 개발 ",
			date: '2019.04 Node.js & Database & React',
			category: {
		tag: '',
		color: '#018f69'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text: '프레임 워크, 라이브러리를 사용하지 않고',
			text2:"순수 javascript 개발",
			date: '2019.02 Vanila.js ',
			category: {
		tag: '',
		color: '#018f69'
	},
			link: {
					url: '',
					text: ''
			}
	},
	{
			text: 'HTML, CSS, JavaScript, algorithm,',
			text2:"_Underscore 함수 구현",
			date: '2019.01 ~ 2019.05 코드스테이츠 ',
			category: {
		tag: '',
		color: '#018f69'
	},
			link: {
					url: '',
					text: ''
			}
	}
]

const TimelineItem = ({ data }) => (
	<div className="timeline-item">
			<div className="timeline-item-content">
					{/* <span className="tag" style={{ background: data.category.color }}>
							{data.category.tag}
					</span> */}
					<time>{data.date}</time>
					<p style={{color:"black", marginBottom:"-1rem" }}>{data.text}</p>
					<p style={{color:"black"}}>{data.text2}</p>
					{data.link && (
							<a
									href={data.link.url}
									target="_blank"
									rel="noopener noreferrer"
							>
									{data.link.text}
							</a>
					)}
					<span className="circle" />
			</div>
	</div>
);

const Timeline = () =>
	timelineData.length > 0 && (
			<div className="timeline-container">
					{timelineData.map((data, idx) => (
							<TimelineItem data={data} key={idx} />
					))}
			</div>
	);
export default Timeline;