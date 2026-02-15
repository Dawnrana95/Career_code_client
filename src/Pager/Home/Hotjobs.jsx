import { Link } from "react-router";



const Hotjobs = ({ userData }) => {
    // console.log(userData);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ml-4 mx-auto">
            {
                userData.map(Data => <div key={Data._id} className="gap-3 p-6 m-4  card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={Data.company_logo}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {Data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/data/${Data._id}`}><button className="btn btn-primary">Ditels</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Hotjobs;