# Git Commend

- ### git status : 레포지토리의 상태를 보여주는 명령
   ![3 git_status](https://user-images.githubusercontent.com/68778883/150938502-6c77a1bf-49b3-4467-b58e-fd7c115d74f9.png)
   - 작업 위치, commit 상태, tracked,untracked 상태 등을 알 수 있다.
 - ### git add : 작업한 파일이 commit할 준비가 완료되어 Staging Area에 옮겨 놓는 명령
     - git add 파일이름 : 특정 파일을 staging area로 이동
     - git add *.확장자 : 특정 확장자 모두를 staging area로 이동
     - git add . : 모든 파일을 staging area로 이동 (.gitignore에 있는 파일은 제외)
     - git add * : 모든 파일을 stagin area로 이동 (.gitignore에 있는 파일 포함)