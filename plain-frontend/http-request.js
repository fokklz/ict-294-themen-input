class TableBuilder {
  constructor(fields) {
    // Array of field names
    this.fields = fields;
    this.table = document.createElement("table");
    this.createHeader();
    document.getElementById("tableContainer").appendChild(this.table);
  }

  // Create the table header based on the fields
  createHeader() {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    this.fields.forEach((field) => {
      const th = document.createElement("th");
      th.textContent = field;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    this.table.appendChild(thead);
  }

  // Add a new row to the table
  addRow(data) {
    const tr = document.createElement("tr");
    this.fields.forEach((field) => {
      const td = document.createElement("td");
      // Use an empty string if the field is not present in the data
      td.textContent = data[field] || "";
      tr.appendChild(td);
    });
    this.table.appendChild(tr);
  }
}

const token = "ACCESS_TOKEN";
const table = new TableBuilder(["name", "email"]);

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/v1/users", true);

xhr.setRequestHeader("Authorization", `Bearer ${token}`);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  // anfrage abgeschlossen = 4
  if (xhr.readyState === 4) {
    // HTTP-Status-Code 200-299 = erfolgreich
    if (xhr.status >= 200 && xhr.status < 300) {
      // JSON-String in JavaScript-Objekt umwandeln
      var jsonResponse = JSON.parse(xhr.responseText);

      console.log(jsonResponse);

      if (jsonResponse.results && jsonResponse.results.length > 0) {
        jsonResponse.results.forEach((user) => {
          table.addRow(user);
        });
      }
    } else {
      // irgendwas ausserhalb des 200er bereichs
      console.log("Error:", xhr.status, xhr.statusText);
      document.body.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
  }
};

xhr.send();
