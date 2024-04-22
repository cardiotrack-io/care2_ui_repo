# Project Readme: Cardiotrack

## How to install/run this Code.

- git clone https://github.com/cardiotrack-io/care_rebuilt/tree/master
- Navigate to the projects directory in CMD.
- Once in the correct directory run
  - npm install
  - npm run dev
  - 


## Pages

### Landing Page
- Contains information about the company.
- Features a "Get Started" button for redirection.

### Login Page
- A 2-step process:
  1. User enters phone number and receives OTP.
  2. User enters OTP and gets verified.
- Redirects user to the Tests Page upon verification.

### Test Page
- Divided into two sections:
  - Cardiotrack packages: Pre-made packages displayed.
  - Dropdown: Users can customize their own packages by selecting the number of tests.
- Redirects users to the Details Page.

### Details Page
- Collects user details:
  - Customer Name
  - Customer Address
  - Appointment Date
  - Appointment Time
- Provides options:
  - Pay Now: Redirects to the payment portal.
  - Pay Later: Redirects to the Appointment Confirmation Page.

### Payment Page
- Allows users to make payments for appointments.

### History Page (v2.1)
- Displays the history of appointments.

### Status Page (v2.1)
- Shows the status of appointments.

### Reports Download
- Enables users to download reports.

## Version 2.1
- Introduces History and Status pages for better user experience.

## Usage
1. Clone the repository.
2. Install dependencies.
3. Run the project.

## Technologies Used
- React
- JavaScript
- HTML
- CSS

