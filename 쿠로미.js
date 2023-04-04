function createKuromi() {
  //쿠로미 생성
  const kuromiElement = document.createElement("div");

  kuromiElement.style.width = KU_WIDTH + "px";
  kuromiElement.style.height = KU_HEIGHT + "px";
  kuromiElement.style.background = 'url("쿠로미사진.png") no-repeat';
  kuromiElement.style.backgroundSize = "cover";

  kuromiElement.style.position = "absolute";
  kuromiElement.style.top = "0px";

  //쿠로미가 생성되는 위치 랜덤 지정
  let randomLeft = RandomPlace(0, 1536);
  kuromiElement.style.left = randomLeft + "px";

  bgElement.appendChild(kuromiElement);

  //쿠로미가 비처럼 내려오게 하는 함수
  setInterval(function () {
    let kuromiTopNumber = Number(kuromiElement.style.top.split("px")[0]) + 1;
    //쿠로미가 바닥에 닿았을 때 사라진다
    if (kuromiTopNumber > 730 - KU_HEIGHT) {
      kuromiElement.remove();
      return;
    }
    kuromiElement.style.top = kuromiTopNumber + "px";
  }, 10);
}

createKuromi();
//쿠로미가 2초에 한번 씩 떨어진다
setInterval(createKuromi, 1000);
//쿠로미가 떨어질 랜덤한 위치 지정할 난수 함수
function RandomPlace(min, max) {
  let randomNumber = Math.floor(Math.random() * (max + min + 1)) + min;

  return randomNumber;
}
