import React, { useState } from 'react'
import './index.scss';
import Select from 'react-select';

import {Cancelbtn,CreateStudent  } from '../Assets/Buttons/Buttons';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default function EditStudent() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [counter, setCounter] = useState(1);
  
  return (
    <>
    <div className='editstudent_main'>
      <div className='user-details-main'>
        <div className='d-flex'>
          <div className='round_shap text-center ' ><span>AT</span></div>
          <div className='user_text ml-4'>
            <h4>Archit Tiwari</h4>
            <div className='d-flex num_email'>
              <div className='num_ank'><span>770236</span></div>
              <div className='email'><a href="#">archithitech@gmail.com</a></div>
              <div className='number'><a  href="tel:+6494461709">+91 88820 41133</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className='edit-student-wrapper'>
        <ul >
          <li onClick={() => setCounter(1)}> <span>Profile</span> </li>
          <li onClick={() => setCounter(2)}> <span>Search and Apply</span> </li>
          <li onClick={() => setCounter(3)}> <span>Applications</span> </li>
          <li onClick={() => setCounter(4)}> <span>Payments</span> </li>
        </ul>
      </div>
      {
        counter==1 ? (
          <div className='profile-wrapper'>
            <div className='editstudent-progress'>
             <div className=''>
             editstudent-progress
             </div>
            </div>
            <div className='to-switch d-flex justify-content-end mb-3'>
              <div className='text-center'>
                <p className='mb-2'>Single-Page View</p>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className='from-main'>
              <div className='bg-white-box'>
                <div className='text-center info-alert ' >
                  <div className='d-flex '>
                    <div className='info_text'> 
                      <p> Please enter your information accurately and correctly. All fields will be sent to the selected school upon submission of your application on ApplyBoard.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='from-title'>
                <h3>Registration Date: February 26th, 2022</h3>
              </div>
              <div className='bg-white-box mb-3'>
                <div className='from-heading'>
                  <h4>Personal Information</h4>
                  <p>(As indicated on your passport)</p>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">First Name <span>*</span> </label>
                      <input type="text" placeholder='Email' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Middle Name </label>
                      <input type="text" placeholder='Enter Middle Name...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Last Name <span>*</span> </label>
                      <input type="text" placeholder='Enter Last Name...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Date of Birth<span>*</span> </label>
                      <input type="text" placeholder='Birth Date' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">First Language <span>*</span> </label>
                      <input type="text" placeholder='Enter First Language...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details drop_down'>
                      <label htmlFor="#">Country of Citizenship <span>*</span> </label>
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
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Passport Number <span>*</span> </label>
                      <input type="text" placeholder='Enter Passport Number...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Passport Expiry Date<span>*</span> </label>
                      <input type="text" placeholder='yyyy-mm-dd' />
                    </div>
                  </div>
                </div>
                <div className='from-heading mt-5 mb-4 d-flex align-items-center'>
                  <h4>Address Detail</h4>
                  <div className='alert-bg d-flex ml-3' >
                    <svg width="24" height="24"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" fill="#F0C"></path></svg>
                    Please make sure to enter the student's residential address. Organization address will not be accepted.
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-8'>
                    <div className='input_details'>
                      <label htmlFor="#">Address <span>*</span> </label>
                      <input type="text" placeholder='Address' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">City/Town</label>
                      <input type="text" placeholder='Enter City/Town...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                  <div className='input_details drop_down'>
                      <label htmlFor="#">Country<span>*</span> </label>
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
                  <div className='col-lg-4'>
                    <div className='input_details drop_down'>
                      <label htmlFor="#">Province/State<span>*</span> </label>
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
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Postal/Zip Code <span>*</span> </label>
                      <input type="text" placeholder='Enter Postal/Zip Code...' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                  <div className='input_details'>
                      <label htmlFor="#">Email<span>*</span> </label>
                      <input type="text" placeholder='Enter Email' />
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='input_details'>
                      <label htmlFor="#">Phone Number <span>*</span> </label>
                      <input type="text" placeholder='Enter Phone Number...' />
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className='bg-white-box mb-3' >
                <div className='from-heading'>
                  <h4 className='mb-4'>Education Summary</h4>
                 
                </div>
                <div className='row align-items-center'>
                    <div className='col-lg-4'>
                    <div className='input_details drop_down'>
                      <label htmlFor="#">Country of Education<span>*</span> </label>
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
                    <div className='col-lg-4'>
                    <div className='input_details drop_down'>
                      <label htmlFor="#">Highest Level of Education<span>*</span> </label>
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
                    <div className='col-lg-4'>
                      <div className='input_details drop_down'>
                        <label htmlFor="#">Grading Scheme<span>*</span> </label>
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
                    <div className='col-lg-4'>
                      <div className='input_details drop_down'>
                        <label htmlFor="#">Grade Average<span>*</span> </label>
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
                    <div className='col-lg-4'>
                      <div className='checkbox_box d-flex'>
                        <div className='d-flex align-items-center' >
                          <input type="checkbox" />
                          <span className='ml-3' >Graduated from most recent school</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='bg-white-box mb-3'>
                <div className='from-heading'>
                  <h4 className='mb-4'>Schools Attended</h4>
                </div>  
                <div className='alert-box'>
                  <div className='d-flex align-items-center mb-3' >
                    <div className='alert-name mr-4' >
                      <span>Enter the school attended for Grade 1</span>
                    </div>
                    <button >
                      Add Now +
                    </button>
                  </div>
                 <button>Add Attended School</button>   
                </div> 
              </div>
              <div className='bg-white-box mb-3'>
                <div className='from-heading'>
                  <h4 className='mb-4'>Test Scores</h4>
                 </div> 
                 <div className='row'>
                  <div className='col-lg-2'>
                  <div className='input_details drop_down'>
                        <label htmlFor="#">Province/State<span>*</span> </label>
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
              <div className='bg-white-box mb-3'>
                <div className='from-heading'>
                  <h4 className='mb-4'>Background Information</h4>
                </div>
                <div className='info_radio'>
                  <div className='d-flex align-items-center'>
                    <p className='mb-0'>Have you been refused a visa from Canada, the USA, the United Kingdom, New Zealand, Australia or Ireland?</p>
                    <span>*</span>
                  </div>
                  <div className='d-flex mt-2'>
                    <div>
                      <input type="radio" name="vehicle1" value="Bike"/>
                      <label className='ml-2' for="vehicle1"> Yes</label>
                    </div>
                    <div className='ml-3'>
                      <input type="radio" name="vehicle1" value="Bike"/>
                      <label className='ml-2' for="vehicle1">No</label>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='bg-white-box mb-3'>
                 <div className='from-heading'>
                   <h4 className='mb-4'>Additional Qualifications</h4>
                   <div className='input_details drop_down'>
                      <label htmlFor="#">Province/State<span>*</span> </label>
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
                    <div className='input_details'>
                      <label htmlFor="#">Passport Number <span>*</span> </label>
                      <textarea type="text" className='w-100' placeholder='Enter Passport Number...' />
                    </div>
                 </div>
              </div>
              <div className='bg-white-box mb-3'>
                 <div className='from-heading'>
                    <h4 className='mb-4'>Background Information</h4>
                 </div>
                 <div className='documents-box'>
                    <h4>Passport Required (Automated)</h4>
                    <p>Please provide a clear and legible photocopy of the applicant's passport which meets the following requirements:</p>
                    <div className='row align-items-center mb-4'>
                      <div className='col-lg-8'>
                        <ul className='mt-3'>
                          <li>The acceptable formats of the photocopy are .PDF, .JPEG or .PNG</li>
                          <li> The photocopy needs to be entire with no cut-off at the edges</li>
                          <li> The photocopy should include all pages in the passport which clearly present the applicant's signature, biographical info including name, photo, date and place of birth, passport/travel document number, issue date and expiration date and etc</li>
                        </ul>
                      </div>
                      <div className='col-lg-4'>
                         <div className='upload_icon text-right'><img src="https://assets.applyboard.com/app/rps/assets/9a378186679c2ff6e8455cae322b151f.png" alt="" /></div>   
                      </div>
                    </div>
                    <div>
                      <p>Please be advised that the file size limit of the photocopy is 20MB.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className='footer mt-5'>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <a href="#" className='footer_link'>© 2022 ApplyBoard.com</a>
                </div>
                <div className='col-lg-4'>
                  <ul className='social_icon'>
                    <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDJDMjAgMC45IDE5LjEgMCAxOCAwSDJDMC45IDAgMCAwLjkgMCAyVjE0QzAgMTUuMSAwLjkgMTYgMiAxNkgxOEMxOS4xIDE2IDIwIDE1LjEgMjAgMTRWMlpNMTggMkwxMCA3TDIgMkgxOFpNMTggMTRIMlY0TDEwIDlMMTggNFYxNFoiIGZpbGw9IiM2MDZBODQiLz4KPC9zdmc+Cg==" alt="" /></a></li>
                    <li><a href="#"><img src="https://assets.applyboard.com/app/rps/assets/1561f97010b725af52de94d63b218470.svg" alt="" /></a></li>
                    <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDkgMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zIDQuMDAwMjhDMyAxLjY2MDEyIDUuMDAwMSAtMC4xODAyNDYgNy4zMzIxOCAwLjAxNDA5MzNMOSAwLjE1MzA3OFYzLjE1MzI4SDdDNi40NDc3MiAzLjE1MzI4IDYgMy42MDEgNiA0LjE1MzI4VjcuMTUzMDhIOUw4LjUgMTAuMTUzMUg2VjE4LjE1MzNIM1YxMC4xNTMxSDBWNy4xNTMwOEgzVjQuMDAwMjhaIiBmaWxsPSIjNjA2QTg0Ii8+Cjwvc3ZnPgo=" alt="" /></a></li>
                    <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjYwNiAyLjk5NUMxNy41MyAyLjY5NyAxNy4zMTQgMi40NzIgMTcuMDY3IDIuNDAzQzE2LjYzIDIuMjggMTQuNSAyIDEwIDJDNS41IDIgMy4zNzIgMi4yOCAyLjkzMSAyLjQwM0MyLjY4NyAyLjQ3MSAyLjQ3MSAyLjY5NiAyLjM5NCAyLjk5NUMyLjI4NSAzLjQxOSAyIDUuMTk2IDIgOEMyIDEwLjgwNCAyLjI4NSAxMi41OCAyLjM5NCAxMy4wMDZDMi40NyAxMy4zMDMgMi42ODYgMTMuNTI4IDIuOTMyIDEzLjU5NkMzLjM3MiAxMy43MiA1LjUgMTQgMTAgMTRDMTQuNSAxNCAxNi42MjkgMTMuNzIgMTcuMDY5IDEzLjU5N0MxNy4zMTMgMTMuNTI5IDE3LjUyOSAxMy4zMDQgMTcuNjA2IDEzLjAwNUMxNy43MTUgMTIuNTgxIDE4IDEwLjggMTggOEMxOCA1LjIgMTcuNzE1IDMuNDIgMTcuNjA2IDIuOTk1Wk0xOS41NDMgMi40OThDMjAgNC4yOCAyMCA4IDIwIDhDMjAgOCAyMCAxMS43MiAxOS41NDMgMTMuNTAyQzE5LjI4OSAxNC40ODcgMTguNTQ2IDE1LjI2MiAxNy42MDUgMTUuNTI0QzE1Ljg5NiAxNiAxMCAxNiAxMCAxNkMxMCAxNiA0LjEwNyAxNiAyLjM5NSAxNS41MjRDMS40NSAxNS4yNTggMC43MDggMTQuNDg0IDAuNDU3IDEzLjUwMkMyLjk4MDIzZS0wOCAxMS43MiAwIDggMCA4QzAgOCAyLjk4MDIzZS0wOCA0LjI4IDAuNDU3IDIuNDk4QzAuNzExIDEuNTEzIDEuNDU0IDAuNzM4IDIuMzk1IDAuNDc2QzQuMTA3IC0xLjc4ODE0ZS0wNyAxMCAwIDEwIDBDMTAgMCAxNS44OTYgLTEuNzg4MTRlLTA3IDE3LjYwNSAwLjQ3NkMxOC41NSAwLjc0MiAxOS4yOTIgMS41MTYgMTkuNTQzIDIuNDk4Wk04IDExLjVWNC41TDE0IDhMOCAxMS41WiIgZmlsbD0iIzYwNkE4NCIvPgo8L3N2Zz4K" alt="" /></a></li>
                    <li><a href="#"><img src="https://assets.applyboard.com/app/rps/assets/527dcd913c23a942e2068912c471c040.svg" alt="" /></a></li>
                    <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNSA0QzMuNjA0NTcgNCA0LjUgMy4xMDQ1NyA0LjUgMkM0LjUgMC44OTU0MzEgMy42MDQ1NyAwIDIuNSAwQzEuMzk1NDMgMCAwLjUgMC44OTU0MzEgMC41IDJDMC41IDMuMTA0NTcgMS4zOTU0MyA0IDIuNSA0WiIgZmlsbD0iIzYwNkE4NCIvPgo8cGF0aCBkPSJNMSAxNVY1SDRWMTVIMVoiIGZpbGw9IiM2MDZBODQiLz4KPHBhdGggZD0iTTE1IDcuNzMwNzdDMTUgNS45NDY0NiAxMy41NTM1IDQuNSAxMS43NjkyIDQuNUMxMC40NjkgNC41IDkuMzIyNTEgNS4xNTgzNyA4LjY0NDk5IDYuMTU5OTRMOC41IDVINlYxNUg5VjguNUM5IDcuNjcxNTcgOS42NzE1NyA3IDEwLjUgN0MxMS4zMjg0IDcgMTIgNy42NzE1NyAxMiA4LjVWMTVIMTVWNy43MzA3N1oiIGZpbGw9IiM2MDZBODQiLz4KPC9zdmc+Cg==" alt="" /></a></li>
                  </ul>
                </div>
                <div className='col-lg-4'>
                  <ul className='footer_menu text-right'>
                      <li> <a href="#">Privacy policy</a></li>
                      <li> <a href="#">Terms & conditions</a></li>
                      <li> <a href="#">About</a></li>
                      <li> <a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ):null
      }
      {
        counter==2 ? (
          <div className='search-and-apply-wrapper'>
            <div className='search_box_main py-3'>
              <div className='d-flex justify-content-center'>
                <input type="text" placeholder='What would you like to study?' name="#" id="#" />
                <input type="text" placeholder='Where? e.g. school name or location' name="#" id="#" />
                <button>
                    <svg height="16" width="16" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 487.95 487.95">
                    <g>
                      <g>
                        <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
                          c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
                          c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>
                      </g>
                     </g>
                    </svg>
                    <span> Search</span>
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
               <div className=''>
               <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
               </div>
              </div>
              <div className='col-lg-8'>

              </div>
            </div>
          </div>
        ):null
      }
      {
        counter==3 ? (
          <div className='application-wrapper'>
            Application
          </div>
        ):null
      }
      {
        counter==4 ? (
          <div className='payment-wrapper'>
            Payment
          </div>
        ):null
      }
    </div>
    </>
  )
}

