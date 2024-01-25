import { app, PORT } from '../backend/app.js'
import { connectDB } from './db.js'



connectDB();
app.listen(PORT)
console.log('server on port', PORT)