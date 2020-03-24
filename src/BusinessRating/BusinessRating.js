import React from 'react';
import styles from './BusinessRating.module.css';
import Rating from 'react-rating';

export function BusinessRating(props) {
    return(
        <div className={styles.rating}>
            <Rating readonly initialRating={props.rating}
                emptySymbol="far fa-star" 
                fullSymbol="fas fa-star" 
                fractions={2} 
            />
            <p>{props.reviewCount}</p>
        </div>
    );
}