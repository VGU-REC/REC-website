import { Card, Carousel, Pagination } from 'components';

function RecruitingProjects() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>RECRUIT PROJECT</h1>
        </div>
        <div className='p-3'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export { RecruitingProjects };
