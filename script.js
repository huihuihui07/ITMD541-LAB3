// Select the necessary elements
const billTotalInput = document.getElementById("bill-total");
const tipPercentageInput = document.getElementById("tip-percentage");
const tipAmountInput = document.getElementById("tip-amount");
const totalBillInput = document.getElementById("total-bill");
const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");

// Function to calculate tip and total bill
function calculateTipAndTotalBill() {
  // Get bill total and tip percentage values
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);

  // Calculate tip amount and total bill
  const tipAmount = (billTotal * tipPercentage) / 100;
  const totalBill = billTotal + tipAmount;

  // Display tip amount and total bill
  tipAmountInput.value = tipAmount.toFixed(2);
  totalBillInput.value = totalBill.toFixed(2);
}

// Event listener to calculate tip and total bill when the bill total or tip percentage changes
billTotalInput.addEventListener("input", calculateTipAndTotalBill);
tipPercentageInput.addEventListener("input", calculateTipAndTotalBill);

// Event listener to update slider value and recalculate tip and total bill when the slider value changes
slider.addEventListener("input", function () {
  sliderValue.textContent = slider.value;
  tipPercentageInput.value = slider.value;
  calculateTipAndTotalBill();
});

// Initial calculation
calculateTipAndTotalBill();
