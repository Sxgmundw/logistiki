function calculateStatement() {
    // Retrieve values from input fields
    const asset = parseFloat(document.getElementById('asset').value);
    const liability = parseFloat(document.getElementById('liability').value);

    // Perform calculations
    const profitOrLoss = asset - liability;
    const financialPosition = asset - liability;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Profit or Loss: ${profitOrLoss}</p><p>Financial Position: ${financialPosition}</p>`;
}
