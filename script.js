function openDialog() {
    const dialog = document.getElementById('dialog');
    dialog.showModal();

}

function closeDialog() {
    const dialog = document.getElementById('dialog');
    dialog.close();

}

function resetConfirm() {    
    event.preventDefault();
    const resetdialog = document.getElementById('resetdialog');
    resetdialog.showModal();

}

function resetConfirmClose() {  
    event.preventDefault();  
    const resetdialog = document.getElementById('resetdialog');
    resetdialog.close();

}

function resetFields() {
    const resetdialog = document.getElementById('resetdialog');
    document.getElementById("payslipForm").reset();
    alert("Fields have been reset.");
    resetdialog.close();

}

function openPreviewWindow() {
    // Assuming 'yourfile.html' is the name of your HTML file.
    var url = 'print/payslip.html';
    
    // Define the size and other properties of the pop-up window.
    var width = 1600;
    var height = 900;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    
    // Open the pop-up window.
    var newWindow = window.open(url, 'Preview', features);
    
    // Focus on the new window (optional).
    if (newWindow) {
      newWindow.focus();
    }
  }

  function populateDropdown() {
    // Select the <select> element
    const selectElement = document.getElementById('employeeselection');

    // Fetch the JSON data
    fetch('employee.json')
        .then(response => response.json())
        .then(data => {
            // Loop through the JSON data and create an option for each employee
            data.forEach(employee => {
                const option = document.createElement('option');
                option.textContent = employee.name;
                selectElement.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Call the populateDropdown function to fill the dropdown
populateDropdown();
