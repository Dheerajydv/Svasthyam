import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import notFoundImage from "/grs.jpg";
import { ArrowLeft } from "lucide-react";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="text-content">
                <h1 id="main-text">Page Not Found.</h1>
                <div className="digit-container">
                    <button id="digit-1" className="digit">
                        4
                    </button>
                    <button id="digit-2" className="digit">
                        0
                    </button>
                    <button id="digit-3" className="digit">
                        4
                    </button>
                </div>
                <h3>OOPS! WE HAVE NOTING TO SHOW HERE.</h3>
                <button className="btn" onClick={() => navigate("/")}>
                    <ArrowLeft /> Go Home
                </button>
            </div>
            <img id="notFoundImage" src={notFoundImage} alt="404-Image" />
        </div>
    );
};

export default ErrorPage;
