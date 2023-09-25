
document.addEventListener('DOMContentLoaded', function () {
    // Find the button element by its ID "generatePdf"
    const generateButton = document.getElementById('generatePdf');

    // Check if the button element exists
    if (generateButton) {
        // Add a click event listener to the button
        generateButton.addEventListener('click', generatePayslip);
    } else {
        console.error("Button with ID 'generatePdf' not found.");
    }

    // Function to generate the payslip
    function generatePayslip() {
        const employeeName = document.getElementById('employeeName').value;
        const salary = document.getElementById('salary').value;

        // Create a new jsPDF instance
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.text(20, 20, 'Payslip');
        pdf.text(20, 30, `Employee Name: ${employeeName}`);
        pdf.text(20, 40, `Salary: $${salary}`);

        // Save the PDF
        pdf.save('payslip.pdf');
    }
});