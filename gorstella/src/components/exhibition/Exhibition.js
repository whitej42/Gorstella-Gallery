import './Exhibition.css';

function Exhibition() {

  let exhibitionTitle = 'November 2022 Exhibition'

  let bulletin = `Art Demonstration by CLARE SHAUGHNESSY
  Saturday 12th November 11.30am`;

  return (
    <div className='exhibition'>
      <h2 className='exhibition-title'>{exhibitionTitle}</h2>
      <h4 className='bulletin'>{bulletin}</h4>
      <p>
        Exhibition features work by Lesley Dearn, Kate Evans, Denise Heywood, Andrew Hood, Sian McGill, 
        Clare Shaughnessy, Richard Spare and Giles Ward 
      </p>
      <p>
        The exhibition continues: 
        Saturday and Sunday 12th and 13th November 11.00-5.00pm
      </p>
    </div>
  );
}

export default Exhibition;