"use client";

import React from 'react';
import style from './style.module.scss';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Contact from '@components/Contact';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us for inquiries, support, or more information about our services." />
      </Head>
      <Navbar />
      <div className={style.contactUsContainer}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
