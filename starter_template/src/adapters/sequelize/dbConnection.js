import { Sequelize } from "sequelize";
const sequelize = new Sequelize({

    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    database: 'mydatabase',
    port: 5432,
    logging: (...msg) => console.log(msg),
})
const dbConnection = async () => {
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { dbConnection, sequelize };