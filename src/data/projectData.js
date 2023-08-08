import travelguide from "../assets/travelguide.jpg";
import missingdata from "../assets/missingdata.jpg";
import shopping from "../assets/shopping.jpg";
import portfolio from "../assets/portfolio.jpg";
import database from "../assets/database.png";


const projectsData = [
    /*
    {
        id: 1, 
        name: 'travel guide',
        image: travelguide,
        description: 'description about travel guide project',
        skill: 'Spring Boot, java'
    },
    */
       
    {
        id: 1, 
        name: 'Missing data imputation(Python)',
        image: missingdata,
        description: `Data imputation is a technique used to fill in missing or incomplete data points 
        within a dataset.  Imputation methods estimate and replace missing values with estimated or 
        predicted values based on the available data.The goal of data imputation is to enhance the quality 
        and integrity of the dataset, allowing for more accurate analysis and interpretation. Collaborated within a team of three to implement three missing data imputation methods 
        using Python—Class Center-Based Missing Value Imputation (CCMVI), Fuzzy C Means, and tree data
        imputation. Conducted performance comparisons to assess methods efficiency and accuracy.       
  `,
        skill: 'Python, Data Analysis'
    },
    
    {
        id: 2, 
        name: 'Shopping cart',
        image: shopping,
        description: `The shopping cart functionality empowers users to search products, add items to 
        their carts, and complete checkouts. An admin UI is available to facilitate the management of 
        product availability.`,
        skill: 'Java, Servlets, JSP, HTML, CSS, and JavaScript, JDBC, Postgres database, Gradle, Git'
    },
    {
        id: 3, 
        name: 'Personal Portfolio',
        image: portfolio,
        description: `A React application showcasing a selection of my project accomplishments:
        Developed using React, with distinct components such as Home, Projects List, Project Details.
        Successfully deployed on an AWS EC2 Linux instance for seamless accessibility.
        `,
        skill: 'Javascript, HTML, CSS, React, Node.js, AWS, Linux'
    },

    {
        id: 4, 
        name: 'Assembly accounting system',
        image: database,
        description: `This project involves building a relational database for a job-shop accounting system. The goal is to create a database that can effectively manage the accounting information of a job shop, a type of manufacturing process that involves customizing products for specific clients.
        The project involves building the database on an Azure SQL Server, according to the given requirements for the database system. This includes designing an Entity Relationship (ER) diagram, listing out the relational database schema, providing a data element dictionary, and discussing the choices of storage structures for all relational tables. SQL statements are then constructed to create tables and implement them on the Azure SQL Database.
        `,
        skill: 'Azure SQL Server database, SQL, JDBC'
    }

]

export default projectsData;