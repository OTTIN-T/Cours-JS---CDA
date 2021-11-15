/*  TP - table */

const table = {
  tableCurrent: {},
  myTable: {},
  tables: [],
  init: function (tableName, nbCol, nbRow) {
    const tableNameHTML = document.getElementById("table-name");
    const target = document.getElementById("target");

    // On récupère une référence sur l'objet table de la page html.
    table.tableCurrent = {
      name: tableName,
      id: 1,
      cells: {},
      nbCol: nbCol,
      nbRow: nbRow,
    };

    table.tables = JSON.parse(localStorage.getItem("tables"));
    if (table.tables === null) {
      table.tables = [];
    }

    const dropDown = document.getElementById("offcanvasNavbarDropdown");
    dropDown.onclick = function () {
      const targetTable = document.getElementById("target-tables");
      targetTable.innerHTML = "";

      table.tables.forEach((item) => {
        let li = document.createElement("li");
        li.setAttribute("class", "dropdown-item");
        li.innerHTML = item;
        li.onclick = function () {
          table.loadTable(item);
          tableNameHTML.innerHTML = item;

          localStorage.setItem("lastTable", item);
        };

        targetTable.appendChild(li);
      });
    };

    table.myTable = document.createElement("table");
    table.myTable.setAttribute("class", "table table-bordered");

    target.appendChild(table.myTable);

    let header = document.createElement("th");
    let head = table.myTable.insertRow();
    head.appendChild(header);

    for (let col = 0; col < nbCol; col++) {
      let header = document.createElement("th");

      header.setAttribute("class", "table-dark");
      header.innerHTML = String.fromCharCode(65 + col);
      head.appendChild(header);
    }

    for (ligne = 0; ligne < nbRow; ligne++) {
      let row = table.myTable.insertRow();
      let header = document.createElement("th");

      header.setAttribute("class", "table-light");
      header.innerHTML = ligne + 1;

      row.appendChild(header);

      for (col = 0; col < nbCol; col++) {
        let cell = row.insertCell();
        let id = String.fromCharCode(65 + col) + (ligne + 1);

        Object.assign(cell, {
          draggable: true,
          ondragstart: table.dragstart_handler,
          ondrop: table.drop_handler,
          ondragover: table.dragover_handler,
        });

        cell.innerHTML = "";
        cell.id = id;
        cell.value = "";
        cell.onclick = table.clickOnCell;
      }
    }

    let lastTable = localStorage.getItem("lastTable");
    if (lastTable === null) {
      tableNameHTML.innerHTML = tableName;
    } else {
      tableNameHTML.innerHTML = lastTable;
      table.loadTable(lastTable);
    }
  },

  dragstart_handler: function (ev) {
    ev.dataTransfer.setData("idSource", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.value);
    ev.dataTransfer.dropEffect = "copy";
  },

  dragover_handler: function (ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  },

  drop_handler: function (ev) {
    ev.preventDefault();
    ev.target.innerHTML = ev.dataTransfer.getData("text/plain");
    ev.target.value = ev.dataTransfer.getData("text/plain");

    table.persistCell(ev.target);
  },

  newTable: function () {
    const target = document.getElementById("target");
    target.innerHTML = "";

    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("button");

    Object.assign(input, {
      type: "text",
      id: "nom",
      placeholder: "Nom de votre tableau",
    });

    Object.assign(label, {
      for: "name",
    });

    input.setAttribute("value", "");
    label.innerHTML = "Nom du tableau: ";

    button.innerHTML = "Envoyer";
    button.onclick = function () {
      table.tableCurrent = {};
      table.tableCurrent = {
        name: input.value,
        id: 0,
        cells: {},
      };

      table.tables.push(table.tableCurrent.name);

      localStorage.setItem("tables", JSON.stringify(table.tables));

      target.innerHTML = "";

      table.init(table.tableCurrent.name, 5, 8);
      table.persistTable();
    };

    target.appendChild(label);
    target.appendChild(input);
    target.appendChild(button);
  },

  clickOnCell: function () {
    this.onclick = "";
    let value = this.value;
    let input = document.createElement("input");

    Object.assign(input, {
      type: "text",
      id: `input-${this.id}`,
    });

    input.setAttribute("cellId", this.id);
    input.setAttribute("value", value);

    this.innerHTML = "";
    this.appendChild(input);

    input.focus();
    input.onblur = table.closeInput;
  },

  closeInput: function () {
    let input = document.getElementById(this.id);
    let cellID = input.getAttribute("cellId");
    let cell = document.getElementById(cellID);

    cell.value = input.value;
    cell.removeChild(input);
    cell.innerHTML = cell.value;
    cell.onclick = table.clickOnCell;

    table.persistCell(cell);
  },

  persistCell: function (obj) {
    let cell = {
      id: obj.id,
      value: obj.value,
    };

    if (obj.value === "") {
      delete table.tableCurrent.cells[obj.id];
    }

    table.tableCurrent.cells[obj.id] = cell;
  },

  persistTable: function () {
    localStorage.setItem(
      table.tableCurrent.name,
      JSON.stringify(table.tableCurrent)
    );

    let exists = false;

    table.tables.forEach((item) => {
      if (item === table.tableCurrent.name) {
        exists = true;
      }
    });

    if (!exists) {
      table.tables.push(table.tableCurrent.name);
      localStorage.setItem("tables", JSON.stringify(table.tables));
    }

    localStorage.setItem("lastTable", table.tableCurrent.name);
  },

  loadTable: function (name) {
    // const target = document.getElementById("target");
    // target.innerHTML = "";
    table.clearTable();
    // name = table.tableCurrent.name;
    table.tableCurrent = JSON.parse(localStorage.getItem(name));

    for (const key in table.tableCurrent.cells) {
      let cell = document.getElementById(key);

      cell.innerHTML = table.tableCurrent.cells[key].value;
      cell.value = table.tableCurrent.cells[key].value;
    }
  },

  clearTable: function () {
    let nbCol = table.tableCurrent.nbCol;
    let nbRow = table.tableCurrent.nbRow;

    for (let ligne = 0; ligne < nbRow; ligne++) {
      for (let col = 0; col < nbCol; col++) {
        let id = String.fromCharCode(65 + col) + (ligne + 1);
        let cell = document.getElementById(id);
        cell.innerHTML = "";
      }
    }
  },
};

table.init("table1", 5, 8);
