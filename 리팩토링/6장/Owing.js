function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  //미해결 채무 계산
  for (const o of invoice.order) {
    outstanding += o.amount;
  }

  //마감일 기록
  const today = Clock.today;

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetail();
}

function printBanner() {
  console.log("****************");
  console.log("**** 고객채무 ****");
  console.log("****************");
}

function printDetail() {
  //세부사항 출력
  console.log(`고객명 : ${invoice.customer}`);
  console.log(`채무액 : ${outstanding}`);
  console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
}
