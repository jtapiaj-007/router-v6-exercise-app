import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const [user, setUser] = useState({});
    const abortController = new AbortController();
    const { userId } = useParams();

    useEffect(() => {
        setUser({}); // Re-set the value to EMPTY before retrieving data via API, otherwise the PREVIOUS value will be displayed.

        async function fetchUser() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userId}`,
                    { signal : abortController.signal }
                );
                const data = await response.json();
                setUser(data);

            } catch(error) {
                console.log(error);
            }
        }
        fetchUser();
        return () => abortController.abort();

    }, [userId]);

    if(user.id) {

        return Object.entries(user).map(([key, value]) => (
            <>
                <div key={key} style={{textAlign: "left", margin: "10px", display: "flex"}}>
                    <label style={{ fontWeight: "bold", flex: "1"}}>{key}</label>
                    <label style={{flex: "10"}}> {JSON.stringify(value)} </label>
                </div>
                <hr/>
            </>
        ));
    }
    return "Loading...";
}

export default UserProfile;