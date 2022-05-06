import React from 'react';
function Form() {
  return (
    <div className='pform'>
        <h1 className='underline'>RECRUIT FORM</h1>
        <h4>Amet minim mollit non deserunt ullamco est sit aliquatgo dolor do amet sint. Velit officia consequat Amet minimuu mollit non deserunt ullamco.</h4>
        <form className='form'>
            <div>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1'>
                        <label className='pr-2'>Name:</label>
                        <input  type="text"/>
                    </div>
                    <div className='col-span-1'>
                        <label >Student ID:</label>
                        <input  type="text"/>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <label>Facebook link:</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <label>Phone number:</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <label>Short introduction about yourself:</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <label>Short introduction about your project:</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <label>Number of members required:</label>
                        <input type="text"/>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;
