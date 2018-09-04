import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105216.9632032464!2d-93.10322409216188!3d34.50212117447643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cd2a9388325047%3A0xbaa8bef944021e0d!2sHot+Springs%2C+AR!5e0!3m2!1sen!2sus!4v1536094614873"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
