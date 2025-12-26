const fetchBtn = document.getElementById('fetchBtn');
const tokenInput = document.getElementById('token');
const statusP = document.getElementById('status');

const profilePic = document.getElementById('profilePic');
const fullNameP = document.getElementById('fullName');
const firstNameP = document.getElementById('firstName');
const lastNameP = document.getElementById('lastName');
const userIdP = document.getElementById('userId');
const profileLinkA = document.getElementById('profileLink');

fetchBtn.onclick = async () => {
  const token = tokenInput.value.trim();

  if (!token) {
    statusP.textContent = 'Please paste a Facebook access token.';
    statusP.style.color = 'red';
    return;
  }

  statusP.textContent = 'Fetching profile data...';
  statusP.style.color = '';

  try {
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,first_name,last_name,picture&access_token=${token}`
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Display profile picture
    profilePic.src = data.picture.data.url;
    profilePic.hidden = false;

    // Display user info
    fullNameP.textContent = `Full Name: ${data.name}`;
    firstNameP.textContent = `First Name: ${data.first_name}`;
    lastNameP.textContent = `Last Name: ${data.last_name}`;
    userIdP.textContent = `User ID: ${data.id}`;

    // Build profile link using ID
    profileLinkA.textContent = 'View Facebook Profile';
    profileLinkA.href = `https://www.facebook.com/${data.id}`;
    profileLinkA.hidden = false;

    statusP.textContent = 'Profile fetched successfully!';
    statusP.style.color = 'green';

  } catch (error) {
    statusP.textContent = 'Error: ' + error.message;
    statusP.style.color = 'red';
  }
};
