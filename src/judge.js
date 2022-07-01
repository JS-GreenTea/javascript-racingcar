export default class judge {
  findWinner(carNameList, moveCountList) {
    let maxCount = Math.max(...moveCountList);
    this.winnerList = [];
    for (let i = 0; i < carNameList.length; i++) {
      if (maxCount === moveCountList[i]) this.winnerList.push(carNameList[i]);
    }
    this.showWinner(this.winnerList);
  }

  showWinner(winnerList) {
    document.getElementsByClassName(
      "result"
    )[0].innerText = `🏆 최종 우승자 : ${winnerList.join(", ")} 🏆`;
  }
}
