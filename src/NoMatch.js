import { useLocation } from "react-router-dom";

function NoMatch() {
    const location = useLocation();

    return(
        <>
            <h3>404: Not Found</h3>
            No match for '<code>{location.pathname}</code>' path.
        </>
    );
}

export default NoMatch;