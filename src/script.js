document.getElementById('add-client').addEventListener('click', function() {
    const clientName = document.getElementById('client-name').value;
    if (clientName) {
        const li = document.createElement('li');
        li.textContent = clientName;
        document.getElementById('clients').appendChild(li);
        document.getElementById('client-name').value = '';
    }
});