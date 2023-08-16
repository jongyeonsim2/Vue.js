
const data = [
  {
    id: 1,
    name: "비건 샐러드",
    image: "./img/2.avif",
  },
  {
    id: 2,
    name: "수제 햄버거",
    image: "./img/1.avif",
  },
];

export default {
  list(query) {
    //비동기 통신이 되도록 구현.
    return new Promise(
      res => {
        // 마치 서버와 통신하고 있는 것처럼, 2초 의 딜레이 시간을 줌.
        setTimeout(
          () => {
            res(data)
          }, 200
        );

      }
    )
  }
}