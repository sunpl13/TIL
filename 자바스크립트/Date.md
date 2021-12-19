**UTC** : Coordinated Universal Time - 국제 표준시, GMT로 불리기도 한다.
**KST** : UTC에 9시간을 더한 시간

# 1. Date 생성자 함수

Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수 값을 갖는다.
&nbsp; &nbsp; => 이 값은 1970년 1월 1일 00:00:00(UTC)를 기점으로 객체가 나타내는 시간까지의 **밀리초**를 나타낸다.

<br/>

## 1. new Date()

인수 없이 new 연산자와 함께 호출하면 `현재 날짜와 시간`을 가지는 Date 객체를 반환(내부적으로는 정수 값)

```javascript
new Date(); // -> Mon Jul 06 2020 01:03:18 GMT+0900 (대한민국 표준시)
```

<br/>

new 연산자 없이 호출 시 현재 날짜와 시간 정보만을 나타내는 `문자열`을 반환

```javascript
Date(); // -> "Mon Jul 06 2020 01:10:47 GMT+0900 (대한민국 표준시)"
```

<br/>

## 2. new Date(milliseconds)

Date 생성자 함수에 숫자 타입 밀리초를 인수로 전달 시, `UTC로 부터 인수로 전달된 밀리초 만큼 경과한` Date 객체를 반환

```javascript
// 한국 표준시 KST는 협정 세계시 UTC에 9시간을 더한 시간이다.
new Date(0); // -> Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)

/*
86400000ms는 1day를 의미한다.
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,600,000ms = 86,400,000ms
*/
new Date(86400000); // -> Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)
```

<br/>

## 3. new Date(dateString)

Date.parse 메서드에 의해 해석 가능한 형식의 문자열을 인수로 전달 시 지정된 날짜와 시간을 나타내는 Date 객체를 반환

```javascript
new Date("May 26, 2020 10:00:00");
// -> Tue May 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

new Date("2020/03/26/10:00:00");
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```

<br/>

## 4. new Date(year, month[, day, hour, minute, second, millisecond])

연, 월, 일, 시, 분, 초, 밀리초를 순서대로 인수로 전달시 지정된 날짜와 시간을 나타내는 Date 객체를 반환
&nbsp; &nbsp; => 연, 월은 필수, 뒤에 인자는 옵션

```javascript
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
new Date(2020, 2);
// -> Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0);
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)

// 다음처럼 표현하면 가독성이 훨씬 좋다.
new Date("2020/3/26/10:00:00:00");
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```

<br/>

# 2. Date 메서드

## 1. Date.now

UTC를 기준으로 현재 까지 경과한 밀리초를 숫자로 반환

```javascript
const now = Date.now(); // -> 1639928194284

new Date(now); // -> Mon Dec 20 2021 00:36:56 GMT+0900 (한국 표준시)
```

<br/>

## 2. Date.parse

UTC를 기준으로 인수로 전달된 지정시간까지의 밀리초를 숫자로 반환

```javascript
// UTC
Date.parse("Jan 2, 1970 00:00:00 UTC"); // -> 86400000

// KST
Date.parse("Jan 2, 1970 09:00:00"); // -> 86400000

// KST
Date.parse("1970/01/02/09:00:00"); // -> 86400000
```

<br/>

## 3. Date.UTC

UTC를 기준으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환

- 로컬 타임(KST)이 아닌 UTC로 인식

```javascript
Date.UTC(1970, 0, 2); // -> 86400000
Date.UTC("1970/1/2"); // -> NaN
```

<br/>

## 4. Date.prototype.getFullYear

Date 객체의 연도를 나타내는 정수 반환

```javascript
new Date("2021/12/20").getFullYear(); // -> 2021
```

<br/>

## 5. Date.prototype.setFullYear

Date 객체의 연도를 나타내는 정수를 설정, 옵션으로 월, 일도 설정

```javascript
const today = new Date();

// 년도 지정
today.setFullYear(2000);
today.getFullYear(); // -> 2000

// 년도/월/일 지정
today.setFullYear(1900, 0, 1);
today.getFullYear(); // -> 1900
```

<br/>

## 6. Date.prototype.getMonth

Date 객체의 월을 나타내는 정수를 반환 (0 ~ 11, 1월 = 0, 12월 = 12)

```javascript
new Date("2021/12/20").getMonth(); // -> 11
```

<br/>

## 7. Date.prototype.serMonth

Date 객체의 월을 나타내는 0 ~ 11의 정수를 설정

```javascript
const today = new Date();

// 월 지정
today.setMonth(0); // 1월
today.getMonth(); // -> 0

// 월/일 지정
today.setMonth(11, 1); // 12월 1일
today.getMonth(); // -> 11
```

<br/>

## 8. Date.prototype.getDate

Date 객체의 날짜(1 ~ 31)를 나타내는 정수를 반환

```javascript
new Date("2021/12/20").getDate(); // -> 20
```

<br/>

## 9. Date.prototype.setDate

Date 객체의 날짜를 나타내는 정수를 설정

```javascript
const today = new Date();

// 날짜 지정
today.setDate(1);
today.getDate(); // -> 1
```

<br/>

## 10. Date.prototype.getDay

Date 객체의 요일(0 ~ 6)을 나타내는 정수를 반환, (일 = 0, 토 = 6)

```javascript
new Date("2021/12/20").getDay(); // -> 1
```

<br/>

## 11. Date.prototype.getHours

Date 객체의 시간(0 ~ 23)을 나타내는 정수를 반환

```javascript
new Date("2021/12/20").getHours(); // -> 1
```

<br/>

## 12. Date.prototype.setHours

Date 객체의 시간을 나타내는 정수를 설정

```javascript
const today = new Date();

// 시간 지정
today.setHours(7);
today.getHours(); // -> 7
```

<br/>

## 13. Date.prototype.getMinutes

Date 객체의 분을 나타내는 정수를 반환

```javascript
new Date("2021/12/20/01:24").getMinutes(); // -> 24
```

<br/>

## 14. Date.prototype.setMinutes

Date 객체의 분을 나타내는 정수를 설정

```javascript
const today = new Date();

// 분 지정
today.setMinutes(50);
today.getMinutes(); // -> 50
```

<br/>

## 15. Date.prototype.getSeconds

Date 객체의 초를 나타내는 정수를 반환

```javascript
new Date("2021/12/20/01:24:20").getSeconds(); // -> 20
```

<br/>

## 16. Date.prototype.setSeconds

Date 객체의 초를 나타내는 정수를 설정

```javascript
const today = new Date();

// 초 지정
today.setSeconds(30);
today.getSeconds(); // -> 30
```

<br/>

## 17. Date.prototype.getMilliseconds

Date 객체의 밀리초(0 ~ 999)를 나타내는 정수를 반환

```javascript
new Date("2021/12/20/01:24:20:299").getMilliseconds(); // -> 299
```

<br/>

## 18. Date.prototype.setMilliseconds

Date 객체의 밀리초를 나타내는 정수를 설정

```javascript
const today = new Date();

// 밀리초 지정
today.setMilliseconds(123);
today.getMilliseconds(); // -> 123
```

<br/>

## 19. Date.prototype.getTime

UTC를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환

```javascript
new Date("2021/12/20/01:16").getTime(); // -> 1639930560000
```

<br/>

## 20. Date.prototype.setTime

UTC를 기점으로 Date 객체의 시간까지 경과된 밀리초를 설정

```javascript
const today = new Date();

// 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초 설정
today.setTime(86400000); // 86400000는 1day를 나타낸다.
console.log(today); // -> Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)
```

<br/>

## 21. Date.prototype.getTimeZoneOffset

UTC와 Date 객체에 지정된 _locale_ 시간과의 차이를 분 단위로 반환

```javascript
const today = new Date(); // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60; // -9
```

<br/>

## 22. Date.prototype.toDateString

사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환

```javascript
const today = new Date("2021/12/20/01:16");

today.toString(); // -> Mon Dec 20 2021 01:16:00 GMT+0900 (한국 표준시)
today.toDateString(); // -> Mon Dec 20 2021
```

<br/>

## 23. Date.prototype.toTimeString

사람이 읽을 수 있는 형식의 문자열로 Date 객체의 시간을 반환

```javascript
const today = new Date("2021/12/20/01:16");

today.toString(); // -> Mon Dec 20 2021 01:16:00 GMT+0900 (한국 표준시)
today.toTimeString(); // -> 01:16:00 GMT+0900 (한국 표준시)
```

<br/>

## 24. Date.prototype.ISOString

ISO8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환

```javascript
const today = new Date("2021/12/20/01:16");

today.toString(); // -> Mon Dec 20 2021 01:16:00 GMT+0900 (한국 표준시)
today.toISOString(); // -> 2021-12-20T16:16:00.000Z

today.toISOString().slice(0, 10); // -> 2021-12-20
today.toISOString().slice(0, 10).replace(/-/g, ""); // -> 20211220
```

<br/>

## 25. Date.prototype.toLocaleString

인수로 전달한 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환

```javascript
const today = new Date("2021/12/20/01:16");

today.toString(); // -> Mon Dec 20 2021 01:16:00 GMT+0900 (한국 표준시)
today.toLocaleString(); // -> 2021. 12. 20. 오전 01:16:00
today.toLocaleString("ko-KR"); // -> 2021. 12. 20. 오전 01:16:00
today.toLocaleString("en-US"); // -> 12/20/2021, 01:16:00 AM
today.toLocaleString("ja-JP"); // -> 2021/12/20 01:16:00
```

<br/>

## 26. Date.prototype.toLocaleTimeString

인수로 전달한 *locale*을 기준으로 Date 객체의 시간을 표현한 문자열을 반환

```javascript
const today = new Date("2021/12/20/01:16");

today.toString(); // -> Mon Dec 20 2021 01:16:00 GMT+0900 (한국 표준시)
today.toLocaleTimeString(); // -> 오전 1:16:00
today.toLocaleTimeString("ko-KR"); // -> 오전 1:16:00
today.toLocaleTimeString("en-US"); // -> 1:16:00 AM
today.toLocaleTimeString("ja-JP"); // -> 1:16:00
```
