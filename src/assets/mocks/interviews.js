import mockUsers from './users';
import whiteboardLogs from './whiteboardLogs';
import ideLogs from './ideLogs';

const DAY = 86400 * 1e3;

const mockInterviewBase = {
  duration: 120000,
  interviewerVideoOffset: 0,
  interviewerVideoURL: require('../videos/interviewer.mp4'),
  intervieweeVideoURL: require('../videos/interviewee.mp4'),
  whiteboardLogs: whiteboardLogs[0],
  ideLogs: ideLogs[0],
  outputsLogs: [{ value: [], timestamp: 0 }],
};

export default [
  {
    id: 'interviewee_1',
    role: 'interviewee',
    ...mockInterviewBase,
    user: mockUsers[4],
    accepted: true,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: false,
        value: '용재 님은 thought process를 잘 설명 ...',
      },
      {
        me: true,
        value: '감사합니다. 길동님 덕분에 인터뷰 실력이 ...',
      },
    ],
  },
  {
    ...mockInterviewBase,
    id: 'interviewee_2',
    role: 'interviewee',
    user: mockUsers[5],
    accepted: false,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: false,
        value: '잘 모르겠으면 당황하지 말고 질문을 해주시면 ...',
      },
      {
        me: true,
        value: '피드백 감사합니다. 제가 부족한 부분이 무엇 ...',
      },
    ],
  },
  {
    ...mockInterviewBase,
    id: 'interviewee_3',
    role: 'interviewee',
    user: mockUsers[3],
    accepted: true,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: false,
        value: '놓칠 수 있는 예외 상황을 잘 처리하셨네요 ...',
      },
      {
        me: true,
        value: '다음에도 예외 케이스를 잘 생각할 수 있도록 ...',
      },
    ],
  },
  {
    ...mockInterviewBase,
    id: 'interviewee_1',
    role: 'interviewer',
    user: mockUsers[6],
    accepted: true,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: true,
        value: '꼼꼼하게 잘 구현하셨습니다. 자료구조에 ...',
      },
      {
        me: false,
        value: '감사합니다. 혹시 더 부족한 부분은 없을지 ...',
      },
    ],
  },
  {
    ...mockInterviewBase,
    id: 'interviewee_2',
    role: 'interviewer',
    user: mockUsers[2],
    accepted: false,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: true,
        value: 'Cereal 님 시도는 좋았습니다 하지만 이런 ...',
      },
      {
        me: false,
        value: '아 그 부분을 놓쳤네요 다음부터는 더 조심 ...',
      },
    ],
  },
  {
    ...mockInterviewBase,
    id: 'interviewee_3',
    role: 'interviewer',
    user: mockUsers[3],
    accepted: true,
    timestamp: Date.now() - 7 * DAY,
    feedbacks: [
      {
        me: true,
        value: '어떤 질문을 해야할지 잘 아시는 것 같아요 ...',
      },
      {
        me: false,
        value: '감사합니다. 기본기도 더 다져나가야 할 것 ...',
      },
    ],
  },
];
