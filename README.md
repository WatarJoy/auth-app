# Auth App

A simple authentication application built with Next.js. This demo app demonstrates basic user authentication and interacts with a separate API backend.

# Demo

You can view the live demo here:  
[https://watarjoy.github.io/auth_app/](https://watarjoy.github.io/auth_app/)

# Requirements

- [Node.js](https://nodejs.org/) (with npm or yarn)
- [Docker](https://www.docker.com/) (for running the authentication API)

# Installation

## Setting Up the Authentication API

This app requires the auth-api to handle authentication requests. Follow these steps to set it up locally:

1.  ```bash
    git clone https://github.com/Veel-IT/auth-api.git
    ```
    
2.  ```bash
    cd auth-api
    ```
    
3.  ```bash
    docker-compose up -d
    ```
    The API will be running on port 5000. You can access the Swagger documentation at:[http://localhost:5000/api](http://localhost:5000/api)

### *You can use the app via the demo link with the local API*

## Setting Up the Front-End(Localy)
1. **Clone the Repository**

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```
2. **Install Dependencies**

Use npm or yarn to install the necessary packages:

```bash
npm install
```
 or
```bash
yarn install
```

## Running the Application

Start the Next.js development server with:

```bash
npm run dev
```
or
```bash
yarn dev
```

The app will be available at http://localhost:3000.

# Tech Stack
## Frontend: 
**Next.js, Redux, TailwindCSS, zod**
## Backend API: 
**[Auth API](https://github.com/Veel-IT/auth-api.git)** (Dockerized)
