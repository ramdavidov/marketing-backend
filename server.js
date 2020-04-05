const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()
const http = require('http').createServer(app);

app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

const applicantRoutes = require('./api/applicant/applicant.routes')

// routes
app.use('/api/application', applicantRoutes)

const logger = require('./services/logger.service')
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
    console.log(`Marketing REST API listening on port ${port}!`)
})
