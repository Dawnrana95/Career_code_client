import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostDataList = ({ MyAddJobPromice }) => {

    const MyPostjob = use(MyAddJobPromice)
    console.log(MyPostjob);


    return (
        <div className='grid md:grid-cols-2 mx-auto w-7xl my-3.5 gap-3.5'>
            {
                MyPostjob.map(jobs => <div key={jobs._id} className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body">
                        <img className='w-5.5' src={jobs.company_logo} alt="" />
                        <h2 className="card-title">{jobs.company}</h2>
                        <h3 className="card-title">{jobs.hr_email}</h3>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <h1> Jov Tipe : {jobs.jobType}</h1>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More..</button>
                            <Link to={`/application/${jobs._id}`}><button className="btn btn-primary">Vue</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPostDataList;