import {useRouteError} from "react-router-dom";

const ErrorPage = () =>{

    const err = useRouteError();
    console.log(err);
    return (
        <div className="main-container">
            <div className="error-container">
             <h1 className="error-message">{err?.error?.message}</h1>
             <h1 className="error-text">{err?.status}</h1>
             <h1 className="error-text-message">{err?.statusText}</h1>
        </div>
        </div>
    );
}

export default ErrorPage;