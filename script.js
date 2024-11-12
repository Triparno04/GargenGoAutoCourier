// Function to filter orders based on the search input
function filterPendingOrders() {
    const input = document.getElementById('search-pending').value.toLowerCase();
    const tableRows = document.querySelectorAll('#pending-orders-table tbody tr');
    
    tableRows.forEach(row => {
        const customerName = row.querySelector('td').textContent.toLowerCase();
        if (customerName.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Refresh function can be added here if necessary
function refreshPendingOrders() {
    console.log("Orders refreshed");
    // Placeholder for refreshing the table or data
}
