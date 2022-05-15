import React from 'react';
import { Link } from 'react-router-dom';

function ArtsItem(props) {
  return (
    <>
      <li className='arts__item'>
        <Link className='arts__item__link' to={props.path}>
          <figure className='arts__item__pic-wrap' data-category={props.label}>
            <img
              className='arts__item__img'
              alt='paintings'
              src={props.src}
            />
          </figure>
          <div className='arts__item__info'>
            <h5 className='arts__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ArtsItem;