import React from 'react';
import '../styles.css';

const Header = ({restaurantLogo }) => {
    return (
      <div className="text-center mb-4">
        <h1 className="display-4">
          <img className="img" src={restaurantLogo} alt="logo" />Campus Cafe
        </h1>
        <p className="lead">
          <span className="cursive-text">Delicious, From-Scratch Recipes Close at Hand</span><br />
          The Fresh Choice of UT!
        </p>
      </div>
    );
  };
  
  export default Header;
