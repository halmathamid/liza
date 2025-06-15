
  function loadCurrencyTable() {
    const tbody = document.getElementById("currencyBody");
    tbody.innerHTML = "";
    currencyData.forEach((data, index) => {
      const row = `
        <tr>
          <td>${data.country}</td>
          <td>${data.image}</td>
          <td>${data.currency}</td>
          <td  contenteditable="true">${data.buy}</td>
          <td  contenteditable="true">${data.sell}</td>
          <td class="actions">
            <button class="edit-btn" onclick="editRow(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteRow(${index})">Delete</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  function editRow(index) {
    alert("You can now edit the buying/selling rate directly in the table.");
  }
  
  function deleteRow(index) {
    currencyData.splice(index, 1);
    loadCurrencyTable();
  }
  
  loadCurrencyTable();

 function updateTime() {
  const timeDisplay = document.getElementById("timeDisplay");

  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  timeDisplay.textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);
