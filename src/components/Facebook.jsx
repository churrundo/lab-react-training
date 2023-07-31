import React, { useState } from 'react';

function Facebook({ profiles }) {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [...new Set(profiles.map((profile) => profile.country))];

    return (
    <div>
      {countries.map((country) => (
        <button key={country} onClick={() => setSelectedCountry(country)}>
          {country}
        </button>
      ))}

      <div className="profile-container">
        {profiles.map((profile) => (
          <div className={`profile-card ${
              selectedCountry === profile.country ? 'highlighted' : ''
            }`}
            key={profile.firstName + profile.lastName}>            
            <img
              className="profile-img"
              src={profile.img}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            <div className="profile-info">
              <p>First Name: {profile.firstName}</p>
              <p>Last Name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
