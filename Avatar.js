import React from 'react';

const user = {
    name: "Maria Sklodowska-Curie",
    pictureUrl: "https://en.wikipedia.org/wiki/File:Marie_Curie_c._1920s.jpg"
}

// Avatar.js

const Avatar = () => {
  return (
    <div className="avatar-container">
      <h2 className="header" style={{fontSize: '24px',color: 'blue'}}>
        {user.name}
        </h2>
      <img className="avatar-image" 
      src={user.pictureUrl} 
      alt="User Avatar" 
      style={{width:'100px',borderRadius:'50%'}}
      />
    </div>
  );
};

export default Avatar;
