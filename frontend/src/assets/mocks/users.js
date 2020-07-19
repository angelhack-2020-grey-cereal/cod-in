const users = [
  {
    name: '제이슨',
    tier: 4,
    avatar_url: require('../../images/profile/me.jpg'),
    coin: 128,
  }, {
    name: '엔젤핵',
    tier: 2,
    avatar_url: 'https://i.pinimg.com/564x/0b/86/66/0b8666080b8216172fb8036b19f4e47d.jpg',
    coin: 256,
  }, {
    name: 'Cereal',
    tier: 3,
    avatar_url: 'https://img.segye.com/content/image/2020/06/17/20200617507674.jpg',
  }, {
    name: '그레이',
    tier: 4,
    avatar_url: 'https://www.mandlpaints.com/wp-content/uploads/2018/09/Ash-Grey.jpg',
  },
];

export default users;

export const [mockUser, mockInterviewee] = users;
