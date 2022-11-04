# Frontend Mentor - Arch Studio multi-page website

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6).

## Project descrition

A multi-page website for a fictional architecture company called Arch Studio. 

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- Send contact email messages (the actual email service is not working currently)
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "Please use a valid email address"
- View actual locations on the contact page map

### Links

- Live Site URL: [https://arch-studio-website.firebaseapp.com/](https://arch-studio-website.firebaseapp.com/)

### Technical details

The project is React single-page application, it was boostrapped with [Create React App](https://create-react-app.dev/)<br>
Technologies:
- [React](https://reactjs.org/) - JS library
- [Framer-Motion](https://www.framer.com/motion/) - For animaton
- [React-Router V6](https://reactrouter.com/docs/en/v6) - For routing
- [React-Leaflet](https://react-leaflet.js.org/) - For the map

### **To run it locally**

1. Clone or download this repository
2. Install the dependecies:
```sh
$ npm install
```
3. Run the application:
```sh
$ npm start
```
The app will start on port: 3000.