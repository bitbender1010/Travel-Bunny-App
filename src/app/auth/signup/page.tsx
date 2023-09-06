import Head from 'next/head';
import Link from 'next/link';
import style from '../../create.module.css';


const SignUp = () => (
  <div>

    <main className={style.main}>
      <div className={style.rightBa}>
        <div className={style.right}>
          <Link href='/' className={style.logo}>
            <img src='/logo.png' alt='logo' /> <span>TravelBunny</span>
          </Link>

          <h2>Create a TravelBunny account</h2>
          <p className=''>
            We help you explore beautiful locations around the world and organize trips with your friends and family.
          </p>

          <form name="contact" method="POST" data-netlify="true">

          <div className={style.input}>
            <input
              type='email'
              placeholder='Email'
              className='text-base placeholder:text-base'
            />
          </div>

          <div className={style.input}>
            <input
              type='firstname'
              placeholder='Firstname'
              className='text-base placeholder:text-base'
            />
          </div>


          <div className={style.input}>
            <input
              type='lastname'
              placeholder='Lastname'
              className='text-base placeholder:text-base'
            />
          </div>

          {/* <div className={style.input}>
            <input
              type='text'
              placeholder='Password'
              className='text-base placeholder:text-base'
            />
          </div> */}

          <button type='submit' className='mb-4'>
            Create Account
          </button>

          </form>

          {/* <p className={style.login}>
            Don&lsquo;t have a TravelBunny <br /> account?
            <Link
              className={`underline hover:underline ${style.loginC}`}
              href='/login'
            >
              Login
            </Link>
          </p> */}
          <br/> <br/> <br/>

        </div>
      </div>
      {/* <div className={style.leftBa}>
        <img src='/tra3.png' alt='' />
      </div> */}
    </main>
  </div>
);

export default SignUp;
