

const CustomList = (prop) => {
  const { list1 } = prop;
  
  return (
    <ul>
      {
        list1.map((eachItem, index) => (
          <li key={index}>{eachItem}</li>
        ))
      }
    </ul>
  );
}

export default CustomList;
