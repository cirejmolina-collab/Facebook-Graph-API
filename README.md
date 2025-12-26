
# Facebook Graph API Demo

This project demonstrates how to use the Facebook Graph API to fetch and display Facebook user profile data using a simple HTML/JavaScript frontend.

---

## Features

- Fetch user profile data using a Facebook Access Token
- Display profile information:
  - Profile Picture
  - Full Name
  - First Name
  - Last Name
  - User ID
  - Facebook Profile Link
- Clean and responsive UI
- Status messages for success or error

---

## Prerequisites

- Facebook account
- Facebook Access Token (see below)
- Modern web browser

---

## Setup Instructions

1. **Get a Facebook Access Token:**
	- Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
	- Select your app or use your personal account.
	- Generate a User Access Token with `public_profile` permission.
2. **Configure the App:**
	- Open `index.html` in your browser.
	- Paste the Access Token in the input field.
3. **Run the App:**
	- Click **Fetch Profile** to display the user data.
	- The profile picture, name, ID, and link will appear below the input field.

---

## Notes

- This demo only fetches basic profile fields: `id`, `name`, `first_name`, `last_name`, and `picture`.
- The Facebook profile link is constructed using the user ID for reliable access.
- Fetching email, friends, posts, or other sensitive data requires additional permissions and Facebook App Review.

---

**For educational/demo purposes only. Do not share your access token.**
Fetching email, friends, posts, or other sensitive data requires additional permissions and Facebook App Review.

Member: Joreval Orpilla
        Jerome Benaso
        Wilson Abalos
        Yousef Ravancho
