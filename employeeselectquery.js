// script.js

// Function to populate the dropdown
function populateDropdown() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'employee.json', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const dropdown = document.getElementById('employeeselect');
                const data = JSON.parse(xhr.responseText);

                // Clear existing options
                dropdown.innerHTML = '<option value="">Select an option</option>';

                // Iterate through the JSON data and add options to the dropdown
                data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.value;
                    option.textContent = item.label;
                    dropdown.appendChild(option);
                });
            } else {
                console.error('Error loading JSON data:', xhr.statusText);
            }
        }
    };

    xhr.send();
}

// Call the populateDropdown function when the page loads
window.onload = populateDropdown;
