// 변수할당

const rabbit = document.querySelector('.rabbit');
const carrot = document.querySelector('.carrot');

//도큐먼트에 mousemove 이벤트리스너를 등록 한 뒤에 콜백함수 등록
carrot.addEventListener('click', (event) => {
  rabbit.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
});
