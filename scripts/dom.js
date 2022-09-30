/*
// function 키워드로 함수 생성
function show() {
  console.log("show");
}
*/

// 화살표 함수형식으로 생성(함수 내의 명령이 한 줄이면 {} 중괄호 생략 가능)
//                         ++return문 아니면 return도 생략가능
//const show = () => console.log("show 화살표함수");

// 화살표 함수형식으로 생성(함수는 const로 만들기)
//function -> const
//const show = () => {
// console.log("show 화살표함수");

// function 키워드로 함수 만들기
// function show() {
//  console.log("안녕하세요.")
//}

// es6+ 부터 함수는 화살표 함수로 만들기
const show1 = () => {
  //1. 태그만들기
  let tag1 = "";
  /*
  for(let i=1; i <= 6; i++) { 
    //tag = tag + '<div class="divMsg">' + i + '</div>' ;
    //템플릿문자열
    tag = tag + `<div class="divMsg"><img src="./images/${i}.png" id="msdImgId${i}"></div>`
  }
  */

  let i = Math.floor(Math.random() * 6) + 1;
  tag1 = `<div class="divMsg"><img src="./image/${i}.png" id="msgImg"></div>`
  console.log(tag1);

  //2.DOM에서 태그를 넣을 요소 선택
  const dice = document.querySelector('#msg');


  //3.선택된 요소의 HTML 변경
  dice.innerHTML = tag1;

  //4.동적으로 생성된 HTML요소도 스타일 변경 가능
  let msgImg = document.querySelector('#msgImg')
  msgImg.style.maxWidth = "100px";
  msgImg.style.maxheight = "100px";

  //폼 숨기기
  const formSection = document.querySelector('#formSection');
  formSection.style.display = "none";

}

const show2 = () => {

  let tag2

  const confirm = document.querySelector('.bt2');
  confirm.style.display = "none";

  document.getElementById(".bt2").addEventListener('click');

}

//DOM 요소가 생성된 후에 실행
document.addEventListener("DOMContentLoaded", () => {
  //폼 보이기
  const formSection = document.querySelector('#formSection');
  formSection.style.display = "block";
});