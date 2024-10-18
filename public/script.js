async function TU_REST_API() {
    // Collect form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; // Correct ID for password field
    
    const data = {
        UserName: username,
        PassWord: password
    };
    
    try {
        const applicationKey = "TUb1c6719f7d25afa7c256995905ad8a3a4a9e3376329c741a96348669d1b2daa1f46cd1b6d20b04aea5602a451727b322";
        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': applicationKey
            },
            body: JSON.stringify(data)
        });
    
        // Check response status
        if (response.ok) {
            const result = await response.json(); // Ensure response is in JSON format
            console.log('Login Successful:', result);
            alert('Login success');
        } else {
            const errorResult = await response.json(); // Also ensure error response is in JSON format
            console.log('Login failed:', errorResult);
            alert('Login failed: ' + (errorResult.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in. Please check your connection or try again.');
    }
}
    
  
  