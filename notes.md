Link to my web application startup: [FamilyConnect](https://startup.mailiap260.click)

Deployment

```sh
./deployFiles.sh -k ~/keys/production.pem -h mailiap260.click -s startup
```
React Deployment

```sh
./deployReact.sh -k ~/keys/production.pem -h mailiap260.click -s startup
```

Service Deploment

```sh
./deployService.sh -k ~/keys/production.pem -h mailiap260.click -s startup
```

# Development essentials

### GitHub
* how to pull and push from GitHub and VSC

This is the pattern wanted to make a reflexive part of the development environment.
1. Pull the repository's latest changes from GitHub
2. Make changes to the code
3. Commit the changes
4. Push the changes to GitHub

```sh
➜  git pull

➜  git add .

➜  git commit -m "<comment>"

➜  git push
```
  
# Web server setup

### Amazon Web Services - EC2 
* how to create an EC2 instance using the class AMI
* how to assign an elastic IP address 
> Note that the elastic IP address is allocated until it's released, not until the instance is terminated. So make sure to release it when it's no longer need it. Otherwise it will get a nasty $3 bill every month.

### HTTPS, TLS, and certificates
* how to create and register a domain using [AWS Route 53](https://github.com/webprogramming260/.github/blob/main/profile/webServers/amazonWebServicesRoute53/amazonWebServicesRoute53.md)
* how to use [Caddy](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md) to secure connections

# HTML

### HTML structure
[codepen: html structure](https://codepen.io/mpohahau/pen/mdNbPmG)
* how to use different elemments to make a structure using HTML

### HTML input
[codepen: html input](https://codepen.io/mpohahau/pen/mdNbVwm)
* how to use create input options using HTML

### HTML media
[codepen: html media](https://codepen.io/mpohahau/pen/mdNbVpw)
* how to use different types of media using HTML
  * image, audio, video, svg, canvas

### Startup HTML
* how to use the `Live Server VS Code extension` to see what my code looks like in the browser
* how to create HTML files for each page on my web application
* how to release my application to my production environment

```sh
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
```

> Doing this will make this deliverable to my startup available from `https://startup.yourdomainname`.


# CSS

### CSS practice
[codepen: css practice](https://codepen.io/mpohahau/pen/eYqNmBy)
* how to know how to create CSS rules using selectors to apply declarations to my HTML elements

### CSS flex
[codepen: css flex & media query layout](https://codepen.io/mpohahau/pen/JjgKoLJ)
* how to parition partition the application into areas that responsively move around as the window resizes or the orientation changes

### CSS frameworks
[codepen: css bootstrap](https://codepen.io/mpohahau/pen/XWvKJyp?editors=1100)
* how to provide functions and components that commonly appear in web applications

### Startup CSS
* how to


# JavaScript

### JavaScript arrays
[codepen: javascript arrays](https://codepen.io/mpohahau/pen/oNKBYZw)
* how to represent a sequence of other objects and primitives

### JavaScript DOM (document object model)
[codepen: javascript DOM](https://codepen.io/mpohahau/pen/rNXjWwO)
* how to represent the HTML elements that the browser uses to render the display


### JavaScript promises
[codepen: javascript pizza promise](https://codepen.io/mpohahau/pen/XWvabmB)
* how to allows the main rendering thread to continue while some action is executed in the background

### JavaScript async/await
[codepen: javascript pizza async/await](https://codepen.io/mpohahau/pen/PoMKqoP)
* how to develop a more concise representation
  * `async` keyword wraps the execution of a promise and removed the need to chain functions.
  * `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`

### Extra Credit
[w3schools](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1) exercises for javascript

> It was a great review for basic coding. They might seem like easy exercises, but honestly of the basic things I forgot how to do and need a little reminder. I thinked the DOM section more because it gave me a better understanding of what to do because of the exercises.

# Midterm

### Midterm study guide
[GitHub file](midterm_review.md)


