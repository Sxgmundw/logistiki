function calculateStatement() {
    // Retrieve values from input fields
    const machinery = parseFloat(document.getElementById('machinery').value);
    const furniture = parseFloat(document.getElementById('furniture').value);
    const inventory = parseFloat(document.getElementById('inventory').value);
    const tradeReceivables = parseFloat(document.getElementById('tradeReceivables').value);
    const cash = parseFloat(document.getElementById('cash').value);
    const bankOverdraft = parseFloat(document.getElementById('bankOverdraft').value);
    const tradePayables = parseFloat(document.getElementById('tradePayables').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const salaries = parseFloat(document.getElementById('salaries').value);
    const commissionIncome = parseFloat(document.getElementById('commissionIncome').value);

    // Perform calculations (customize based on your requirements)
    const nonCurrentAssetsTotal = machinery + furniture;
    const currentAssetsTotal = inventory + tradeReceivables + cash;
    const liabilitiesTotal = bankOverdraft + tradePayables;
    const expensesTotal = rent + salaries;
    const otherIncomeTotal = commissionIncome;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Non-Current Assets: ${nonCurrentAssetsTotal}</p>
                           <p>Current Assets: ${currentAssetsTotal}</p>
                           <p>Liabilities: ${liabilitiesTotal}</p>
                           <p>Expenses: ${expensesTotal}</p>
                           <p>Other Income: ${otherIncomeTotal}</p>`;
    // Add more sections and details as needed
}
