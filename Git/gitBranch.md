# Git Branch

## Branch가 필요한 이유

<br/>

## **과거**
- ###  과거 버전 관리 시스템은 Branch를 만들 때마다 프로젝트 전체를 복사해서 관리하는 경우가 많았음
    - 변경사항을 관리하는 경우가 힘들었다.
    - 브랜치가 많아지면 많아질수록 관리가 힘듦
    - 브랜치끼리 서로 변경하기 어려웠다.

<br/>

## **현재**
- ### Git에서 branch의 개념은 commit과 마찬가지로 포인터 형식(이전 commit을 가리키는 방식)으로 관리가 된다.
- ### 각각의 스냅샷은 이전에 변경되지 않은 파일들은 링크만 가리키고 있어서 Git에서 branch를 생성하고 전환하는 속도가 매우 빠음

<br/>
<br/>

## Branch의 개념
1. 따로 지정하지 않는 이상 master 브랜치 한 줄기에서 commit이 발생
2. 보통 master branch에는 코드가 검증이 되고 기능에 문제가 없는 `검증된` 코드들을 commit
3. 기능별로, 리팩토링 별로, 버그픽스 별로 branch를 만들어서 작업을 하게되면 병렬적으로 작업이 가능해서 `업무 효율성`이 증가

<br/>
<br/>

## Merge
- ### `서로 다른 두 버전을 합치는 과정` 


<br/>
<br/>

## Fast-Forword-Merge
![capture_stepup1_4_1](https://user-images.githubusercontent.com/68778883/152684011-22b34309-cd4a-4b8e-927b-412faca931a9.png)
<br/>
<br/>
위와 같이 master 브랜치에서 commit이 있다가 master 브랜치에서 뻗어나온 bugfix 브랜치에서 작업을 하고 commit이 생겼을 때, master 브랜치에서 **_이후에 변경사항이 발생하지 않으면_** master 브랜치를 bugfix의 commit이 생긴 위치로 이동시키는 병합 방법
<br/>
<br/>
![capture_stepup1_4_2](https://user-images.githubusercontent.com/68778883/152684034-9bba473a-e439-4d83-a9cb-7b9620dc49b2.png)

<br/>
<br/>

## 3-Way-merge
![images](https://user-images.githubusercontent.com/68778883/152755855-78f36077-002a-4df0-9065-92fb2eb5a3a9.png)
<br/>
<br/>
master 브랜치에서 작업을 하다가 새로운 브랜치를 분기시켜 작업을 하고 작업이 완료 되어 master 브랜치에 머지를 하려 할때 base에 새로운 commit이 생겼을 때, 이 commit들을 병합할 때, base와 각 브랜치 2개가 참조하는 commit을 기준으로 병합을 진행하는 merge 방법