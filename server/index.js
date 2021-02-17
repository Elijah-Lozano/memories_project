import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// deal with CORS
app.use(cors());
// every route inside of the post routes is gonna start with endpoint /posts
app.use('/posts', postRoutes);

// Put a limit on image size
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// Set up bodyparser to properly send reqs
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));



// connect server app with MongoDB database
const CONNECTION_URL = 'mongodb+srv://elijah-lozano:Nov3Blu3Wolf@cluster0.rownw.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect to our server
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// suppress console warnings
mongoose.set('useFindAndModify', false);
