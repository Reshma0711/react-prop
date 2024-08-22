



const CustomImage = (props) => {
  const{source,height,width} = props; // Corrected destructuring syntax

  return (
    <>
      <img src={source} height={height} width={width} />
      
    </>
  );
}

export default CustomImage;
