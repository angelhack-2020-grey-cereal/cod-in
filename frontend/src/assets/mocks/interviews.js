import mockUsers from './users';

export default [
  {
    id: 'interviewee_1',
    role: 'interviewee',
    user: mockUsers[1],
    accepted: true,
    time: '1주 전',
    comments: [
      {
        me: false,
        value: 'Gil Dong 님은 thought process를 잘 설명하시는 것...',
      },
      {
        me: true,
        value: '감사합니다. 엔젤핵님 덕분에 인터뷰 실력이 향상되었...',
      },
    ],
  },
  {
    id: 'interviewee_2',
    role: 'interviewee',
    user: mockUsers[2],
    accepted: false,
    time: '1주 전',
    comments: [
      {
        me: false,
        value: '잘 모르겠으면 당황하지 말고 질문을 해주시면 좋을 것...',
      },
      {
        me: true,
        value: '피드백 감사합니다. 제가 부족한 부분이 무엇인지 알게...',
      },
    ],
  },
  {
    id: 'interviewee_3',
    role: 'interviewee',
    user: mockUsers[3],
    accepted: true,
    time: '2주 전',
    comments: [
      {
        me: false,
        value: '놓칠 수 있는 예외 상황을 잘 처리하셨네요 ...',
      },
      {
        me: true,
        value: '다음에도 예외 케이스를 잘 생각할 수 있도록 훈련해야...',
      },
    ],
  },
  {
    id: 'interviewee_1',
    role: 'interviewer',
    user: mockUsers[1],
    accepted: true,
    time: '1주 전',
    comments: [
      {
        me: true,
        value: 'Gil Dong 님은 thought process를 잘 설명하시는 것...',
      },
      {
        me: false,
        value: '감사합니다. 엔젤핵님 덕분에 인터뷰 실력이 향상되었...',
      },
    ],
  },
  {
    id: 'interviewee_2',
    role: 'interviewer',
    user: mockUsers[2],
    accepted: false,
    time: '1주 전',
    comments: [
      {
        me: true,
        value: '잘 모르겠으면 당황하지 말고 질문을 해주시면 좋을 것...',
      },
      {
        me: false,
        value: '피드백 감사합니다. 제가 부족한 부분이 무엇인지 알게...',
      },
    ],
  },
  {
    id: 'interviewee_3',
    role: 'interviewer',
    user: mockUsers[3],
    accepted: true,
    time: '2주 전',
    comments: [
      {
        me: true,
        value: '놓칠 수 있는 예외 상황을 잘 처리하셨네요 ...',
      },
      {
        me: false,
        value: '다음에도 예외 케이스를 잘 생각할 수 있도록 훈련해야...',
      },
    ],
  },
];
