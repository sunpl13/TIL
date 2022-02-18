# 1. Git과 Github는 무엇인가?

### `Git` : 버전을 관리할 수 있도록 도와주는 도구(형상 관리 도구)

#### - 작업하고 있는 파일을 원하는 순간으로 다시 돌아갈 수 있게 만들어주는 도구

<br/>

## 형상관리 도구란?

**VCS(Version Control System)** : 버전 관리 시스템(형상 관리 도구)

- **노트 텍스트 파일**을 버전 관리 가능
- 디자이너라면 이미지와 같은 **그래픽 파일 및 레이아웃 파일**도 관리 가능

<br/>

### 버전관리 시스템이 없었을 때?

#### &nbsp;&nbsp;&nbsp;=> 일일이 수동으로 버전을 폴더로 만들어서 관리

<br/>

이를 개선하기 위해 `CVS`, `SUBVERSION`, `PERFORCE` 같은 시스템이 나옴(CVC)<br/>

#### CVC(Centralized Version Control)?

서버에 히스토리를 관리해서 각각의 개발자들이 원하는 내용을 서버에 업데이트해서 즉각적으로 동기화 시키는 방안<br/>
**<span style="color:red">단점</span>** : 서버가 다운 됬을 시 업무를 못하고, 인터넷이 없을 때 일을 하지 못함

<br/>
<br/>

이를 개선하기 위해 `DVC(Distributed Version Control)`이 나옴

- ex) Git, mercurial, darcs<br/>

#### DVC(Distributed Version Control)?

서버에만 히스토리가 있는 것이 아닌 모든 개발자들이 동일한 히스토리 정보를 보유하고 있는 것을 말한다.

<br/>

## 깃을 배워야 하는 이유?

- 전 세계에서 가장 많이 사용되어 지고 있음
- 무료
- 오픈소스
- 동작이 매우 빠름
- 오프라인에서 이용 가능
- 실수에 대한 회복이 쉬움
- 브랜칭을 해서 기능별로 branch를 통해 효율적으로 개발 가능


<br/>
<br/>

## interactive rebase :
    - 대화형으로 git commit 히스토리를 수정할 수 있게 해줌(단, 수정할 커밋의 하나 전부터 지정해야 한다.)