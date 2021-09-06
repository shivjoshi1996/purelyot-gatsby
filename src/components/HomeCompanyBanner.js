import React from 'react';

export default function HomeCompanyBanner({
  whoWeAreTitle,
  whoWeAreDescription,
  whoWeAreCompanyName,
}) {
  return (
    <>
      <h3>{whoWeAreTitle}</h3>
      <p>{whoWeAreCompanyName}</p>
      <p>{whoWeAreDescription}</p>
    </>
  );
}
