//1130 TIL
//공연 요청이 들어오면 연극 장르와 관객 규모를 토대로 관객 비용 책정하는 프로그램
//추가로 포인트를 지급해서 다음번  의뢰시에 공연료 할인 가능

{
  /*
    수정할 사항 : HTML로 출력할 기능이 필요, 장르 및 공연로 정책이 달라질 때 마다 statemanet 함수를 수정해주어야함



    리팩토링의 첫단계 : 테스트 코드들 마련!
 */
}

const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As you Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoices = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ],
};

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    let thisAmount = amontFor(perf, play);

    //포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);
    //희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === play.type) volumeCredits = +Math.floor(perf.audience / 5);

    //청구내역 출력
    result += `${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

function amontFor(aPerformance, play) {
  //값이 바뀌지 않는 변수는 매개변수로 전달
  let result = 0; //변수를 초기화하는 코드

  switch (play.type) {
    case "tragedy": //비극
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy": //희극
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return result;
}

console.log(statement(invoices, plays));
