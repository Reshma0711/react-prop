const MainHeading = (props) => {
  const { heading1 } = props;
  return (
    <h1>{heading1}</h1> // Render the heading text inside an <h1> tag
  );
}

export default MainHeading;






const SecondaryHeading = (props) => {
  const { heading2 } = props;
  return (
    <h2>{heading2}</h2> // Render the heading text inside an <h2> tag
  );
}

export { SecondaryHeading };
