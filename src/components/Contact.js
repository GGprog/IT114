import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <section className='contact-subscription'>
        <p className='contact-subscription-text'>
          You can leave a message any time.
        </p>
        <div>
            <input
              className='contact-input'
              placeholder='Leave a message. Thank you!'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
        </div>
      </section>
      <div class='contact-links'>
        <div className='contact-link-wrapper'>
          <div class='contact-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='contact-link-wrapper'>
          <div class='contact-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='contact-logo'>
            <Link to='/' className='social-logo'>
            <i class="fas fa-palette"></i>ART <i class="fa fa-paint-brush" aria-hidden="true"></i>
            </Link>
          </div>
          <small class='website-rights'>ART © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;