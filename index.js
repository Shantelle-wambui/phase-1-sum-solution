function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sum-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numbersInput = document.getElementById("numbers").value;
    const target = parseInt(document.getElementById("target").value, 10);
    const numberArray = numbersInput
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    if (numberArray.length < 2) {
      result.textContent = "Please enter at least two valid numbers.";
      result.style.color = "red";
      return;
    }

    const isMatch = hasTargetSum(numberArray, target);
    result.textContent = isMatch
      ? "✅ Found a matching pair!"
      : "❌ No matching pair found.";
    result.style.color = isMatch ? "green" : "red";
  });
});