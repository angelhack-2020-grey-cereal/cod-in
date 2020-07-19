const users = [
  {
    name: '이용재',
    tier: 4,
    avatar_url: require('../../images/profile/me.jpg'),
    coin: 128,
  }, {
    name: '지원',
    tier: 2,
    avatar_url: require('../../images/profile/jiwon.png'),
    coin: 256,
  }, {
    name: 'Cereal',
    tier: 3,
    avatar_url: 'https://img.segye.com/content/image/2020/06/17/20200617507674.jpg',
    coin: 768,
  }, {
    name: '그레이',
    tier: 4,
    avatar_url: 'https://www.mandlpaints.com/wp-content/uploads/2018/09/Ash-Grey.jpg',
    coin: 837,
  }, {
    name: '길동',
    tier: 5,
    avatar_url: 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting.jpg',
    coin: 13,
  }, {
    name: 'EE',
    tier: 5,
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/440px-White_Persian_Cat.jpg',
    coin: 137,
  }, {
    name: '스프라이트',
    tier: 5,
    avatar_url: 'https://cdn.gamsanews.co.kr/news/photo/201706/6078_5824_536.jpg',
    coin: 2049,
  },
];

export default users;

export const [mockUser, mockInterviewee] = users;
