import React, { useState } from 'react'
import './index.scss';
import Select from 'react-select';
import {Cancelbtn,CreateStudent  } from '../Assets/Buttons/Buttons';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default function AddStudent() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
    <div className='main_addstudent'>
      <div className='student_box'>
        <div className='box-text'>
          <div className='heading text-center'>
            <h4>Add New Student</h4>
          </div>
          <div className='box_input_text'>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <div className='d-flex align-items-center'>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"></path></svg>
                <span className='ml-2 d-block'>Please fill out all of the missing requirements.</span>
              </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className='mt-4 mb-5'>Please provide a legitimate email address for your student that is actively monitored by them. Their country is required to forward applications to our partner schools. Note: ApplyBoard will not communicate with your student via email or other methods.</p>
            <div className='input_textarea'>
              <div className='mb-4'>
                <h5 className='mb-3'>CONTACT INFORMATION</h5>
                <div className='row'>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Email' />
                  </div>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Phone Number' />
                  </div>
                </div>
              </div>
              <div className='mb-4'>
                <h5 className='mb-3'>PERSONAL INFORMATION</h5>
                <div className='row'>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Given Name' />
                  </div>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Middle Name' />
                  </div>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Birth Date' />
                  </div>
                  <div className='col-lg-6'>
                   <input type="text" placeholder='Phone Number' />
                  </div>
                  <div className='col-lg-6'>
                  <div className='add-student-wrapper mb-3'>
                    <Select
                        closeMenuOnSelect={true}
                        options={[
                            {
                                value: "Last Month",
                                label: "Last Month"
                            },
                            {
                                value: "Last Year",
                                label: "Last Year"
                            },
                            {
                                value: "Week To Date",
                                label: "Week To Date"
                            },
                            {
                                value: "Month To Date",
                                label: "Month To Date"
                            },
                            {
                                value: "Quarter To Date",
                                label: "Quarter To Date"
                            },
                            
                        ]}
                        className="basic-multi-select mr-md-2 mb-2 mb-md-0 w-100"
                        name="colors"
                        id="user-dropdown"
                        classNamePrefix="select"
                        placeholder="Select Date"
                        onChange={(selectedOption) => { setSelectedOption(selectedOption); }}
                        value={selectedOption}
                    />
                  </div>
                  </div>
                </div>
              </div>
              <div className='mb-4'>
               <h5 className='mb-3'>PERSONAL INFORMATION</h5>
               <div className='row'>
               <div className='col-lg-6'>
                  <div className='add-student-wrapper mb-3'>
                    <Select
                        closeMenuOnSelect={true}
                        options={[
                            {
                                value: "Last Month",
                                label: "Last Month"
                            },
                            {
                                value: "Last Year",
                                label: "Last Year"
                            },
                            {
                                value: "Week To Date",
                                label: "Week To Date"
                            },
                            {
                                value: "Month To Date",
                                label: "Month To Date"
                            },
                            {
                                value: "Quarter To Date",
                                label: "Quarter To Date"
                            },
                            
                        ]}
                        className="basic-multi-select mr-md-2 mb-2 mb-md-0 w-100"
                        name="colors"
                        id="user-dropdown"
                        classNamePrefix="select"
                        placeholder="Select Date"
                        onChange={(selectedOption) => { setSelectedOption(selectedOption); }}
                        value={selectedOption}
                    />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                  <div className='add-student-wrapper mb-3'>
                    <Select
                        closeMenuOnSelect={true}
                        options={[
                            {
                                value: "Last Month",
                                label: "Last Month"
                            },
                            {
                                value: "Last Year",
                                label: "Last Year"
                            },
                            {
                                value: "Week To Date",
                                label: "Week To Date"
                            },
                            {
                                value: "Month To Date",
                                label: "Month To Date"
                            },
                            {
                                value: "Quarter To Date",
                                label: "Quarter To Date"
                            },
                            
                        ]}
                        className="basic-multi-select mr-md-2 mb-2 mb-md-0 w-100"
                        name="colors"
                        id="user-dropdown"
                        classNamePrefix="select"
                        placeholder="Select Date"
                        onChange={(selectedOption) => { setSelectedOption(selectedOption); }}
                        value={selectedOption}
                    />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                  <div className='add-student-wrapper mb-3'>
                    <Select
                        closeMenuOnSelect={true}
                        options={[
                            {
                                value: "Last Month",
                                label: "Last Month"
                            },
                            {
                                value: "Last Year",
                                label: "Last Year"
                            },
                            {
                                value: "Week To Date",
                                label: "Week To Date"
                            },
                            {
                                value: "Month To Date",
                                label: "Month To Date"
                            },
                            {
                                value: "Quarter To Date",
                                label: "Quarter To Date"
                            },
                            
                        ]}
                        className="basic-multi-select mr-md-2 mb-2 mb-md-0 w-100"
                        name="colors"
                        id="user-dropdown"
                        classNamePrefix="select"
                        placeholder="Select Date"
                        onChange={(selectedOption) => { setSelectedOption(selectedOption); }}
                        value={selectedOption}
                    />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                  <div className='add-student-wrapper mb-3'>
                    <Select
                        closeMenuOnSelect={true}
                        options={[
                            {
                                value: "Last Month",
                                label: "Last Month"
                            },
                            {
                                value: "Last Year",
                                label: "Last Year"
                            },
                            {
                                value: "Week To Date",
                                label: "Week To Date"
                            },
                            {
                                value: "Month To Date",
                                label: "Month To Date"
                            },
                            {
                                value: "Quarter To Date",
                                label: "Quarter To Date"
                            },
                            
                        ]}
                        className="basic-multi-select mr-md-2 mb-2 mb-md-0 w-100"
                        name="colors"
                        id="user-dropdown"
                        classNamePrefix="select"
                        placeholder="Select Date"
                        onChange={(selectedOption) => { setSelectedOption(selectedOption); }}
                        value={selectedOption}
                    />
                    </div>
                  </div>

               </div>
              </div>
            </div>
            <div className='check_required'>
               <div className='d-flex align-items-baseline'>
                 <input type="checkbox"  />
                 <p className='ml-2'>I confirm that I have received express written consent from the student whom I am creating this profile for and I can provide proof of their consent upon request. To learn more please refer to the
                  <a href="#" className='mx-1'>Personal Data Consent</a> article.
                 </p>
               </div>
            </div>
            
          </div>
          <div className='btn-from d-flex'>
               <div className='text-center w-50' >
                 <Cancelbtn/>
               </div>
               <div className='text-center w-50 createstudent'>
                 <CreateStudent/>
               </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}
