let logCount = 1;
let account = 5000;
let cash = 1000;

function updateBalance() {
  account = parseFloat(document.getElementById("account").value);
  cash = parseFloat(document.getElementById("cash").value);
  addLog(`Current account balance: ${account}, Current cash balance: ${cash}`);
}

function addLog(text) {
  logCount++;
  const logBox = document.getElementById("logBox");
  logBox.value = `${logCount}. ${text}\n` + logBox.value;
}

function process() {
  const operation = document.getElementById("operation").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (operation === "Deposit") {
    if (cash >= amount) {
      cash -= amount;
      account += amount;
      addLog(`Current account balance: ${account}, Current cash balance: ${cash}`); ///Deposit fromt
    } else {
      addLog("Couldn't deposit entered balance. (Insufficient cash balance)");
    }
  } else if (operation === "Withdraw") {
    if (account >= amount) {
      account -= amount;
      cash += amount;
      addLog(`Current account balance: ${account}, Current cash balance: ${cash}`); ///Withdrew front
    } else {
      addLog("Couldn't withdraw entered balance. (Insufficient account balance)");
    }
  }

  document.getElementById("account").value = account;
  document.getElementById("cash").value = cash;
}
