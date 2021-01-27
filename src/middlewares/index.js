import cors from 'cors';
import bodyParser from 'body-parser';

const Middlewares = (app) => {
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(cors());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    
        if (req.method === 'OPTIONS') {
            res.end();
        } else {
            next();
        }
    });
};

export default Middlewares;