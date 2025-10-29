# Alpha Ultimate Ltd. - Company Portal & CMS

Welcome to your Next.js application, fully customized for Alpha Ultimate Ltd. This project is a comprehensive portal for your clients and a complete Content Management System (CMS) for your team, built with Next.js, Tailwind CSS, and ShadCN UI components.

## Getting Started

To get the application running locally, follow these steps:

1.  **Install Dependencies**:
    Open your terminal and run the following command to install all the necessary packages.
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    Once the installation is complete, start the development server.
    ```bash
    npm run dev
    ```

The application will now be running on [http://localhost:9002](http://localhost:9002).

## How to Log In

### Admin Panel
-   **URL**: Navigate to `/admin/login`
-   **Email**: `admin@alphaultimate.com`
-   **Password**: `password`

### Client Portal
-   **URL**: Navigate to `/portal/login`
-   You can use the **Login** or **Register** tab with any dummy information to proceed to the dashboard.

## Key Features

### Public-Facing Website

A professional, modern website to showcase your services and projects to the world.

- **/ (Homepage)**: A dynamic homepage with a video background.
- **/services**: Lists all company services.
- **/projects**: A showcase of your completed projects.
- **/estimating**: A real-time cost estimator for clients.
- **/about**: Information about your company's mission and values.
- **/vision**: Details on your AI-driven strategy with 'Yusra'.
- **/careers**: Lists job openings and includes an application form.
- **/contact**: A contact form for general inquiries.

### Client Portal (`/portal`)

A secure area for your clients to log in and manage their manpower requests.

- **/portal/login**: Secure login and registration for clients.
- **/portal/dashboard**: A dedicated dashboard for clients to submit new manpower requests.

### Admin Panel (`/admin`)

A powerful, password-protected back-office for your team to manage all website content.

- **/admin/login**: Secure login for administrators.
- **/admin/dashboard**: An overview of recent site activity and AI-driven insights from 'Yusra'.
- **/admin/submissions**: View and manage all contact and career form submissions.
- **/admin/manpower-requests**: View and manage all client manpower requests.
- **/admin/jobs**: Add, edit, and delete job postings that appear on the public Careers page.
- **/admin/projects**: Add, edit, and delete projects from your portfolio.
- **/admin/services**: Add, edit, and delete the services you offer.
- **/admin/vision**: Directly edit the content on the "Our Vision" page.

## AI Integration with 'Yusra'

The admin dashboard includes a special widget powered by 'Yusra', your AI assistant. It analyzes site data (like manpower requests and submissions) to provide strategic insights, helping with resource allocation and decision-making.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **AI**: Genkit
- **Forms**: React Hook Form with Zod for validation
- **Icons**: Lucide React
