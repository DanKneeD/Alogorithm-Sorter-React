import InputRange from "react-input-range";

const Footer = ({
  sort,
  bubbleSort,
  selectionSort,
  displayNum,
  displayArrayCount,
  changeLineWidth,
  changeSortingSpeed,
}) => {
  return (
    <div className='Footer'>
      <button onClick={sort}>Randomize </button>
      <button onClick={bubbleSort}> Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
    </div>
  );
};
/* 

<div className='displayDiv'> Number of comparisons {displayNum}</div>
      <div className='displayDiv'>
        Number of Access's to Array {displayArrayCount}
      </div>

      <label for='widths'> Line Widths</label>
      <select name='widths' id='widths' onChange={changeLineWidth}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
        <option value='75'>75</option>
        <option value='100'>100</option>
        <option value='150'>150</option>
      </select>
      
        <label for='speeds'> Sorting Speed</label>
      <select name='speeds' id='speeds' onChange={changeSortingSpeed}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
        <option value='75'>75</option>
        <option value='100'>100</option>
        <option value='150'>150</option>
      </select>
      */
export default Footer;
