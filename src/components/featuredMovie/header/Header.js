import React from 'react';
import './Header.css';

export default ({black}) =>{
  
  
  
  return(
    <header className={black ? 'black':''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png" alt="netflix" />
        </a>
      </div>
      <div className="header--user">
        <img src="https://media-exp3.licdn.com/dms/image/C4E03AQEdaem4Az0uAw/profile-displayphoto-shrink_200_200/0/1616257094323?e=1630540800&v=beta&t=mjHaISeaF4tyBZ0Nk69y1JyROIPZtYZw4E6BA_tF-cc" alt="User" />
      </div>
    </header>
  )
}