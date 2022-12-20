import React from 'react'
// import '../ProfileForm/ProfileForm.css'
function ProfileForm() {
    return (
        <div className='Container'>
            <div className="Form p-5">
                <div className="Title">Edit Profile</div>
                <form className='row g-2'>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="text" placeholder='Mobile' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="email" placeholder='Email Id' className='form-control' />
                        </div>
                        <div className="form-group">
                            <textarea className='form-control' placeholder='Description' cols="10" rows="3">
                               
                            </textarea>
                        </div>
                        <div className="d-grid gap-2 ">
                            <button className="btn shadow">SignUp</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default ProfileForm