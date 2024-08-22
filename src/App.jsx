import './App.css';
import CustomImage from './components/images/image.jsx';
import CustomButton from './components/button/button1.jsx';
import CustomList from './components/lists/list1.jsx';
import receipeData from './receipedata.js'; // Corrected variable name
import MainHeading from './components/heading/heading1.jsx';
import {SecondaryHeading} from './components/heading/heading1.jsx'

const App = () => {
  return (
    <>
      {/* <CustomImage 
        source="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=" 
        height="200px" 
        width="200px" 
      />
      <CustomImage 
        source="https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        height="200px" 
        width="200px" 
      />
      <CustomButton 
        text="LOGIN" 
        onPress={() => {}} 
        bgcolor="Green" 
      />
      <CustomButton 
        text="SIGNUP" 
        onPress={() => {}} 
        bgcolor="Red" 
      />
      <CustomList list1={["apple", "mango", "guava", "pineapple", "custard apple", "grapes"]} /> */}
      
      {/* Corrected the map function */}
      {receipeData.map((eachReceipe) => {
        return (
          <div key={eachReceipe.name}>
            <MainHeading heading1={eachReceipe.name} />
            <CustomImage source={eachReceipe.image} height="200px" width="200px"/>
            <SecondaryHeading heading2={"ingredients required"}/>
            <CustomList list1={eachReceipe.ingredients}/>
            <SecondaryHeading heading={"instructions  required"}/>
            <CustomButton text={"StartPreparation"}/>
          </div>
        );
      })}
    </>
  );
}

export default App;
/