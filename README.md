## Twitter-App
```
📝 Developed a basic Twitter App in React environment.
🔥 Used Google Firebase for authentication (Login & Register).
📊 Leveraged Firebase Realtime Database for user operations (post, delete).
📝 You can login with your Google account also.
🌐 You can access the live version of the project from the following link.
```

  https://twitter-app-kerimmstfdemir.onrender.com/

## Installation

To run this React application locally, follow these steps:

1. **Clone the repository:**
Open your terminal/command prompt and run the following command to clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. **Navigate to the project directory:**
Change your working directory to the project folder using the cd command:

```bash
cd <project_folder_name>
```

3. **Set up Firebase credentials:**
If you haven't already, create a Firebase project and get the required credentials for authentication and database access. Update the Firebase configuration in the ```firebase.js``` file located in the ```src/authentication``` folder with your credentials.

4. **Install dependencies:**
Use npm or yarn to install the required dependencies:

```bash
npm install
```
or
```bash
yarn install
```

5. **Start the development server:**
To launch the application, run the following command:

```bash
npm start
```
or
```bash
yarn start
```

6. **Access the application:**
The application will be running at http://localhost:3000 in your web browser. You can now explore Twitter-App and its features.

## Project Skeleton

```
Twitter-App (main folder)
|
├── README.md 
├── node_modules
├── LICENSE
├── .gitignore
├── public
│      └── index.html
├── src
|    ├───assets
|    │     └── [images]
│    ├── authentication
│    │     └── firebase.js
|    ├── components
|    │     ├── HomePageFlow
|    |     |       ├── home-page-flow.css
|    |     |       └── HomePageFlow.jsx
|    │     ├── Navbar
|    |     |       ├── Navbar.jsx
|    |     |        ── NavbarAfterLogin.jsx
|    │     ├── Posts
|    |     |       ├── post.jsx
|    |     |       └── Post.jsx
|    │     ├── PostTweet
|    |     |       ├── post-tweet.css
|    |     |       └── PostTweet.jsx
|    │     ├── Sidebar
|    |     |       ├── Sidebar.jsx
|    |     |       ├── SidebarSettings.jsx
|    |     |       ├── sidebar-settings.css
|    |     |       └── sidebar.css
|    │     ├── Trends
|    |     |       └── Trends.jsx
|    │     └── UserTweets
|    |             ├── UserTweets.jsx
|    |             ├── OtherUserTweets.jsx
|    |             └── user-tweets.css
|    ├── pages
|    │     ├── home
|    │     │     ├── Home.jsx
|    │     │     └── home.css
|    │     ├── login
|    │     │     ├── ForgotPassword.jsx
|    │     │     ├── login.css
|    │     │     └── Login.jsx
|    │     └── register
|    │           └── Register.jsx
|    ├── redux
|    │     ├── app
|    │     │     └── store.jsx
|    │     └── features
|    │           ├── loginInfoSlice.jsx
|    │           ├── postsSlice.jsx
|    │           ├── registerSlice.jsx
|    |           └── sidebarSlice.jsx
|    ├── router
|    |      ├── AppRouter.jsx
|    |      └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```
