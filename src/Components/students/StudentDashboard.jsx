import React from 'react'
import {Link} from 'react-router-dom'
import { FilterButton , AddStudent } from '../Assets/Buttons/Buttons';
import './index.scss';


export default function Dashboard() {
  return (
    <div className='student-dashboard-wrapper'>
      <div className='student-main-bord'>
        <div className='notifaction-box mb-5'>
          <div className='d-flex align-itmes-center justify-content-between ' >
            <div className='d-flex'>
              <svg width="24" height="24" fill="#003384" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 13h-2V7h2v6zM13 17h-2v-2h2v2z" fill="current"></path>
                  <path fill-rule="evenodd" 
                  clip-rule="evenodd" d="M4.685 17.315l.85 3.584 3.67-.3L12 23l2.794-2.4 3.672.3.85-3.585 3.146-1.916L21.042 12l1.42-3.4-3.147-1.915-.85-3.584-3.67.3L12 1 9.206 3.4l-3.672-.3-.85 3.585-3.146 1.916L2.958 12l-1.42 3.4 3.147 1.915zm5.824 1.767l-1.466-.476-1.959.16-.453-1.912-.906-1.248-1.679-1.022.757-1.813v-1.542l-.757-1.813 1.679-1.022.906-1.248.453-1.912 1.96.16 1.465-.476L12 3.637l1.49 1.28 1.467.477 1.959-.16.453 1.912.906 1.248 1.679 1.022-.758 1.813v1.542l.758 1.813-1.679 1.022-.906 1.248-.453 1.912-1.96-.16-1.465.476L12 20.363l-1.49-1.28z" 
                  fill="current">
                  </path>
                </svg>
                <p>
                  Exciting new updates on how to manage your leads. <a href="#">Click here to learn more</a> or
                  <a href="#">switch back to the new layout.</a>
                </p>
            </div>
             <div>
             <svg role="img" width="24" height="24" fill="#003384" xmlns="http://www.w3.org/2000/svg"><path d="M7.707 6.293a1 1 0 00-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 101.414 1.414L12 13.414l4.293 4.293a1 1 0 001.414-1.414L13.414 12l4.293-4.293a1 1 0 00-1.414-1.414L12 10.586 7.707 6.293z" fill="#003384"></path></svg>
             </div>
          </div>
        </div>
        <div className='heading-box mb-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className='mb-0'>Students</h4>
            <div className='btn_box d-flex'>
              <div className='mr-4'>
                <FilterButton  />
              </div>
             <Link to="/add-student">
              <AddStudent/>
              </Link>
            </div>
          </div>
        </div>
        <div className='main-table-box'>
          <div className='table_main'>
            <table cellPadding={4} cellSpacing={4}>
              <thead>
                <th >Action</th>
                <th>student id</th>
                <th>Student Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>nationality</th>
                <th>Recruitment Partner</th>
                <th>recruiter type</th>
                <th>education</th>
                <th>Applications</th>
                <th>referral source </th>
                <th>lead status</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='dot_icon text-center'>
                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                  </td>
                  <td><a href="#">770236</a></td>
                  <td><Link to="/edit-student">archithitech@gmail.com</Link></td>
                  <td><span>Archit</span></td>
                  <td><span>tiwari</span></td>
                  <td><span></span></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>staff</span></td>
                  <td><span>Grade 1 (India)</span></td>
                  <td><span></span></td>
                  <td><span>Facebook</span></td>
                  <td><span>New Lead</span></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <div className='dot_icon text-center'>
                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                  </td>
                  <td><a href="#">770236</a></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>Archit</span></td>
                  <td><span>tiwari</span></td>
                  <td><span></span></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>staff</span></td>
                  <td><span>Grade 1 (India)</span></td>
                  <td><span></span></td>
                  <td><span>Facebook</span></td>
                  <td><span>New Lead</span></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <div className='dot_icon text-center'>
                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                  </td>
                  <td><a href="#">770236</a></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>Archit</span></td>
                  <td><span>tiwari</span></td>
                  <td><span></span></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>staff</span></td>
                  <td><span>Grade 1 (India)</span></td>
                  <td><span></span></td>
                  <td><span>Facebook</span></td>
                  <td><span>New Lead</span></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <div className='dot_icon text-center'>
                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                  </td>
                  <td><a href="#">770236</a></td>
                  <td><Link to="/edit-student">archithitech@gmail.com</Link></td>
                  <td><span>Archit</span></td>
                  <td><span>tiwari</span></td>
                  <td><span></span></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>staff</span></td>
                  <td><span>Grade 1 (India)</span></td>
                  <td><span></span></td>
                  <td><span>Facebook</span></td>
                  <td><span>New Lead</span></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <div className='dot_icon text-center'>
                      <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    </div>
                  </td>
                  <td><a href="#">770236</a></td>
                  <td><Link to="/edit-student">archithitech@gmail.com</Link></td>
                  <td><span>Archit</span></td>
                  <td><span>tiwari</span></td>
                  <td><span></span></td>
                  <td><a href="#">archithitech@gmail.com</a></td>
                  <td><span>staff</span></td>
                  <td><span>Grade 1 (India)</span></td>
                  <td><span></span></td>
                  <td><span>Facebook</span></td>
                  <td><span>New Lead</span></td>
                </tr>
              </tbody>

            </table>
          
          </div>
        </div>
      </div>
    </div>
  )
}
