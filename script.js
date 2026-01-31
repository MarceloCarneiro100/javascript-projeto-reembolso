// Seleciona os elementos do formulário.
const amount = document.getElementById("amount")

// Manipulando o input amount para receber somente números.
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")
  amount.value = value
}
