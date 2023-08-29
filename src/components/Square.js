// import {useState} from 'react'
const Square = ({value, onSquareClick}) => {
//   const [value, setValue] = useState(null)
//   const handleClick = () => {
//       console.log(`click`)
//       setValue(`x`)
//   }
  
  return (
    <button className="square" 
    onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
export default Square;
