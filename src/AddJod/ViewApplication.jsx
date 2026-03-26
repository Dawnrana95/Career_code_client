import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplication = () => {

    const loadarData = useLoaderData()
    console.log(loadarData);

    const { _id } = useParams()
    // console.log(_id);

    return (
        <div>
            <h1>uour add jov id {_id}</h1>
            <h1>Total Apply {loadarData.length}</h1>
            {
                loadarData.map(apply => <div key={apply._id} className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{apply.UserEmail}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ViewApplication;