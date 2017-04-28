import React from 'react';

const Section = ({ title, level, children }) => {
  const Heading = `h${level}`;
  const Href = '#' + title.replace(' ', '-').toLowerCase();
  return (
    <section>
      <a href={Href}/>
      <Heading>{title}</Heading>
      {children}
    </section>
  )
};

export default Section;

