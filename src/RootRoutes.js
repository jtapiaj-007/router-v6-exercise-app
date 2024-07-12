import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from "./About";
import Home from "./Home";
import User from "./User";
import NoMatch from './NoMatch';

function RootRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:userId" element={<User />}>
                <Route path="posts" element={<p>Here are a list of the user's posts</p>}/>
                <Route path="posts/:postId" element={<p>Here is a single post</p>}/>
            </Route>
            <Route path="*" element={<NoMatch />}/> /* this can be used to route 404 Not Found pages */
        </Routes>
    );
}

export default RootRoutes;
