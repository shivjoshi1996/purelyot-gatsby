import React from 'react';

export default function HomeServices({ services }) {
  const servicesArray = services.nodes;
  console.log(servicesArray);
  return (
    <>
      <h2>Services We Provide</h2>
      <p>Lorem</p>
      {servicesArray.map((service) => (
        <div key={service.serviceTitle}>
          <img
            src={service.serviceImage.asset.gatsbyImageData.images.fallback.src}
          />
          <h3>{service.serviceTitle}</h3>
          <p>{service.serviceDescription}</p>
        </div>
      ))}
    </>
  );
}
