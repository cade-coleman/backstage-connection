const express = require('express')
const routes = require('./controllers')

const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3004;


// Middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`listening on ${PORT}`))
}
)

