# CodIn ![Deploy](https://github.com/angelhack-2020-grey-cereal/cod-in/workflows/Deploy/badge.svg)

> #### Table of Contents
> - [Demo](#demo)
> - [Showcase](#showcase)
> - [MVP](#mvp)
> - [Tech Stack](#tech-stack)
> - [Meet the Crew](#meet-the-crew)

Peer-to-Peer Coding Interview Platform

## Demo
[![Run on Ainize](https://ainize.ai/static/images/run_on_ainize_button.svg)](https://codin-64json.endpoint.ainize.ai)

[Demo Video](https://youtu.be/MCcuj5_UE9Y)

## Showcase
<p align="center">
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/1-1.png" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/1-2.png" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/4-1.png" width="30%"></img>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/2-1.png" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/2-2.png" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/2-3.png" width="30%"></img>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/3-1.png" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/3-2.gif" width="30%"></img>
<img src="https://raw.githubusercontent.com/angelhack-2020-grey-cereal/cod-in/master/src/images/showcase/3-3.png" width="30%"></img>
</p>

## MVP
1. 사용자가 지원자로 모의 인터뷰에 참여하여 더 높은 티어의 사용자에게 피드백을 받을 수 있습니다.
2. 사용자가 면접자로 모의 인터뷰에 참여하여 다른 사용자에게 피드백을 주며 프로트제 효과 및 반면교사를 통한 인터뷰 실력 향상을 기대할 수 있습니다.
3. 사용자가 녹화된 인터뷰를 다시 재생해보며 인터뷰 습관을 개선할 수 있습니다.
4. 사용자가 리더보드와 샵 기능을 통한 게이미피케이션으로 지루할 수 있는 인터뷰 연습에 재미를 느낄 수 있습니다.
5. 기업이 높은 티어의 사용자들을 뉴스레터처럼 매달 추천받는 인재추천정기구독을 통해 검증된 인재풀에 접근할 수 있습니다.
6. 기업이 입사지원자의 코드인 프로필을 조회하여 코딩실력의 1차 검증을 할 수 있습니다.
7. 기업이 코드인에 채용 공고를 게재하여 타겟팅 광고를 할 수 있습니다.

## Tech Stack
- Development
    - [React](https://reactjs.org/)
        - Hooks의 useContext, useState, useCallback을 사용하여 앱 데이터를 체계적으로 관리합니다.
    - [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) 및 [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) Web API
        - 별도의 라이브러리 없이 Web API만을 이용하여 영상 및 음성을 렌더링하고 녹화하여 내부적으로 저장합니다. 
    - [Quill](https://quilljs.com/)
        - 인터뷰/리뷰 화면 좌측의 문제출제 에디터로 사용되었습니다.
        - CodIn의 테마에 맞게 새로운 테마를 제작하였습니다.
    - [Monaco](https://microsoft.github.io/monaco-editor/)
        - 인터뷰/리뷰 화면 우측의 IDE로 사용되었습니다.
        - CodIn의 테마에 맞게 스타일을 조정하였습니다.
    
- Deployment
    - [GitHub Actions](https://github.com/features/actions)
        - 메인 브랜치에 커밋이 푸쉬될때 마다 자동으로 Docker 이미지를 빌드하여 Docker Hub에 배포해주는 CD 파이프라인을 구현하였습니다.
    - [Ainize](https://ainize.ai/)
        - Docker Hub에 배포된 이미지를 웹에 호스팅해주는 서비스입니다.

## Meet the Crew

:) | Name (Alphabetical) | Primary Roles
--- | --- | ---
<img src=https://ca.slack-edge.com/T016CH03QA3-U017869R16V-477030032bc4-512 width="50"> | 김수정 | 기획 및 발표
<img src=https://ca.slack-edge.com/T016CH03QA3-U016GNQRR0F-c27fa5860659-512 width="50"> | 박진서 | 기획 및 개발
<img src=https://ca.slack-edge.com/T016CH03QA3-U016XDM5WCA-7208a91245f6-512 width="50"> | 이용재 | 개발 및 데모
<img src=https://ca.slack-edge.com/T016CH03QA3-U016PHWFT70-ed2827ac41e2-512 width="50"> | 임희라 | 디자인
