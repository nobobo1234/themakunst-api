const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

const DB = process.env.DATABASE;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(con => console.log('DB CONNECTION SUCCESSFUL!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
