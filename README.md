# Four Paws

Four Paws is a pet adoption platform. People can create an account, list pets for adoption, request to adopt, and run donation campaigns.

## Features

- Email/password and Google sign-in (Firebase)
- User and admin dashboards
- Pet listings by category
- Adoption requests
- Donation campaigns with Stripe

## Tech

- React and Vite
- Tailwind CSS and DaisyUI
- Firebase Authentication
- MongoDB API backend (your own server)
- Stripe for donations

## Setup

1. Copy `.env.example` to `.env` and add **your** Firebase, API, image upload, EmailJS, and Stripe keys.
2. Point `VITE_API_BASE_URL` at **your** backend (for local work, `http://localhost:5000`).
3. Install and run:

```bash
npm install
npm run dev
```

This project is independent of any third-party GitHub repository. Use your own Firebase project, database, and payment keys.
