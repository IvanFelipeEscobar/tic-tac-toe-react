// import {useState} from 'react'
const Square = ({value}) => {
    // const [value, setValue] = useState(null)
    // const handleClick = () => {
    //     console.log(`click`)
    //     setValue(`x`)
    // }
    // return (
    //     <button className="square" onClick={handleClick}>{value}</button>
    // )
    return <button className='square'>{value}</button>
}
export default Square