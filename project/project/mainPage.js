// 회원가입 로그인 마우스 올리면 회색으로 변경
function changeButton1(x){
    x.style.backgroundColor = "rgb(200, 200,200)";
}
function changeButton2(x){
    x.style.backgroundColor = "white";
}

// 마우스를 올리면 다른 곳이 회색으로 변경
const change = document.getElementsByClassName("header-Bar-Text");
function change1(x){
    x.style.backgroundColor = "rgb(200, 200,200)";
}
function change2(x){
    x.style.backgroundColor = "white";
}


// 베너 2번 생성
let $main2 = $(".no2");

let $main2Ings = $(".no2-img");

// 베너 넓이
let mainWidth = 1000;

// 슬라이드 이미지 인덱스 번호
let currentIdx = 0;

//총 슬라이드 이미지 수
let slideCnt = $main2Ings.length;

// 이미지의 개수 알아보기위한  출력장치
console.log(`slideCnt : ${slideCnt}`);

$(".next").on("click", moveNext);
function moveNext() {
    console.log(`슬라이드 다음 클릭`);
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $main2.css("left", -(currentIdx * mainWidth));
    $main2.css("transition", "0.5s ease");
    checkEnd();
}

function moveFirst() {
    currentIdx = 0;
    checkEnd();
    $main2.css("transition", "none");
    $main2.css("transition", "0.5s ease");
    $main2.css("left", 0);
}

$(".prev").on("click", function () {
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);

    $main2.css("left", -(currentIdx * mainWidth));
    $main2.css("transition", "0.5s ease");
    checkEnd();
});

checkEnd();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
    if (currentIdx <= 0) {
        $(".prev").css("display", "none");
    } else {
        $(".prev").css("display", "block");
    }

    if (currentIdx >= slideCnt - 1) {
        $(".next").css("display", "none");
    } else {
        $(".next").css("display", "block");
    }
}

setInterval(function () {
    if (currentIdx == slideCnt - 1) {
        // 맨처음으로 돌아갈 수 있도록 함수
        moveFirst();
    } else {
        moveNext();
    }
}, 3000);


// 메인 3번째
// 베너 전체
let $no3Button = $(".no3-button");

// 슬라이드 크기?
let $no3Hidden = $(".no3-hidden");

// 베너 넓이 
// let mainWidth = 1000;
// 슬라이드 이미지 인덱스 번호
// let currentIdx = 0;위에 있는 값과 같으니 따로 추가 x
// 총 슬라이드 이미지 수
let slideCnt3 = $no3Hidden.length;  
 
console.log(`sildeCnt3 : ${slideCnt3}`);

// main-point1-button <방향   main-point2-button > 방향

//오른쪽으로 이동
$(".main-point2-button").on("click", moveNext2);
function moveNext2(){
    console.log(`2번째 배너 다음 클릭`);
    currentIdx++;
    // console.log(`currentIdx : ${currentIdx}`);

    $no3Button.css("left", -(currentIdx*mainWidth));
    // $no3Button.css("transition", )
    checkEnd();
}
$(".main-point1-button").on("click", function(){
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;

    $no3Button.css("left", -(currentIdx * mainWidth));
    checkEnd();
});