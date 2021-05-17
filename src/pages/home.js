import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <header class="text-gray-600 body-font">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}

                        </a>
                        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                            <div style={{ color: 'white', backgroundColor: 'blue' }} class="mr-5 hover:text-gray-900">Patient</div>
                            <div class="mr-5 hover:text-gray-900">Calendar</div>
                            <div class="mr-5 hover:text-gray-900">User</div>
                            <div class="mr-5 hover:text-gray-900">Billing</div>
                            <i class="fa fa-bell" aria-hidden="true"></i>
                        </nav>

                    </div>
                </header>


                <div id="slide-out" class="side-nav fixed">
                    <ul class="custom-scrollbar">


                        <li>
                            <ul class="social">
                                <li><a href="#" class="icons-sm fb-ic"><i class="fab fa-facebook-f"> </i></a></li>
                                <li><a href="#" class="icons-sm pin-ic"><i class="fab fa-pinterest"> </i></a></li>
                                <li><a href="#" class="icons-sm gplus-ic"><i class="fab fa-google-plus-g"> </i></a></li>
                                <li><a href="#" class="icons-sm tw-ic"><i class="fab fa-twitter"> </i></a></li>
                            </ul>
                        </li>

                        <h2>Patients</h2>

                        <li>
                            <form class="search-form" role="search">
                                <div class="form-group md-form mt-0 pt-1 waves-light">
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                            </form>
                        </li>

                        <li>
                            <ul class="collapsible collapsible-accordion">
                                <li><div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#3498db', margin: 10 }} class="collapsible-header waves-effect arrow-r">
                                    <img style={{ borderRadius: 120, width: 70, height: 70, marginRight: 10 }} src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                                    <div>
                                        <span style={{color: 'white'}}>Sara Smith</span><br />
                                        <span style={{color: 'white'}}>15 aug 2020</span>

                                    </div>
                                    
                                </div >


                                </li>

                                <li><div style={{ display: 'flex', flexDirection: 'row', margin: 10 }} class="collapsible-header waves-effect arrow-r">
                                    <img style={{ borderRadius: 120, width: 70, height: 70, marginRight: 10 }} src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                                    <div>
                                        <span style={{color: 'black'}}>Patrick Page</span><br />
                                        <span style={{color: 'black'}}>15 aug 2020</span>

                                    </div>
                                    
                                </div >


                                </li>
                                <li><div style={{ display: 'flex', flexDirection: 'row',  margin: 10 }} class="collapsible-header waves-effect arrow-r">
                                    <img style={{ borderRadius: 120, width: 70, height: 70, marginRight: 10 }} src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                                    <div>
                                        <span style={{color: 'black'}}>Daniel diemon</span><br />
                                        <span style={{color: 'black'}}>15 aug 2020</span>

                                    </div>
                                    
                                </div >


                                </li>
                                <li><div style={{ display: 'flex', flexDirection: 'row', margin: 10 }} class="collapsible-header waves-effect arrow-r">
                                    <img style={{ borderRadius: 120, width: 70, height: 70, marginRight: 10 }} src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />
                                    <div>
                                        <span style={{color: 'black'}}>Albert fernando</span><br />
                                        <span style={{color: 'black'}}>15 aug 2020</span>

                                    </div>
                                    
                                </div >


                                </li>


                            </ul>
                        </li>

                    </ul>
                    <div class="sidenav-bg rgba-blue-strong"></div>
                </div>

                <div class="card text-left" style={{ marginLeft: '20%' }} >

                    <div class="card-body">
                        <h5 class="card-title">Patient Information</h5>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                            <div>
                                <img style={{ borderRadius: 120, width: 120, height: 120, marginRight: 70 }} src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Service" />


                            </div>
                            <table>
                                <h3> Sara Smith</h3>
                                <tr>
                                    <td>
                                        <p class="card-text">Phone: 12345</p>
                                        <p class="card-text">Email: ss@gmail.com</p>
                                        <p class="card-text">Gender: Female</p>
                                        <p class="card-text">Age: 45</p>
                                    </td><br /><br />

                                    <td>
                                        <p class="card-text">Surgery Type: Rotator Cuff Repair</p>
                                        <p class="card-text">Surgery Date: 15 Aug 2020</p>
                                        <p class="card-text">Height(cm): 163</p>
                                        <p class="card-text">Weight(lb): 110</p>
                                        <p class="card-text">BMI: 19</p>
                                    </td><br /><br />

                                    <td>

                                        <p class="card-text">Anesthiologist: 12345</p>
                                        <p class="card-text">Anesthiologist Phone: 301-888-7453</p>
                                        <p class="card-text">Anesthiologist Email: christiana@h3a.com</p>

                                    </td>
                                    <br />
                                    <td>
                                        <div style={{ borderRadius: 120, width: 120, height: 120, marginRight: 70, backgroundColor: 'green', color: 'white' }}>

                                        </div>
                                    </td>

                                </tr>

                            </table>
                        </div>

                    </div>
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">List of prior Surgeries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">List of Medical Diagnosis</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">List of Medications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Airway Evaluation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Anesthesia Clearance and Recommendation</a>
                            </li>

                        </ul>
                    </div>

                    <br />

                    <div>
                        <table>
                            <th>First time surgery</th>
                            <tr>
                                <td>No</td>
                            </tr>
                        </table><br />
                        <table>
                            <th>Family history of surgical complications</th>
                            <tr>
                                <td>No</td>
                            </tr>
                        </table><br />
                        <br />
                        <table>
                            <th>If yes, please provide more detail</th>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero
                                    laudantium inventore molestiae!
              </td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <tr>
                                <th>Previous Surgeries</th>
                            </tr>
                            <tr>
                                <th>Surgery Type</th>
                                <th>Date</th>
                                <th>Anesthesia Type</th>
                                <th>Surgical Complications</th>
                                <th>
                                    Anesthetic Complications (nausea, vomating, difficult
                                    intubation)
              </th>
                                <th></th>
                            </tr>

                            <tr>
                                <td>Shoulder reconstruction</td>
                                <td>January 2008</td>
                                <td>General "Breathing Tube"</td>
                                <td>No</td>
                                <td>No</td>
                                <tr>


                                </tr>
                            </tr>
                        </table>
                        <br />
                    </div>

                </div>

            </div>




        );

    }
}

export default Home;