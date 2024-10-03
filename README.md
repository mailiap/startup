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
