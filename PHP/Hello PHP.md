계속 프론트로만 공부를 했었고, 서버 쪽 지식도 필요하다고 생각되서 고민을 하던 중 회사에서 서버단을 PHP를 사용하기에 나도 이번 기회에 공부를 좀 해보려고 한다. 우리 회사는 Larabel을 사용하기에 PHP문법 부터 공부 후 천천히 Larabel 까지 공부해 보도록하겠다.
<br/>
<br/>

```php
<html>
<head>
    <title>PHP 테스트</title>
</head>
<body>
<?php
    $str = "Hello PHP!!!";
?>
PHP 명령어로 작성한 <?= $str ?><br/>
HTML 태그로 작성한 Hello PHP!!!
</body>
</html>
```

```php
//결과
PHP 명령어로 작성한 Hello PHP!!!
HTML 태그로 작성한 Hello PHP!!!
```

위 코드를 실행하고 소스 보기를 통해서 파일 소스를 확인해 보면 HTML태그로 구성된 웹페이지로 보이게 된다.<br/>
즉, 파일 안에 PHP로 작성된 코드는 PHP엔진 안에서 처리되어 실행 결과를 HTML 태그로 리턴해 준다는 것이 특징이다.
