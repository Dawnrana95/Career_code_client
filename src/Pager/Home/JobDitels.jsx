import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDitels = () => {
    const {_id,description,title,location,responsibilities,company_logo} = useLoaderData()

    return (
        <div className='my-6 '>
            <div className="card mx-auto bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>{location}</p>
                    {
                    responsibilities.map(arrays => <p key={arrays}>{arrays}</p>)
                    }
                </div>
                <div>
                    <img src={company_logo} />
                </div>
                <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'> Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDitels;