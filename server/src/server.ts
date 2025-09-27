import express from "express";
import { dbConnect } from "./database/connectToDatabase";
import router from "./routes/report.route";
import cors, { CorsOptions } from "cors";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
    express.urlencoded({
        parameterLimit: 100000, // or a number that suits your needs
        limit: "50mb", // Also, adjust the size limit if you need to
        extended: true,
    })
);

// Define specific options for CORS (recommended for production)
const corsOptions: CorsOptions = {
    // Replace with your frontend's actual domain
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use("/api", router);

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

// Database
dbConnect();
