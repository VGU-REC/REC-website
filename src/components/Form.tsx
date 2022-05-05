import React from 'react';
function Form() {
  return (
    <div className='pform'>
        <h1>RECRUIT FORM</h1>
        <h4>Amet minim mollit non deserunt ullamco est sit aliquatgo dolor do amet sint. Velit officia consequat Amet minimuu mollit non deserunt ullamco.</h4>
        <form className='form'>
            <div className="formgrid">
                <div className='half'>
                    <label>Name:</label>
                    <input type="text"/>
                    <label>Student ID:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Facebook link:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Phone number:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Short introduction about yourself:</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Short introduction about your project:</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Number of members required:</label>
                    <input type="text"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;
