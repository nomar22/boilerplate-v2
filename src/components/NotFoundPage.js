import React from 'react';
import {Link } from 'react-router-dom';

//help
export const NotFoundPage = () => (
    <div>
        404 = <Link to="/dashboard" >Go home </Link>
    </div>
);

export default NotFoundPage;