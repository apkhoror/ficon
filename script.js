const hasilFee = document.getElementById("hasilFee");
const inputNominal = document.getElementById("nominal");

inputNominal.addEventListener("input", function () {
  const raw = inputNominal.value.replace(/[^\d]/g, "");

  if (raw === "") {
    inputNominal.value = "";
    hasilFee.innerText = "Rp 0";
    return;
  }
  const nilai = parseInt(raw);

  inputNominal.value = `Rp ${nilai.toLocaleString("id-ID")}`;

  const fee = hitungFee(nilai);
  hasilFee.innerText = `Rp ${fee.toLocaleString("id-ID")}`;
});

function setNominal(nominal) {
  const input = document.getElementById("nominal");
  input.value = `Rp ${nominal.toLocaleString("id-ID")}`;

  const fee = hitungFee(nominal);
  hasilFee.innerText = `Rp ${fee.toLocaleString("id-ID")}`;
}

function hitungFee(nominal) {
  if (nominal < 10000) return 0;
  else if (nominal < 20000) return 3000;
  else if (nominal < 500000) return 5000;
  else if (nominal < 1000000) return 7500;
  else if (nominal < 1500000) return 10000;
  else if (nominal < 2000000) return 12500;
  else {
    const tambahan = Math.ceil((nominal + 1 - 2000000) / 500000) * 2500;
    return 12500 + tambahan;
  }
}

function reset() {
  inputNominal.value = "";
  hasilFee.innerText = "Rp 0";
}

function handleKey(event) {
  if (event.key === "Enter") {
    document.activeElement.blur();
  }
}
