const express = require ('express');

const expressLayouts =require ('express-ejs-layouts');





const app = express();

//ejs
app.use(expressLayouts);
app.set('view engine','ejs');


//Routs
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.eventNames.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`));
