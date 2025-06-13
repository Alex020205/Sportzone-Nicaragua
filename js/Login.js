const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
// Redirect to login.html when a specific button is clicked
const loginRedirectButton = document.getElementById('loginRedirect');

loginRedirectButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});
}
);
