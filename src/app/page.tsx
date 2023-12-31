'use client'
import { useState } from 'react'
import Image from 'next/image'
import wrapperOne from '/images/wrapper-one.png'
import { Fredoka } from 'next/font/google'
import Link from 'next/link'

const fredoka = Fredoka({ weight: ['400', '700'], subsets: ['latin'] })

export default function Home() {


  return (
    <main>
    <div className='header-wrapper'>

      <nav>
        <div>
          <Image 
            src='/images/TravelBunnyLogo.svg'
            width={100}
            height={100}
            alt='TravelBunny Logo'
            quality={100}
            className='logo'
            />
        </div>

            {/* Navigation Area */}
            <div className='flex hidden'>
              <ul className='nav-items flex items-center'>
                <li>Home</li>
                <li>Register</li>
              </ul>

              <div>
                <Image 
                src='/images/toggle-icon.svg'
                width={100}
                height={100}
                alt='Toggle Icon'
                className='toggle'
                />
              </div>
            </div>
      </nav>

      {/* Banner Section */}
      <div className='banner'>
        <h1 className={`${fredoka.className} banner-main-tx`}>Discover and explore new places and experiences on a budget</h1>
        <div className='banner-sub-tx'>TravelBunny is the perfect way to explore the world with friends. Join group tours or plan your own, and make memories that will last a lifetime.</div>
        <Link href="/auth/signup"> <button className='join-waitlist'>Start Exploring...</button> </Link>
      </div>

        {/* Winner */}
        <div className='winner'>
        <div className='w-tx'>Last year, we won the "Tourism Hackathon Nigeria" 1.0 - supported by the UNWTO</div>
        <img src='/images/imagee.jpg' className='w-img'/>
      </div>

    </div>
    </main>
  )
}
