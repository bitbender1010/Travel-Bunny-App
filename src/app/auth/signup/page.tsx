import Head from 'next/head';
import Link from 'next/link';
import style from '../../create.module.css';


const SignUp = () => (
    <main>
        <div className='pls'>Please enter your information</div>

        {/* Form */}
        <form name="contact-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-form" />

            <label>First Name</label>
            <input type='text' name='first-name'/>

            <label>Last Name</label>
            <input type='text' name='last-name'/>

            <label>Email Address</label>
            <input type='text' name='email-address'/>

            <button type='submit'> Get Early Access </button>
        </form>

    </main>
);

export default SignUp;
