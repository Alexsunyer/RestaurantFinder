# RESTAURANT FINDER 🍽️

This is a restaurant finder app with different ways to filter your search.

## Features

- Restaurant listing by given data.
- Name, city and meal type search filters.
- Error management.
- Testing of backend and frontend.
- Application ready for production.
- Application ready for Dockerization.

## Tech Stack

**Server:** Node, Express, Jest

**Server testing:** Jest

**Client:** React, TailwindCSS, MaterialUI, Cypress

**Client testing:** Cypress

**Client Syntax:** Typescript

## Run Locally

Download and open Docker Desktop (_only if you want to Dockerize your app_)

Clone the project

```bash
  git clone https://link-to-project
```

Go to the backend directory

```bash
  cd Back/
```

Install dependencies

```bash
  npm install
```

If you want to start the server locally with a docker image, run:

```bash
  npm run docker_dev
```

If you want to start the server locally without a docker image, run:

```bash
  npm start
```

Go to the frontend directory

```bash
  cd ../Frontend
```

Install dependencies

```bash
  npm install
```

Create **.env** file exactly the same as **template.env** and put the server URL (_http://localhost:4000/api/restaurants_)

Start the client

```bash
  npm run dev
```

**ENJOY!**
