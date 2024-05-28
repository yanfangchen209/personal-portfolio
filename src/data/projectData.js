import shoppingcartprojectsnapshots from "../assets/shoppingcartprojectsnapshots.jpg";
import foodorderapp from "../assets/foodorderapp.jpg";
import portfolio from "../assets/portfolio.jpg";



const projectsData = [
       
    {
        id: 1, 
        name: 'Shopping Cart (Servlet & JSP)',
        image: shoppingcartprojectsnapshots,
        description: `Developed admin system for user accounts and products management. Implemented CRUD 
        operations for users and products. Designed image storage solution with local file system and 
        database. Designed shopping functionality allowing users to  browse products, add items to 
        their carts, update quantities, and remove items. |Implement username and password based authentication with servlet
        session. Applied role-based access control to secure sensitive pages with servlet filter. | Utilized PostgreSQL for data persistence. Employed JDBC and connection pool for data access.`,
        skill: 'Developed using Java, Servlets, JSP, HTML, CSS, and JavaScript, following the MVC design pattern. Utilized Gradle for build automation and Git for version control.',
        link: 'https://github.com/yanfangchen209/newshoppingcart'
    },
    
    {
        id: 2, 
        name: 'Food Ordering Web App(ReactJS)',
        image: foodorderapp,
        description: `Developed a Single Page Application (SPA) using React.js with function components and
         React hooks. Implemented a home page, food page, and career page. Food page displays products details, 
         allow users to add items to the cart, update quantities, and delete items. Supported new user sign-ups. 
         Implemented user sign-in to checkout and validated shipping information, storing it in Firebase REST 
         API and sent order confirmations. |Centralized state management with React Context API | Use React Router for page routing and navigation | Deployed on AWS EC2 Linux instance  `,
        skill: 'React, Javascript, Node.js, NPM, Firebase, github page',
        link: 'https://yanfangchen209.github.io/Reactfoodorderapp/'
    },
    {
        id: 3, 
        name: 'Personal Portfolio(ReactJS)',
        image: portfolio,
        description: `A React application showcasing a selection of my project accomplishments:
        Developed using React, with distinct components such as Home, Projects List, Project Details.
        Successfully deployed on an AWS EC2 Linux instance for seamless accessibility.
        `,
        skill: 'Javascript, HTML, CSS, React, Node.js, AWS, Linux',
        link: 'http://yanfangchen.com/'
    }

]

export default projectsData;