class RacingProgressView {
  constructor() {
    this.target = document.querySelector("#racing-progress-view");
  }

  render(data) {
    this.target.innerHTML = this.templateHTML(data);
  }

  templateHTML(thList) {
    return `
      <table>
      <thead>
        ${thList.map((value) => `<th>${value}</th>`).join("")}
      </thead>
      <tbody>
      </tbody>
      </table>
    `;
  }
}

export default RacingProgressView;
