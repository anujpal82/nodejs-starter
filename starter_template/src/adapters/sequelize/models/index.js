import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import formModel from './form.js';
import stepModel from './step.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Read the config JSON file
const configFilePath = path.join(__dirname, '../config/config.json');
const configFile = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
const config = configFile[env];

const db = {};
const db1 = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize
  .authenticate()
  .then(() => console.log('✅ Connection has been established successfully.'))
  .catch((err) => console.error('❌ Unable to connect to the database:', err));

// Load models dynamically
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      !file.endsWith('.test.js')
  )
  .forEach(async (file) => {
    const model = (await import(path.join(__dirname, file))).default(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Manually require models
db.Form = formModel(sequelize, Sequelize);
db.Step = stepModel(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
