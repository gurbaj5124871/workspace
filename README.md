# Web simulation of UbuntuOS

This is a personal portfolio website of theme Ubuntu 20.04, made using Next.js & tailwind CSS.

To run this on localhost
type `npm start` and when u are done coding type `npm run build` to build your app.

### To make the contact form work

- Create a account in [emailjs](https://www.emailjs.com/) create also new Outlook or Gmail account to be able
  to send email.
- Create a new service, select and log in to your newly created outlook or gmail account on EmailJS.
- Go back to the dashboard and get the Service ID copy it.
- Create a .env file in your root folder and put

```

NEXT_PUBLIC_USER_ID = 'YOUR_USER_ID'
NEXT_PUBLIC_TEMPLATE_ID = 'template_fqqqb9g'
NEXT_PUBLIC_SERVICE_ID = 'YOUR_SERVICE_ID'

```

### To make analytics work

- The project uses google analytics 4. Create google analytics account.
- Create a property in your google analytics account.
- Go to Admin settings and create a web based data stream for your website.
- Copy the Measurement id and put `NEXT_PUBLIC_GA4_MEASUREMENT_ID` variable in .env

into it. Replace \*your user id and your service ID with your values in your EmailJS service.

## This project was made using Create Next App! Here is the scripts that u can run.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
