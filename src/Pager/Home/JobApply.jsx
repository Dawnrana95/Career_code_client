import React, { use } from 'react';
import { useParams } from 'react-router';
import { Autchontex } from '../../Contex/AuthContex';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    // console.log(id);

    const { user } = use(Autchontex)
    // console.log(user);

    const handalOnsubmit = e => {
        e.preventDefault()

        const Linked = e.target.Linked.value;
        const GitHub = e.target.GitHub.value;
        const Resume = e.target.Resume.value;

        const jobApplyDitels = {
            id,
            UserEmail: user.email,
            Linked,
            GitHub,
            Resume
        }


        fetch('http://localhost:3000/applcation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplyDitels)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                    console.log('after connect mongo db', data);
                }
            })
    }


    return (
        <div>
            <form onSubmit={handalOnsubmit} className='my-5'>
                <fieldset className="fieldset bg-base-200 border-base-300 mx-auto rounded-box w-xs border p-4">

                    <label className="label">LinkedIn Link</label>
                    <input name='Linked' type="url" className="input" placeholder="Enter Url" />

                    <label className="label">GritHub Link </label>
                    <input name='GitHub' type="url" className="input" placeholder="GitHub Link" />

                    <label className="label">Resume Link</label>
                    <input name='Resume' type="url" className="input" placeholder="Resume URL" />

                    <input type="submit" value="Submit" className='btn' />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;