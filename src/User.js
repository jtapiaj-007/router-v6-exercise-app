import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import UserProfile from './UserProfile';

function User() {
    const { userId } = useParams(); 

    return (
        <>
            <UserProfile />
            <hr/>
            <Link to={`/user/${userId}/posts`}>View All Posts</Link>
            ||
            <Link to={`/user/${userId}/posts/1`}>View Post with ID 1</Link>
            <hr/>
            <Outlet />
        </>
    );
}

export default User;


{/*

              <Link to={``}>Profile</Link>
              <Link to={``}>Posts</Link>

<UserProfile user={user} />
<UserPosts posts={user.posts} /> 

*/}
