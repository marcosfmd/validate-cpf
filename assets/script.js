let validation = document.getElementById("validation")

validation.addEventListener("click", () => {

  document.getElementById("success").style.display = "none"
  document.getElementById("error").style.display = "none"

 const valueCpf = document.getElementById("value").value
    // alert("numero do seu cpf e "  + valueCpf + " validor :)")

   let resultValidate = validateCpf(valueCpf)

   if (resultValidate) {
     document.getElementById("success").style.display = "block"
   } else {
     document.getElementById("error").style.display = "block"
   }
})

const validateCpf = function (valueCpf) {
  if(valueCpf.length != 11) {
    return false
  } else {

    let number = valueCpf.substring(0, 9)
    let digits = valueCpf.substring(9)

    // validate the first digit
    let sum = 0

      for (let i = 10; i > 1; i--) {
        sum += number.charAt(10 - i) * i
      }
      
      let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)

      if(result != digits.charAt(0)) {
        return false;
      }

      
  // Validate of second digit
    sum = 0
      number = valueCpf.substring(0, 10)

      for(let k = 11; k > 1; k--) {
        sum += number.charAt(11 - k) * k
      }

      result = sum % 11 < 2 ? 0 : 11 - (sum % 11)

      if(result != digits.charAt(1)) {
        return false
      }

    return true
  }
} 


