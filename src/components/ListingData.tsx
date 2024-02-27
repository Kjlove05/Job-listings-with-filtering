

import { useState } from 'react';
import jobData from '../../data.json'
import Filters from './Filter'

const ListingData = () => {
   const [filters, setFilters] = useState<any[]>([]);


function handleFilters(tag: any) {

  if (filters.indexOf(tag) === -1) {
    setFilters((prevValue) => [...prevValue, tag]);
  }
}


function clearAll() {
  setFilters([]);
}


function clearFilter(tag: any) {
  setFilters(filters.filter((item) => item !== tag));
}

// Filter jobs based on selected tags
const filteredJobs = jobData.filter((item) => {
    const jobTags = [item.role, item.level, ...(item.languages || []), ...(item.tools || [])];
    return filters.every((tag) => jobTags.includes(tag));
  });

    return (
        <>
        <div>
          {filters.length > 0 && <Filters filters={filters} clearAll={clearAll} clearFilter={clearFilter} />}
        </div>
  
        {filteredJobs.map((item, index) => {
          const jobTags = [item.role, item.level, ...(item.languages || []), ...(item.tools || [])];
          return (
            <div className="container mt-5" key={index} style={{ width: '1200px', height: '140px' }}>
              <div className="row" style={{ backgroundColor: "white" }}>
                <div className="mt-4 mb-1 col-12">
                  <ul className="">
                    <li className="list-inline-item d-flex">
                      <div className="d-flex align-items-center col-6">
                        <div className="col-3">
                          <img className="rounded-circle" src={item.logo} width="80%" alt="Logo"/>
                        </div>
                        <div className="col-7">
                          <div className='d-flex mb-2'>
                            <div className={'mb-0 text-dark-cyan my-text-500' + (item.new == true ? ' col-3' : 'col-5')}><span>{item.company}</span></div>
                            <div className={'mb-0 col-4 my-text-500' + (item.new == true ? ' new' : '')}> <span className='circle'>{item.new == true ? 'New!' : ''}</span></div>
                            <div className={'mb-0 col-2 my-text-500 ml-5' + (item.featured == true ? ' featured' : '')}> <span className='circle'>{item.featured == true ? 'Featured' : ''}</span></div>
                          </div>
  
                          <div className="d-flex flex-row text-very-dark-grayish-cyan my-text-700 mb-2 position">
                            {item.position}
                          </div>
                          <div className='d-flex flex-row mb-2'>
                            <div className='mb-0 col-3 text-dark-grayish-cyan my-text-500'><span>{item.postedAt}</span></div>
                            <div className='mb-0 col-3 text-dark-grayish-cyan my-text-500'> <span>{item.contract}</span></div>
                            <div className='mb-0 col-3 text-dark-grayish-cyan my-text-500'> <span>{item.location}</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-end col-6">
                        {jobTags.map((tag, index) => {
                          return <button onClick={() => handleFilters(tag)} className="job-tag" key={index}> {tag} </button>
                        })}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </>

    );
  };
  
  export default ListingData;


