class ResultView {
  constructor() {
    this.target = document.querySelector("#result-view");
  }

  init() {
    this.target.innerHTML = "";
  }

  render(data) {
    this.target.innerHTML = this.templateHTML(data);
  }

  templateHTML(data) {
    return `
      <h6 id="result">🏆 최종 우승자: ${data.join(", ")} 🏆</h6>
      <button id="racing-restart-btn">다시 시작하기</button>
    `;
  }
}

export default ResultView;
