function formatCurrency(amount) {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(amount);
}

function calculateTotal(section) {
    // Get the values from the input fields
    const baseCompensation = parseFloat(document.getElementById(`earnings-tax-${section}-base`).value);
    const hours = parseFloat(document.getElementById(`earnings-tax-${section}-hrs`).value);

    // Calculate the total
    let total = baseCompensation;

    if (!isNaN(hours)) {
        total *= hours;
    }

    // Display the total with currency formatting
    const totalElement = document.getElementById(`earnings-tax-${section}-total`);
    totalElement.textContent = formatCurrency(total);
}

function calculateTotal2(section){
    const baseCompensation = parseFloat(document.getElementById(`earnings-tax-${section}-base`).value);

    // Calculate the total
    let total = baseCompensation;

    const totalElement = document.getElementById(`earnings-tax-${section}-total`);
    totalElement.textContent = formatCurrency(total);
}

function calculateSalary() {
    const salaryClass = document.getElementById("salaryClass").value;
    const employeeClass = document.getElementById("employeeClass").value;
    const daysPresent = parseFloat(document.getElementById("daysPresent").value);
    
    let dailyRate = 0;
    if (salaryClass === "rate_ncr") {
        dailyRate = 610.00;
    } else if (salaryClass === "rate_r4a") {
        dailyRate = 510.00;
    }

    let additionalAmount = 0;
    if (employeeClass === "class_adminemployee") {
        additionalAmount = 200.00;
    } else if (employeeClass === "class_regularemployee") {
        additionalAmount = 300.00;
    }

    const computedDailyWage = dailyRate + additionalAmount;
    const basicSalaryTotal = computedDailyWage * daysPresent;

    document.getElementById("salarybasedailycomputed").textContent = `₱ ${computedDailyWage.toFixed(2)}`;
    document.getElementById("earnings-tax-bpay-total").textContent = `₱ ${basicSalaryTotal.toFixed(2)}`;
}

// Add event listeners to trigger the calculation whenever inputs change
document.getElementById('earnings-tax-bpay-base').addEventListener('input', function() {
    calculateTotal2('bpay');
});

document.getElementById('earnings-tax-regnd-base').addEventListener('input', function() {
    calculateTotal('regnd');
});
document.getElementById('earnings-tax-regnd-hrs').addEventListener('input', function() {
    calculateTotal('regnd');
});

document.getElementById('earnings-tax-regot-base').addEventListener('input', function() {
    calculateTotal('regot');
});
document.getElementById('earnings-tax-regot-hrs').addEventListener('input', function() {
    calculateTotal('regot');
});

document.getElementById('earnings-tax-rotnd-base').addEventListener('input', function() {
    calculateTotal('rotnd');
});
document.getElementById('earnings-tax-rotnd-hrs').addEventListener('input', function() {
    calculateTotal('rotnd');
});

document.getElementById('earnings-tax-shnd-base').addEventListener('input', function() {
    calculateTotal('shnd');
});
document.getElementById('earnings-tax-shnd-hrs').addEventListener('input', function() {
    calculateTotal('shnd');
});

document.getElementById('earnings-tax-haz-base').addEventListener('input', function() {
    calculateTotal2('haz');
});
