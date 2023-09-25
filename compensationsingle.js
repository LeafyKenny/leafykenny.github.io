const salaryInput = document.getElementById('earnings-tax-bpay-base');
const basicPayTotalElement = document.getElementById('earnings-tax-bpay-total');

salaryInput.addEventListener('input', function() {
    const inputValue = parseFloat(salaryInput.value) || 0; // Convert the input value to a number or 0 if not a valid number
    const formattedValue = formatCurrency(inputValue); // Assuming the formatCurrency function is defined

    basicPayTotalElement.textContent = formattedValue;
});

// Define the formatCurrency function (you should have this function defined somewhere)
function formatCurrency(amount) {
    // Implement your currency formatting logic here
    // For example: return '₱ ' + amount.toFixed(2);
    return '₱ ' + amount.toFixed(2);
}
