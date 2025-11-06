fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        return response.json();
    })
    .then(users => {
        console.log(users);
        displayUsers(users);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });

function displayUsers(users) {
    const container = document.getElementById('users-container');
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    `;
        container.appendChild(userElement);
    });
}

//Créer un nouvel utilisateur
const newUser = {
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe'
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser)
})
    .then(response => response.json())
    .then(data => {
        console.log('Utilisateur créé:', data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });


