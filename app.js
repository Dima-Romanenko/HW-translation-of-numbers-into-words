let hundreds = [
  "сто",
  "двісті",
  "триста",
  "чотириста",
  "п'ятсот",
  "шістсот",
  "сімсот",
  "вісімсот",
  "дев'ятсот",
];
let dozens = [
  "двадцять",
  "тридцять",
  "сорок",
  "п'ядесят",
  "шісдесят",
  "сімдесят",
  "вісімдесят",
  "дев'яносто",
];
let from10to19 = [
  "десять",
  "одинадцять",
  "дванадцять",
  "тринадцять",
  "чотирнадцять",
  "п'ятнадцять",
  "шістнадцять",
  "сімнадцять",
  "вісімнадцять",
  "дев'ятнадцять",
];
let units = [
  "нуль",
  "одна",
  "дві",
  "три",
  "чотири",
  "п'ять",
  "шість",
  "сім",
  "вісім",
  "дев'ять",
];

let value = prompt("enter your num");
let valueArray = value.split("");
let unitsValue, dozensValue, from10to19Value, hundredsValue;

if (
  value === "" ||
  value === null ||
  !isFinite(value) ||
  valueArray.length > 3
) {
  document.write(
    `
    <div>
      <span class="warning">
        Введіть коректні данні!
      </span>
    </div>
    `
  );
} else if (valueArray.length === 1) {
  unitsValue = value[0];
  document.write(
    `
     <div class="container">
        <span>
          ${units[unitsValue]} <small>грн.</small>
        </span
     div>
    `
  );
} else if (valueArray.length === 2 && value[0] == 1) {
  from10to19Value = value[1];
  document.write(
    `
    <div>
      <span>
        ${from10to19[from10to19Value]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (valueArray.length === 2 && value[0] > 1 && value[1] != 0) {
  dozensValue = value[0] - 2;
  unitsValue = value[1];

  document.write(
    `
    <div>
      <span>
        ${dozens[dozensValue]} ${units[unitsValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (valueArray.length === 2 && value[0] > 1 && value[1] == 0) {
  dozensValue = value[0] - 2;
  unitsValue = value[1];

  document.write(
    `
    <div>
      <span>
        ${dozens[dozensValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (valueArray.length === 3 && value[0] != 0 && value[1] == 1) {
  hundredsValue = value[0] - 1;
  from10to19Value = value[1];
  unitsValue = value[2];

  document.write(
    `
    <div>
      <span>
        ${hundreds[hundredsValue]} ${from10to19[unitsValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (
  valueArray.length === 3 &&
  value[2] != 0 &&
  value[0] != 0 &&
  value[1] != 0
) {
  hundredsValue = value[0] - 1;
  dozensValue = value[1] - 2;
  unitsValue = value[2];

  document.write(
    `
    <div>
      <span>
        ${hundreds[hundredsValue]} ${dozens[dozensValue]} ${units[unitsValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (
  valueArray.length === 3 &&
  value[2] == 0 &&
  value[0] != 0 &&
  value[1] != 0
) {
  hundredsValue = value[0] - 1;
  dozensValue = value[1] - 2;

  document.write(
    `
    <div>
      <span>
        ${hundreds[hundredsValue]} ${dozens[dozensValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (valueArray.length === 3 && value[2] == 0 && value[1] == 0) {
  hundredsValue = value[0] - 1;

  document.write(
    `
    <div>
      <span>
        ${hundreds[hundredsValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
} else if (valueArray.length === 3 && value[1] == 0) {
  hundredsValue = value[0] - 1;
  unitsValue = value[2];
  document.write(
    `
    <div>
      <span>
        ${hundreds[hundredsValue]} ${units[unitsValue]} <small>грн.</small>
      </span>
    </div>
    `
  );
}
