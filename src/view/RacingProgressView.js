class RacingProgressView {
  constructor() {
    this.target = document.querySelector("#racing-progress-view");
  }

  init() {
    this.target.innerHTML = "";
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

  addTableRow(row, colSize) {
    const tbody = this.target.querySelector("tbody");
    tbody.innerHTML += this.tableRowTemplate(row, colSize);
  }

  tableRowTemplate(row, colSize) {
    return `
    <tr data-row=${row}>
      ${Array.from(
        { length: colSize },
        (_, idx) => `<td data-col=${idx}></td>`
      ).join("")}
    </tr>
    `;
  }

  updateTd(row, col, target) {
    const tr = this.target.querySelector(`[data-row="${row}"]`);
    const td = tr.querySelector(`[data-col="${col}"]`);
    td.innerText = target;
  }
}

export default RacingProgressView;
