const express = require('express')
const routes = require('./controllers')
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection')


const app = express();
const PORT = process.env.PORT || 3004;


const hbs = exphbs.create({});



// Middle ware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
}
)

