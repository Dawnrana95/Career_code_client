
import React, { use } from 'react';
import { Autchontex } from '../Contex/AuthContex';

const AdeJobe = () => {

    const { user } = use(Autchontex)

    const handalOnsubmit = e => {
        e.preventDefault()
        const hr_email = e.target.hr_email.value;
        const company = e.target.company.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const company_logo = e.target.company_logo.value;
        const jobType = e.target.jobType.value;
        const salary = e.target.salary.value;

        const ditels = { hr_email, company, title, category, location, company_logo, jobType, salary }
        // console.log(ditels);

        fetch('https://career-code-server-gilt.vercel.app/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ditels)
        })
            .then(res => res.json())
            // .then(data => { console.log('aptar Add Data on mongoDB', data) })

        e.target.reset()
    }




    return (
        <div className='w-3xs my-5 mx-auto'>
            <form onSubmit={handalOnsubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Your hr_email</label>
                    <input type="text" className="input" name='hr_email' defaultValue={user.email} placeholder="hr_email" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="company" />

                    <label className="label">title</label>
                    <input type="text" className="input" name='title' placeholder="Job Titel" />

                    <label className="label">Category</label>
                    <input type="text" className="input" name='category' placeholder="Category" />

                    <label className="label">Location</label>
                    <input type="text" className="input" name='location' placeholder="location" />

                    <label className="label">Logo</label>
                    <input type="text" className="input" name='company_logo' placeholder="company_logo" />
                </fieldset>



                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <div className="filter">
                        <input className="btn btn-square" type="reset" value="×" />
                        <input className="btn" type="radio" value="Svelt" name="jobType" aria-label="Svelte" />
                        <input className="btn" type="radio" value="Vue" name="jobType" aria-label="Vue" />
                        <input className="btn" type="radio" value="React" name="jobType" aria-label="React" />
                    </div>
                </fieldset>



                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1 className='font-bold text-1xl'>Salary</h1>
                    <select defaultValue="Pick a color" name='salary' className="select">
                        <option disabled={true}>Pick a Salary</option>
                        <option>50,000</option>
                        <option>40,00</option>
                        <option>30,00</option>
                    </select>
                </fieldset>

                <input className='btn' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default AdeJobe;