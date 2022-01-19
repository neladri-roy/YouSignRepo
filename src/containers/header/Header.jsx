import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import possibilityImage from '../../assets/possibility.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-image">
      <img src={possibilityImage} />
    </div>
    <div className="gpt3__header-content">
      
      <h1 className="gradient__text">Let's create an open world for Influencers. </h1>
      <p>Powered by our breakthrough AI systems, this place brings to you a new world of Blockchain enabled Next Gen Web3 Social Networking</p>
      <p>
        “Activate your followers, don’t just collect them like stamps.”
― Stacey Kehoe</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Instagram Username" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    
  </div>
);

export default Header;
