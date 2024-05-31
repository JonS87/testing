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

  if (digits.slice(0, 1) === 4 & digits.length >= 13 & digits.length <= 19) {
    card = "Visa";
  } else if ((digits.slice(0, 2) === 51 ||
  digits.slice(0, 2) === 52 || digits.slice(0, 2) === 53 || digits.slice(0, 2) === 54 || digits.slice(0, 2) === 55 ||
  (digits.slice(0, 6) >= 222100 & digits.slice(0, 6) <= 272099)) & digits.length === 16) {
    card = "Mastercard";
  } else if ((digits.slice(0, 2) === 34 || digits.slice(0, 2) === 37) & digits.length === 15) {
    card = "American Express";
  } else if (
    (digits.slice(0, 4) === 6011 ||
    (digits.slice(0, 6) >= 622126 & digits.slice(0, 6) <= 622925) ||
    digits.slice(0, 3) === 644 || digits.slice(0, 3) === 645 || digits.slice(0, 3) === 646 || digits.slice(0, 3) === 647 ||
    digits.slice(0, 3) === 648 || digits.slice(0, 3) === 649 || digits.slice(0, 2) === 65) & digits.length >= 16 & digits.length <= 19) {
    card = "Discover";
  } else if (digits.slice(0, 4) >= 3528 & digits.slice(0, 4) <= 3589 & digits.length >= 16 & digits.length <= 19) {
    card = "JCB";
  } else if (
    (((digits.slice(0, 3) === 300 ||
    digits.slice(0, 3) === 301 ||
    digits.slice(0, 3) === 302 ||
    digits.slice(0, 3) === 303 ||
    digits.slice(0, 3) === 304 ||
    digits.slice(0, 3) === 305 ||
    digits.slice(0, 2) === 36) & digits.length === 14)) ||
    (digits.slice(0, 2) === 54 & digits.length === 16)) {
      card = "Diners Club";
  } else if (digits.slice(0, 1) === 2) {
    card = "Mir Pay";
  } else {
    card = "something else";
  }

  return card;
}
