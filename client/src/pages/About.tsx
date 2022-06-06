import { Avatar } from 'components';

function About() {
  return (
    <div>
      <h1 className='text-3xl p-3 font-bold text-center'>ABOUT US</h1>
      <div className='text-center text-lg container'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
      <div className='grid grid-cols-3 p-3'>
        <div className=' container text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
        <div className=''>
          <img
            src="test.jpg"
            className="w-80 mb-4 mx-auto"
            alt="Avatar"
          />
        </div>
        <div className=''>meo</div>
      </div>
      <div className='text-center text-lg container'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</div>
      <h4 className='font-medium leading-tight text-3xl mt-0 mb-2 text-center'>Head members</h4>
      <div className='flex justify-center'>
        <div className='grid grid-cols-5 gap-16'>
          <div>
            <Avatar />
          </div>
          <div>
            <Avatar />
          </div>
          <div>
            <Avatar />
          </div>
          <div>
            <Avatar />
          </div>
          <div>
            <Avatar />
          </div>
        </div>
      </div>

    </div>
  );
}

export { About };
