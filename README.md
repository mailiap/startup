# FamilyConnect

### Elevator Pitch
The app that brings your family closer together, no matter where they are in the world. With FamilyConnect, you can easily share photos, updates, recipes, and special moments in your family group chat, and instantly invite loved ones from around the globe to join in.

### Design

<img width="300" alt="Screenshot 2024-09-14 at 8 46 06 PM" src="https://github.com/user-attachments/assets/9cc04e69-eff7-47d3-8ff5-394862992324">

Here is a sequence diagram that shows the scenario of user authentication and messaging

<img width="450" height="400" alt="screenshot" src="https://github.com/user-attachments/assets/bf188774-3da6-43bf-9a11-3f9a1b843b86">

### Key Features
* Secure user authentication
* Real-time messaging
* Multi-language support
* Customizable alerts
* Online/offline indicators
* Event calendar manager
* Privacy settings

### Technologies

* **HTML** - will be used to define the basic structure of the application. This includes the layout of the login page, the main interface of the family group chat, and any additional pages or components required.

* **CSS** - will be used to style the HTML elements and create animations for interactive components. This includes setting colors, fonts, layouts, and animations like transitions and hover effects.

* **JavaScript** - will manage interactive elements, such as button clicks and form submissions. It will handle user input, perform validation, and manipulate the DOM based on user actions.

* **React** - will be used to build reusable components and manage the application's state. It will handle routing between different pages (e.g., login, chat) and provide a dynamic user experience.

* **Web service** - will handle remote function calls such as saving and retrieving data. This includes calls to your own backend server as well as third-party APIs.

* **Authentication** - implement user authentication to allow users to create accounts, log in, and display their name once logged in.

* **Database data** - render application data stored in the database, such as user details or high scores. This involves fetching data from the backend and displaying it in the application.

* **WebSocket data** - to handle real-time data updates, such as live chat messages or updates on game scores.

## HTML deliverable

➡️ For this deliverable I built out the structure of my application using HTML.

 - [x] **HTML pages** - Four HTML pages that represent the ability to login, see the different ways to connect with family, upcoming events, and an about page.
 - [x] **Links** - The login page automatically goes to the connect page. The connect page has links for the other pages as well.
 - [x] **Text** - The about page is represented by a textual description.
 - [x] **Images** - I was able to create a logo which I have upload on every page. 
- [x] **DB/Login**  - Input box and submit button for login. The events are pulled from the database.
 - [x] **WebSocket** - The input of family events results are represented on the connect page in realtime.

## CSS deliverable

➡️ For this deliverable I properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - I darkened the elements on the navigation bar of which current page that the user is on.
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices.
- [x] **Application elements** - Used good contrast and the whitespace I'm still trying to fix.
- [x] **Application text and color content** - Consistent fonts and color themes through each page. 
- [x] **Application images** - My app logo is a photo that I uploaded on every page.

## React deliverable

➡️ The following is an example of the required information for the `Startup React` deliverable

For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.

- [x] **Bundled and transpiled** - Configured with Webpack and Babel for optimal build performance.
- [x] **Components** - Key components include Login, FamilyFeed, and ShareMoment, with mocked functionality for login and WebSocket placeholders.
- [x] **login** - Allows family members to enter credentials, taking them directly to the family feed.
- [x] **database** - Currently uses local storage to save shared moments and updates, set to transition to a database in the future.
- [x] **WebSocket** - setInterval is used to simulate live updates in the feed; WebSocket functionality will replace this in the final version.
- [x] **application logic** - Family moments are highlighted, and new posts appear at the top of the feed for quick viewing.
- [x] **Router** - Uses react-router-dom to manage routing between Login, Family Feed, and Share Moment components.
- [x] **Hooks** - Uses useState to manage post and update states, and useEffect for real-time feed updates.

## Service deliverable

➡️ The following is an example of the required information for the `Startup Service` deliverable

For this deliverable I added backend endpoints that receives calender from a shared family calender on Google.

- [x] **Node.js/Express HTTP service** - Implemented a Node.js and Express backend with endpoints for user authentication and managing a family calendar.
- [x] **Static middleware for frontend** - Configured Express to serve static files from the `public` directory, hosting the React frontend.
- [x] **Calls to third party endpoints** - Integrated a Google Calendar iframe to display a dynamic family calendar. This serves as a basic third-party service integration.
- [x] **Backend service endpoints** - Developed endpoints for user authentication and family calendar management.
- [x] **Frontend calls service endpoints** - Used the `fetch` function in React to interact with backend API endpoints for creating, retrieving, updating, and deleting calendar events.

## DB/Login deliverable

➡️ The following is an example of the required information for the `Startup DB/ Login` deliverable

For this deliverable I associate the events with the logged in user. I stored the users in the database.

- [x] **MongoDB Atlas database created** - done!
- [x] **Stores data in MongoDB** - done!
- [x] **User registration** - Creates a new account in the database.
- [x] **existing user** - Stores the family connects information if the user already exists.
- [x] **Use MongoDB to store credentials** - Stores both user and their family circle.
- [x] **Restricts functionality** - You cannot join a family cirlce until you have logged in. This is restricted on the frontend only.

## Websocket deliverable

➡️ The following is an example of the required information for the `Startup Websocket` deliverable

For this deliverable I used webSocket to update the when a member shares somethign on the frontend in realtime.

- [x] **Backend listens for WebSocket connection** - done!
- [x] **Frontend makes WebSocket connection** - done!
- [x] **Data sent over WebSocket connection** - done!
- [x] **WebSocket data displayed** - All updates display in realtime.
