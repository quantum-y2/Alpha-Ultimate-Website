# Alpha Ultimate Ltd. - Company Portal & CMS

Welcome to your Next.js application, a comprehensive portal for Alpha Ultimate Ltd.'s clients and a complete Content Management System (CMS) for your team. This project is built with Next.js, Tailwind CSS, and ShadCN UI components.

## Table of Contents

- [Getting Started (Standard)](#getting-started-standard)
- [Running with Termux (Android)](#running-with-termux-android)
- [How to Log In](#how-to-log-in)
- [Key Features](#key-features)
  - [Public-Facing Website](#public-facing-website)
  - [Client Portal](#client-portal)
  - [Admin Panel](#admin-panel)
- [AI Integration](#ai-integration)
- [Tech Stack](#tech-stack)

## Getting Started (Standard)

To get the application running locally on a standard development machine (Windows, macOS, Linux), follow these steps:

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) and npm installed.

2.  **Install Dependencies**:
    Open your terminal and run the following command to install all the necessary packages.
    ```bash
    npm install
    ```

3.  **Run the Development Server**:
    Once the installation is complete, start the development server.
    ```bash
    npm run dev
    ```

The application will now be running on [http://localhost:9002](http://localhost:9002).

## Running with Termux (Android)

You can run this project on an Android device using Termux.

1.  **Install Termux**: Download and install Termux from [F-Droid](https://f-droid.org/en/packages/com.termux/).

2.  **Install Node.js**: Open Termux and install the latest stable version of Node.js.
    ```bash
    pkg update && pkg upgrade
    pkg install nodejs
    ```

3.  **Get the Project Files**: You will need to get the project files onto your device. You can do this by cloning the repository if you have `git` installed (`pkg install git`) or by downloading the source code and placing it in a folder accessible by Termux.

4.  **Navigate to Project Directory**: Use the `cd` command to navigate to your project folder.
    ```bash
    cd /path/to/your/project
    ```

5.  **Install Dependencies**:
    ```bash
    npm install
    ```

6.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

Termux will start the server, and you can access it by opening a browser on your Android device and navigating to [http://localhost:9002](http://localhost:9002).

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

A professional, modern website to showcase your services and projects.

- **/ (Homepage)**: A dynamic homepage with a video background.
- **/services**: Lists all company services.
- **/projects**: A showcase of your completed projects.
- **/estimating**: A real-time cost estimator for clients.
- **/about**: Information about your company's mission and values.
- **/vision**: Details on your AI-driven strategy with 'Yusra'.
- **/careers**: Lists job openings and includes an application form.
- **/contact**: A contact form and social media links.

### Client Portal (`/portal`)

A secure area for clients to manage their manpower requests.

- **/portal/login**: Secure login and registration.
- **/portal/dashboard**: A dashboard for submitting new manpower requests.

### Admin Panel (`/admin`)

A powerful back-office for your team to manage all website content.

- **/admin/login**: Secure login for administrators.
- **/admin/dashboard**: An overview of site activity and AI insights.
- **/admin/submissions**: View and manage all contact and career form submissions.
- **/admin/manpower-requests**: View and manage all client manpower requests.
- **/admin/jobs**: Add, edit, and delete job postings.
- **/admin/projects**: Add, edit, and delete projects for the portfolio.
- **/admin/services**: Add, edit, and delete the services offered.
- **/admin/vision**: Directly edit the content on the "Our Vision" page.

## AI Integration

The admin dashboard includes 'Yusra', your AI assistant, which analyzes site data to provide strategic insights for resource allocation and decision-making.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **AI**: Genkit
- **Forms**: React Hook Form with Zod
- **Icons**: Lucide React
