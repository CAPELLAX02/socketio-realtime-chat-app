# Socket.IO Realtime Chat App

This project is a real-time chat application built using Socket.IO and Express. The client side is developed with React and is located in the `client` directory.

## Demo Video 🎬

https://github.com/user-attachments/assets/9b58c1a1-b9e6-4351-b872-dd310befa600

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone git@github.com:CAPELLAX02/socketio-realtime-chat-app.git
   cd socketio-realtime-chat-app
   ```

2. **Install dependencies**

   Install the dependencies for both the server and client:

   ```bash
   npm install
   ```

   Then navigate to the `client` directory and install the client-side dependencies:

   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

There are several scripts defined in the `package.json` file to help you run the application:

- **Start the server only:**

  ```bash
  npm run server
  ```

  This will start the server using `nodemon`, which automatically restarts the server whenever you make changes.

- **Start the client only:**

  ```bash
  npm run client
  ```

  This will start the React client application.

- **Run both the server and client concurrently:**

  ```bash
  npm run dev
  ```

  This will start both the server and the client at the same time using `concurrently`.

## Testing the Application

- To test the application, you can open the application in different browsers or in incognito mode to simulate multiple users. You can then join the same chat room and verify that messages are sent and received in real-time between different users.

### Project Structure

- **server.js**: Main server file for the backend using Express and Socket.IO.
- **client/**: Contains the React frontend for the chat application.

### Author

Ahmet ATAR

### Issues

If you find any bugs or have any issues, please report them [here](https://github.com/CAPELLAX02/socketio-realtime-chat-app/issues).

### Additional Information

For more details on how this project works, visit the [GitHub repository](https://github.com/CAPELLAX02/socketio-realtime-chat-app).
