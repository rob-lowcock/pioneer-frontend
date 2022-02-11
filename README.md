# Pioneer Frontend

![Screenshot](https://rob-lowcock.github.io/pioneer/site/screenshot.png)

Pioneer is a web app that creates a reusable retro board for team retrospectives.

This is the frontend application. The required backend server (which provides both a RESTful API and a websocket server) can be found at [github.com/rob-lowcock/pioneer-node](https://github.com/rob-lowcock/pioneer-node).

## 🧑‍💻 Development
1. Download the repo and run `npm install`
2. Duplicate example.env and rename it to `.env.local`. For local development you don't need to change the details unless you're running the API server on a different port.
3. Run `npm run dev` to start the development server

## 🌍 Deployment
1. Duplicate example.env and rename it to `.env.production.local`. For production you need to set the URL for where you're serving the API.
2. Run `npm run build` to build the static assets.
3. Deploy the contents of the `dist` folder to your production server (for ease, you might want this to be the `public` folder of your [pioneer-node](https://github.com/rob-lowcock/pioneer-node) installation).