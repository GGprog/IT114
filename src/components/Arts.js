import React from 'react';
import ArtsItem from './ArtsItem';
import './Arts.css';

function Arts() {
  return (
    <div className='arts'>
      <h1>ARTSSSSS!</h1>
      <div className='arts__container'>
        <div className='arts__wrapper'>
          <ul className='arts__items'>
            <ArtsItem
            src='images/v1.jpg'
            text='Taehyung'
            label='Taehyung'
       
            />
            <ArtsItem
            src='images/jk.jpg'
            text='Jeon Jungkook'
            />
            <ArtsItem
            src='images/jimin.jpg'
            text='Park Jimin'
            label='Jimin'
            />
            <ArtsItem
            src='images/redvelvet.jpg'
            text='Seulgi and Irene'
            label='Red velvet'
            />
            <br/>
            <ArtsItem
            src='images/IU.jpg'
            text='IU'
            label='IU'
            />
            <ArtsItem
            src='images/ref.jpg'
            text='Pinterest'
            label='girl'
            />
            <ArtsItem
            src='images/me.jpg'
            text='Cherry Joy Pepito'
            label='me'
            />
            <ArtsItem
            src='images/father.jpg'
            text='Bonifacio S. Pepito Jr'
            label='Father'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Arts;