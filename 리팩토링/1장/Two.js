{
  /*
1202 TIL
수정사항은 조금씩 수정해서 피드백 주기를 짧게 가져가기 -> 중간에 실수하더라도 버그를 쉽게 찾을 수 있기 때문
변수 이름은 명확하게

지역변수 제거하기 => 추출작업이 쉬워짐 = 유효범위를 신경써야 할 대상이 줄어들기 때문
특정 값 갱신과 관련된 문장들 일때 그 근처에서 변수를 선언해야 변수 찾기도 수월하다.
리팩토링으로 인한 성능 문제는 일단 무시하고 진행해보자. 그 후에 성능을 개선해도 괜찮다!
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

function statement(invoice) {
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    //청구내역 출력
    result += `${playFor(perf).name}: ${usd(amontFor(perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;
}
//////////////////////////////////////

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  //희극 관객 5명마다 추가 포인트를 제공한다.
  if ("comedy" === playFor(aPerformance).type)
    result += Math.floor(aPerformance.audience / 5);

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function totalVolumeCredits() {
  let volumeCredits = 0;
  for (let perf of invoices.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }

  return volumeCredits;
}

function totalAmount() {
  let result = 0;
  for (let perf of invoices.performances) {
    result += amontFor(perf);
  }

  return result;
}

function amontFor(aPerformance) {
  //값이 바뀌지 않는 변수는 매개변수로 전달
  let result = 0; //변수를 초기화하는 코드

  switch (playFor(aPerformance).type) {
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
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }

  return result;
}

console.log(statement(invoices));
