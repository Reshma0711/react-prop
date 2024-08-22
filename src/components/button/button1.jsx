



const CustomButton=(prop)=>{
    const {text,onPress,bgcolor}=prop
    return(
          <button onClick={onPress} style={{backgroundColor:bgcolor}}>{text}</button>
    )
}

export default CustomButton