# Git의 작업환경

1. working directory
2. staging area
3. .git directory

위 세가지는 local에만 가지고 있다.

## Working Directory

`프로젝트의 파일들을 수정하고 작업하고 있는 공간`

![git life sycle](https://user-images.githubusercontent.com/68778883/150938117-a68c3e4a-e716-44d6-8390-0c9a1143846c.png)



- `untracked`와 `tracked`로 나뉘어짐
- **untracked** : 새로 만들어졌거나 기존에 존재하지 않던 파일들
- **tracked** : git이 이미 알고 참조하는 파일들
  - **unmodified** : 수정이 되지 않은 파일(staging area로 이동 불가)
  - **modified** : 수정이 된 파일(staging area로 이동 가능)

<br/>

## Staging Area

`히스토리에 저장할 준비가 되어있는 파일들을 모아놓는 공간`

- commit이라는 명령어를 통해서 git 버전 히스토리에 저장

<br/>

## Git Drectory or Git repository

`버전의 히스토리를 가지고 있는 공간`

- push 명령어를 통해서 히스토리를 github와 같은 서버에 저장
- pull 명령어로 서버에서 로컬로 다운로드

<br/>

## commit

- 각각의 commit에는 `스냅샷`된 정보들을 기반으로 해서 고유한 해시코드를 가지고 있고 이 해시코드를 통해 버전 정보를 참조할 수 있다.
- commit에는 `아이디`, `버전에 대한 메세지`, `작성자`, `날짜 및 시간`와 같은 정보도 함께 저장
