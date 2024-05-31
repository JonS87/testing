export function luhnCheck(input) {
  const number = input.toString();
  const digits = number.replace(/\D/g, "").split("").map(Number);
  let sum = 0;
  let isSecond = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}

export function paymentSystem(input) {
  const number = input.toString();
  const digits = number.replace(/\D/g, "").split("").map(Number);
  let card;
  console.log(digits.slice(0, 1).join(""));
  if (digits.slice(0, 1).join("") === "4" & digits.length >= 13 & digits.length <= 19) {
    card = "Visa";
  } else if ((digits.slice(0, 2).join("") === "51" ||
  digits.slice(0, 2).join("") === "52" || digits.slice(0, 2).join("") === "53" || digits.slice(0, 2).join("") === "54" || digits.slice(0, 2).join("") === "55" ||
  (digits.slice(0, 6).join("") >= "222100" & digits.slice(0, 6).join("") <= "272099")) & digits.length === 16) {
    card = "Mastercard";
  } else if ((digits.slice(0, 2).join("") === "34" || digits.slice(0, 2).join("") === "37") & digits.length === 15) {
    card = "American Express";
  } else if (
    (digits.slice(0, 4).join("") === "6011" ||
    (digits.slice(0, 6).join("") >= "622126" & digits.slice(0, 6).join("") <= "622925") ||
    digits.slice(0, 3).join("") === "644" || digits.slice(0, 3).join("") === "645" || digits.slice(0, 3).join("") === "646" || digits.slice(0, 3).join("") === "647" ||
    digits.slice(0, 3).join("") === "648" || digits.slice(0, 3).join("") === "649" || digits.slice(0, 2).join("") === "65") & digits.length >= 16 & digits.length <= 19) {
    card = "Discover";
  } else if (digits.slice(0, 4).join("") >= "3528" & digits.slice(0, 4).join("") <= "3589" & digits.length >= 16 & digits.length <= 19) {
    card = "JCB";
  } else if (
    (((digits.slice(0, 3).join("") === "300" ||
    digits.slice(0, 3).join("") === "301" ||
    digits.slice(0, 3).join("") === "302" ||
    digits.slice(0, 3).join("") === "303" ||
    digits.slice(0, 3).join("") === "304" ||
    digits.slice(0, 3).join("") === "305" ||
    digits.slice(0, 2).join("") === "36") & digits.length === 14)) ||
    (digits.slice(0, 2).join("") === "54" & digits.length === 16)) {
      card = "Diners Club";
  } else if (digits.slice(0, 1).join("") === "2") {
    card = "Mir Pay";
  } else {
    card = "something else";
  }

  return card;
}
