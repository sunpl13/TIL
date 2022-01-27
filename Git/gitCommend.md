# Git Commend

- ### git status : 레포지토리의 상태를 보여주는 명령
   ![3 git_status](https://user-images.githubusercontent.com/68778883/150938502-6c77a1bf-49b3-4467-b58e-fd7c115d74f9.png)
   - 작업 위치, commit 상태, tracked,untracked 상태 등을 알 수 있다.
   - git status -s : git의 상태를 간략히 보는 명령
 - ### git add : 작업한 파일이 commit할 준비가 완료되어 Staging Area에 옮겨 놓는 명령
     - git add 파일이름 : 특정 파일을 staging area로 이동
     - git add *.확장자 : 특정 확장자 모두를 staging area로 이동
     - git add . : 모든 파일을 staging area로 이동 (.gitignore에 있는 파일은 제외)
     - git add * : 모든 파일을 stagin area로 이동 (.gitignore에 있는 파일 포함)
 - ### git diff : 파일의 어떤 내용이 변경되었는지 확인할 수 있다.
     - git diff --staged : staging area의 파일의 상태도 확인할 수 있다.
     - git diff [hash1] [hash2] : 두 커밋간의 상태를 비교한다.
 - ### git commit : Staging Area에 있는 변경 사항을 Git Repository로 옮겨주는 명령(버전 추가 명령)
     - git commit : 아무 옵션이 없을 시 타이틀과 디스크립션 작성 후 저장
     - git commit -m : 커밋 메세지와 함께 커밋
     - git commit -am : git add . + git commit -m과 동일
  <br/>
  <br/>
  
     - ### commit Tip
        - 커밋 단위는 작게 세분화해서 커밋
        - 커밋 메세지는 현재형으로
        - 의미 없는 커밋 메세지는 없도록(ex) commit1... commit2..)
        - commit message에 맞게 해당되는 내용만 커밋
