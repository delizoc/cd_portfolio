import pro1 from "../assets/project-img1.png";
import pro2 from "../assets/juice_schema.png";
import pro3 from "../assets/journal.gif";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Wasteagram",
        text: "The project assignment required the creation of a mobile app called \"Wasteagram\" to allow food service workers to document food waste at the end of each day. We were required to use the Flutter SDK. The app allows for taking or uploading a photo of wasted food and inputting the quantity of food wasted. The current date and device location are also captured with the new post. A main \"list screen\" then shows all posts, allowing users to tap on any post to see more information. Data is stored in Google Firebase Cloud Firestore, and images are stored in Google Firebase Cloud Storage.",
        view: "https://youtu.be/zudr9gFFxAA",
        tags: "Dart/Flutter, Firebase, AndroidSDK",
        source: "https://github.com/delizoc/wasteagram"
    },
    {
        imgsrc: pro2,
        title: "Juice Store Database",
        text: "The main goal of this new database is to keep track of customers orders and sales revenue. To do this there will be an account login for customers to view the drinks that they have previously ordered. Relational database, ERD, Schema and queires all created uniquely and exclusivley for this project. MySQL databse used, originally made with MariaDB.",
        tags: "ReactJS, Handlebars, MySQL, Express",
        view: "https://youtu.be/_bU8b_bGpFo",
        source: "https://github.com/delizoc/JUICESTORE"
    },
    {
        imgsrc: pro3,
        title: "Journal",
        text: "App that enables a user to view existing journal entries in a list, view a single journal entry, and add a new journal entry. In addition, the user can change the application theme from light to dark. The theme preferences and journal data should persist between application restarts. Lastly, the app is adaptive, based on the amount of horizontal space available on the screen.",
        tags: "Dart/Flutter, AndroidSDK",
        view: "https://youtu.be/VEVv-Faja8s",
        source: "https://github.com/delizoc/journal"
    },
];

export default ProjectCardData;
