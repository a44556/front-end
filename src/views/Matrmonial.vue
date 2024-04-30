<!--make template -->
<template>

  <div>
<NavbarLayout></NavbarLayout>


<section>
    <div class="gap gray-bg">
        <div class=" container-fluid ext-right">
            <div class="row" id="page-contents">
                <div class="col-lg-3">
                    <aside class="sidebar static left">
                        <div class="friend-box">
                            <div id="app">
                                <div class="frnd-meta">
                                    <img alt="" src="images/resources/frnd-figure3.jpg">
                                    <a class="main-btn2" href="#" title="" @click="openModal">Add  </a>

                                </div>

                                <div class="modal" tabindex="-1" role="dialog" v-show="isModalVisible">
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title">Registration Popup</h5>
                                          <button type="button" class="close" @click="closeModal">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                          <!-- Modal content goes here -->
                                          <h2>Step 1</h2>
                                          <button @click="nextStep">Next</button>
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                                          <button type="button" class="btn btn-primary" @click="submitRegistration">Submit</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>

                          
                        </div>
                       
                        
                    </aside>
                </div>
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="pitpoint-filter central-meta">
                                <ul class="view-port">
                                    <li><a href="pitpoint.html" title=""><i class="fa fa-th"></i></a></li>
                                    <li class="active"><a href="pitpoint-list.html" title=""><i class="fa fa-th-list"></i></a></li>
                                </ul>
                                <ul class="filter-ajex">
                                    <li class="active"><a href="#" title="All Members">All</a></li>
                                    <li><a class="online" href="#" title="Only Online People"><i class="fa fa-circle"></i></a></li>
                                    <li><a class="offline" href="#" title="Only Offline People"><i class="fa fa-circle"></i></a></li>
                                    <li><a href="#" title="">Best Match</a></li>
                                    <li><a href="#" title="">Newest</a></li>
                                    <li><a href="#" title="">Approved</a></li>
                                    <li><a href="#" title="">Near By</a></li>
                                    <li><a href="#" title="">Paid Members</a></li>
                                    <li><a href="#" title="">Free Members</a></li>
                                </ul>
                                <!-- <div class="range-slider">
                                    <div class="slider-box">
                                      <label for="priceRange"></label>
                                      <input type="text" id="priceRange" readonly>
                                      <div id="price-range" class="slider"></div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="load-more">
                        <div class="central-meta item">
                            <div class="pit-post">
                                <figure>
                                    <img style="max-width: 130px;" src="data:image/png;base64,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" alt="">
                                </figure>
                                <div class="pit-post-deta">
                                    <h4><a href="pitpoint-detail.html" title=""><span class="status f-online"></span> Sophia | 22 years old</a></h4>
                                    <ul class="post-up-time">
                                        <li>
                                            <div class="verification">
                                                <em class="verify"><i class="fa fa-check-circle"></i> verified</em>
                                            </div>
                                        </li>
                                        <li><i class="fa fa-map-marker"></i> kochi</li>
                                    </ul>
                                    
                                </div>
                                <div class="buttons">
                                    <router-link :to="{ name: 'matrmonialdetails', params: { userId: userId } }" title="" class="main-btn2 send-mesg" data-ripple="">
                                        View details
                                    </router-link>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="central-meta item">
                            <div class="pit-post">
                                <figure>
                                    <img style="max-width: 130px;" src="data:image/png;base64,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" alt="">
                                </figure>
                                <div class="pit-post-deta">
                                    <h4><a href="pitpoint-detail.html" title=""><span class="status f-online"></span> Sophia | 22 years old</a></h4>
                                    <ul class="post-up-time">
                                        <li>
                                            <div class="verification">
                                                <em class="verify"><i class="fa fa-check-circle"></i> verified</em>
                                            </div>
                                        </li>
                                        <li><i class="fa fa-map-marker"></i> kochi</li>
                                    </ul>
                                    
                                </div>
                                <div class="buttons">
                                    <a href="#" title="" class="main-btn2 send-mesg" data-ripple=""> View details</a>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="central-meta item">
                            <div class="pit-post">
                                <figure>
                                    <img style="max-width: 130px;" src="data:image/png;base64,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" alt="">
                                </figure>
                                <div class="pit-post-deta">
                                    <h4><a href="pitpoint-detail.html" title=""><span class="status f-online"></span> Sophia | 22 years old</a></h4>
                                    <ul class="post-up-time">
                                        <li>
                                            <div class="verification">
                                                <em class="verify"><i class="fa fa-check-circle"></i> verified</em>
                                            </div>
                                        </li>
                                        <li><i class="fa fa-map-marker"></i> kochi</li>
                                    </ul>
                                    
                                </div>
                                <div class="buttons">
                                    <a href="#" title="" class="main-btn2 send-mesg" data-ripple=""> View details</a>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="central-meta item">
                            <div class="pit-post">
                                <figure>
                                    <img style="max-width: 130px;" src="data:image/png;base64,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" alt="">
                                </figure>
                                <div class="pit-post-deta">
                                    <h4><a href="pitpoint-detail.html" title=""><span class="status f-online"></span> Sophia | 22 years old</a></h4>
                                    <ul class="post-up-time">
                                        <li>
                                            <div class="verification">
                                                <em class="verify"><i class="fa fa-check-circle"></i> verified</em>
                                            </div>
                                        </li>
                                        <li><i class="fa fa-map-marker"></i> kochi</li>
                                    </ul>
                                    
                                </div>
                                <div class="buttons">
                                    <a href="#" title="" class="main-btn2 send-mesg" data-ripple=""> View details</a>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="central-meta item">
                            <div class="pit-post">
                                <figure>
                                    <img style="max-width: 130px;" src="data:image/png;base64,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" alt="">
                                </figure>
                                <div class="pit-post-deta">
                                    <h4><a href="pitpoint-detail.html" title=""><span class="status f-online"></span> Sophia | 22 years old</a></h4>
                                    <ul class="post-up-time">
                                        <li>
                                            <div class="verification">
                                                <em class="verify"><i class="fa fa-check-circle"></i> verified</em>
                                            </div>
                                        </li>
                                        <li><i class="fa fa-map-marker"></i> kochi</li>
                                    </ul>
                                    
                                </div>
                                <div class="buttons">
                                    <a href="#" title="" class="main-btn2 send-mesg" data-ripple=""> View details</a>
                                     
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!-- content -->
 <FooterLayout></FooterLayout>


 <TransitionRoot :show="isOpen" appear as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
          <DialogPanel
          class="poup  w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-3 text-left align-middle shadow-xl transition-all"
        >
          <DialogTitle
            as="h3"
            class="text-lg font-medium leading-6 text-gray-900 "
          >
           <!-- headline registarion  -->

            Registration

          </DialogTitle>

          <!-- Registration Form Steps -->
          <div v-if="step === 1">
            <!-- Step 1 Content -->

            <div class="mt-2">
                  <label for="timestamp" class="block text-sm font-medium text-gray-700">Timestamp</label>
                  <input type="text" id="timestamp" name="timestamp" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter timestamp">
                </div>

                <div class="mt-2">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter email">
                </div>

                <div class="mt-2">
                  <label for="fatherName" class="block text-sm font-medium text-gray-700">Father Name</label>
                  <input type="text" id="fatherName" name="fatherName" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter father's name">
                </div>

                <div class="mt-2">
                  <label for="motherName" class="block text-sm font-medium text-gray-700">Mother Name</label>
                  <input type="text" id="motherName" name="motherName" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter mother's name">
                </div>

                <div class="mt-2">
                  <label for="occupationalFather" class="block text-sm font-medium text-gray-700">Occupation of Father</label>
                  <input type="text" id="occupationalFather" name="occupationalFather" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter father's occupation">
                </div>

                <div class="mt-2">
                  <label for="areYou" class="block text-sm font-medium text-gray-700">Are You? (Iyer, Iyengar, Smartha, etc.)</label>
                  <input type="text" id="areYou" name="areYou" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter your community">
                </div>

                <div class="mt-2">
                  <label for="permanentAddress" class="block text-sm font-medium text-gray-700">Permanent Address</label>
                  <input type="text" id="permanentAddress" name="permanentAddress" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter permanent address">
                </div>

                <div class="mt-2">
                  <label for="currentAddress" class="block text-sm font-medium text-gray-700">Current Address</label>
                  <input type="text" id="currentAddress" name="currentAddress" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter current address">
                </div>

                <div class="mt-2">
                  <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter phone number">
                </div>

                <div class="mt-2">
                  <label for="emergencyContact" class="block text-sm font-medium text-gray-700">Name of Person to be Contacted</label>
                  <input type="text" id="emergencyContact" name="emergencyContact" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter emergency contact name">
                </div>




            <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="nextStep"
              >
                Next
              </button>
            </div>

          </div>

          <div v-else-if="step === 2">
            <!-- Step 2 Content -->
            <div class="mt-2">
                    <label for="relation" class="block text-sm font-medium text-gray-700">Relation</label>
                    <input type="text" id="relation" name="relation" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter relation">
                  </div>

                  <div class="mt-2">
                    <label for="addressWithPhoneNumber" class="block text-sm font-medium text-gray-700">Address with Phone Number</label>
                    <input type="text" id="addressWithPhoneNumber" name="addressWithPhoneNumber" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter address with phone number">
                  </div>

                  <div class="mt-2">
                    <label for="gothram" class="block text-sm font-medium text-gray-700">Gothram</label>
                    <input type="text" id="gothram" name="gothram" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter gothram">
                  </div>

                  <div class="mt-2">
                    <label for="subcaste" class="block text-sm font-medium text-gray-700">Subcaste (Vadama, Brihacharanam, etc.)</label>
                    <input type="text" id="subcaste" name="subcaste" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter subcaste">
                  </div>

                  <div class="mt-2">
                    <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" class="mt-1 p-2 border rounded-md w-full" placeholder="Select date of birth">
                  </div>

                  <div class="mt-2">
                    <label for="height" class="block text-sm font-medium text-gray-700">Height</label>
                    <input type="text" id="height" name="height" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter height">
                  </div>

                  <div class="mt-2">
                    <label for="qualification" class="block text-sm font-medium text-gray-700">Qualification (also Vedic studies)</label>
                    <input type="text" id="qualification" name="qualification" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter qualification">
                  </div>

                  <div class="mt-2">
                    <label for="occupational" class="block text-sm font-medium text-gray-700">Occupational</label>
                    <input type="text" id="occupational" name="occupational" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter occupational">
                  </div>

                  <div class="mt-2">
                    <label for="occupationalAddress" class="block text-sm font-medium text-gray-700">Occupational Address</label>
                    <input type="text" id="occupationalAddress" name="occupationalAddress" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter occupational address">
                  </div>

                  <div class="mt-2">
                    <label for="languageSpoken" class="block text-sm font-medium text-gray-700">Language Spoken at Home</label>
                    <input type="text" id="languageSpoken" name="languageSpoken" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter language spoken at home">
                  </div>

            <!-- Other Step 2 Fields -->

            <!-- <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="submitRegistration"
              >
                Submit
              </button>
            </div> -->
            <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="nextStep"
                >
                  Next
                </button>
                <div v-if="step > 1"  class="float-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      @click="prevStep"
                    >
                      Back
                    </button>
                  </div>
              </div>
          </div>
          <div v-else-if="step === 3">
            <!-- Step 2 Content -->
            <div class="mt-2">
                    <label for="incomePerYear" class="block text-sm font-medium text-gray-700">Income per Year</label>
                    <input type="text" id="incomePerYear" name="incomePerYear" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter income per year">
                  </div>

                  <div class="mt-2">
                    <label for="optionalPhoneNumber" class="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input type="tel" id="optionalPhoneNumber" name="optionalPhoneNumber" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter optional phone number">
                  </div>

                  <div class="mt-2">
                    <label for="siblingsDetails" class="block text-sm font-medium text-gray-700">Brother/Sisters - Whether Married and Other Details</label>
                    <textarea id="siblingsDetails" name="siblingsDetails" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter details about siblings"></textarea>
                  </div>

                  <div class="mt-2">
                    <label for="timePlaceOfBirth" class="block text-sm font-medium text-gray-700">Time/Place of Birth</label>
                    <input type="text" id="timePlaceOfBirth" name="timePlaceOfBirth" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter time and place of birth">
                  </div>

                  <div class="mt-2">
                    <label for="star" class="block text-sm font-medium text-gray-700">Star</label>
                    <input type="text" id="star" name="star" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter star">
                  </div>

                  <div class="mt-2">
                    <label for="garbSishtam" class="block text-sm font-medium text-gray-700">Garb Sishtam</label>
                    <input type="text" id="garbSishtam" name="garbSishtam" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter Garb Sishtam">
                  </div>

                  <div class="mt-2">
                    <label for="otherDetails" class="block text-sm font-medium text-gray-700">Any Other Details (Optional)</label>
                    <textarea id="otherDetails" name="otherDetails" class="mt-1 p-2 border rounded-md w-full" placeholder="Enter any other details"></textarea>
                  </div>

                  <div class="mt-2">
                    <label for="checkboxParentsBrahmins" class="block text-sm font-medium text-gray-700">Are Both of Your Parents Brahmins?</label>
                    <input type="checkbox" id="checkboxParentsBrahmins" name="checkboxParentsBrahmins">
                  </div>

                  <div class="mt-2">
                    <label for="checkboxShareBiodata" class="block text-sm font-medium text-gray-700">Do you agree to share this two-page biodata to sarathy4brahmins?</label>
                    <input type="checkbox" id="checkboxShareBiodata" name="checkboxShareBiodata">
                    <p class="text-sm mt-2">This will be shared by sarathy4brahmins among its members. sarathy4brahmins is a NON-PROFIT MOTIVE project and it's completely free of cost.</p>
                  </div>

                  <div class="mt-2">
                    <label for="checkboxInformationTrue" class="block text-sm font-medium text-gray-700">The information given above is true. I agree to submit the form.</label>
                    <input type="checkbox" id="checkboxInformationTrue" name="checkboxInformationTrue">
                  </div>


            <!-- Other Step 2 Fields -->

            <!-- <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="submitRegistration"
              >
                Submit
              </button>
            </div> -->
            <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="nextStep"
                >
                  Next
                </button>
                <div v-if="step > 1"  class="float-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      @click="prevStep"
                    >
                      Back
                    </button>
                  </div>
              </div>
          </div>
          
          <div v-else-if="step === 4">
            <!-- Step 2 Content -->
            <!--  headline -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold"> horoscope1</h2>
                <p class="text-gray-600">Provide a brief description of your profile.</p>


            </div>
            <div class="container  mx-auto">
                <table class="table-auto border-collapse w-full">

                    <tbody>
                        <tr>
                            <td class="border  ">
                              <div class="dropdown"> 
            <button
            @click="myFunction"
             class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                              
                            </td>
                            <td class="border ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                            <td class="border px-0 py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                            </td>
                            <td colspan="2" rowspan="2" class="uneditable">
                                <div class="flex justify-center items-center">
                                    <img src="../assets/gana.png" alt="Centered Image" style="
                                    width: 263px;
                                ">
                                </div>
                            </td>


                            <td class="border   py-2"> <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                        Java 
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                        C++ 
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                        Python 
                    </label> 
                </li> 
            </ul> 
        </div> </td>
                            <!-- <td colspan="2"   class="uneditable"></td> -->

                            <td class="border   ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                            </td>
                        </tr>
                        <tr>
                            <td class="border  py-2">  <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                            <td class="border  py-2">  <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border  py-2">   <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border  py-2">   <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                        </tr>
                    </tbody>
                </table>

        <!-- Image in the middle position -->
        <!-- <div class="flex justify-center items-center mt-4">
            <img src="path/to/your/image.jpg" alt="Middle Image" class="max-w-full h-auto">
        </div> -->
            </div>



           <!-- create  a  squre input  -->

            <!-- Other Step 2 Fields -->

            <!-- <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="submitRegistration"
              >
                Submit
              </button>
            </div> -->
            <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="nextStep"
                >
                  Next
                </button>
                <div v-if="step > 1"  class="float-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      @click="prevStep"
                    >
                      Back
                    </button>
                  </div>
              </div>
          </div>

          <div v-else-if="step === 5">
            <!-- Step 2 Content -->
            <!--  headline -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold"> horoscope 2</h2>
                <p class="text-gray-600">Provide a brief description of your profile.</p>


            </div>
            <div class="container mx-auto">
                <table class="table-auto border-collapse w-full">

                    <tbody>
                        <tr>
                            <td class="border  ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                              
                            </td>
                            <td class="border ">
                              <div class="dropdown"> 
            <button  class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                            <td class="border px-0 py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                            </td>
                            <td colspan="2" rowspan="2" class="uneditable">
                                <div class="flex justify-center items-center">
                                    <img src="../assets/gana.png" alt="Centered Image" style="
                                    width: 263px;
                                ">
                                </div>
                            </td>


                            <td class="border   py-2"> <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                        Java 
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                        C++ 
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                        Python 
                    </label> 
                </li> 
            </ul> 
        </div> </td>
                            <!-- <td colspan="2"   class="uneditable"></td> -->

                            <td class="border   ">
                              <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> 
                            </td>
                        </tr>
                        <tr>
                            <td class="border  py-2">  <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div>  </td>
                            <td class="border  py-2">  <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border  py-2">   <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                            <td class="border  py-2">   <div class="dropdown"> 
            <button class="btn btn-success dropdown-toggle"
                    type="button" 
                    id="multiSelectDropdown"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                Select 
            </button> 
            <ul class="dropdown-menu" 
                aria-labelledby="multiSelectDropdown"> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Java"> 
                           Lagna or ascendant
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="C++"> 
                           Surya or sun
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Chandra or moon
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Kuja or Mars
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Rahu
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Brihaspathi or Jupiter
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sani or Saturn
                    </label> 
                </li> 
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Budha or mercury
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Sukran or Venus
                    </label> 
                </li>
                <li> 
                  <label> 
                    <input type="checkbox" 
                           value="Python"> 
                           Maanthi or gulikan
                    </label> 
                </li>
              
                
            </ul> 
        </div> </td>
                        </tr>
                    </tbody>
                </table>

        <!-- Image in the middle position -->
        <!-- <div class="flex justify-center items-center mt-4">
            <img src="path/to/your/image.jpg" alt="Middle Image" class="max-w-full h-auto">
        </div> -->
            </div>



           <!-- create  a  squre input  -->

            <!-- Other Step 2 Fields -->

            <!-- <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="submitRegistration"
              >
                Submit
              </button>
            </div> -->
            <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="nextStep"
                >
                  Next
                </button>
                <div v-if="step > 1"  class="float-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      @click="prevStep"
                    >
                      Back
                    </button>
                  </div>
              </div>
          </div>
          <div v-else-if="step === 7">
            <!-- Step 2 Content -->
            <!--  headline -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold"> horoscope</h2>
                <p class="text-gray-600">Provide a brief description of your profile.</p>


            </div>
            <div class="container mx-auto">
                <table class="table-auto border-collapse w-full">

                    <tbody>
                        <tr>
                            <td class="border  ">
                                <select class="mt-1 p-2 border rounded-md w-full">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </td>
                            <td class="border ">
                                <select class="mt-1 p-2 border rounded-md w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select></td>
                            <td class="border ">
                                 <select class="mt-1 p-2 border rounded-md w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select></td>
                            <td class="border px-0 py-2">
                                 <select class="mt-1 p-2 border rounded-md w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                                <select class="mt-1 p-2 border rounded-md w-full">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </td>
                            <td colspan="2" rowspan="2" class="uneditable">
                                <div class="flex justify-center items-center">
                                    <img src="../assets/gana.png" alt="Centered Image" style="
                                    width: 263px;
                                ">
                                </div>
                            </td>


                            <td class="border   py-2"> <select class="mt-1 p-2 border rounded-md w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td class="border   py-2">
                                 <select class="mt-1 p-2 border rounded-md w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select></td>
                            <!-- <td colspan="2"   class="uneditable"></td> -->

                            <td class="border   ">
                                <select class="mt-1 p-2 border rounded-md w-full">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="border  py-2">    <select class="mt-1 p-2 border rounded-md w-full">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select></td>
                            <td class="border  py-2">    <select class="mt-1 p-2 border rounded-md w-full">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select></td>
                            <td class="border  py-2">    <select class="mt-1 p-2 border rounded-md w-full">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select></td>
                            <td class="border  py-2">    <select class="mt-1 p-2 border rounded-md w-full">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select></td>
                        </tr>
                    </tbody>
                </table>

        <!-- Image in the middle position -->
        <!-- <div class="flex justify-center items-center mt-4">
            <img src="path/to/your/image.jpg" alt="Middle Image" class="max-w-full h-auto">
        </div> -->
            </div>



           <!-- create  a  squre input  -->

            <!-- Other Step 2 Fields -->

            <!-- <div class="mt-4">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                @click="submitRegistration"
              >
                Submit
              </button>
            </div> -->
            <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="nextStep"
                >
                  Next
                </button>
                <div v-if="step > 1"  class="float-right">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      @click="prevStep"
                    >
                      Back
                    </button>
                  </div>
              </div>
          </div>

          <!-- Add more steps as needed -->

          <!-- Back Button for Steps -->
          <!-- <div v-if="step > 1" class="mt-4 ">
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              @click="prevStep"
            >
              Back
            </button>
          </div> -->
        </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  

  </div>
</template>

<script>
import { ref } from 'vue';
import FooterLayout from '../components/FooterLayout.vue';
import NavbarLayout from '../components/NavbarLayout.vue';
import SideNav from '../components/SideNav.vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';

export default {
  name: 'Matrimonial',
  components: { NavbarLayout, SideNav, FooterLayout, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle },
  setup() {
    const motherOccupation = ref('');
    const isOpen = ref(false);
    const username = ref('');
    const email = ref('');
    const step = ref(1);

    function nextStep() {
      // Add validation logic if needed
      step.value++;
    }

    function prevStep() {
      // Add logic to go back to the previous step
      step.value--;
    }

    function submitRegistration() {
      // Add logic to submit the registration form
      // You can access the form data using the `username` and `email` refs
      closeModal();
    }

    function closeModal() {
      isOpen.value = false;
    }

    function openModal() {
      isOpen.value = true;
    }

    // Open the modal when the component is mounted (you can change this based on your requirement)
    // onMounted(() => {
    //   openModal();
    // });

    return {
      isOpen,
      username,
      email,
      step,
      nextStep,
      prevStep,
      submitRegistration,
      closeModal,
      openModal,
      motherOccupation,
    };
  },
};
const chBoxes = 
            document.querySelectorAll('.dropdown-menu input[type="checkbox"]'); 
        const dpBtn =  
            document.getElementById('multiSelectDropdown'); 
        let mySelectedListItems = []; 
  
        function handleCB() { 
            mySelectedListItems = []; 
            let mySelectedListItemsText = ''; 
  
            chBoxes.forEach((checkbox) => { 
                if (checkbox.checked) { 
                    mySelectedListItems.push(checkbox.value); 
                    mySelectedListItemsText += checkbox.value + ', '; 
                } 
            }); 
  
            dpBtn.innerText = 
                mySelectedListItems.length > 0 
                    ? mySelectedListItemsText.slice(0, -2) : 'Select'; 
        } 
  
        chBoxes.forEach((checkbox) => { 
            checkbox.addEventListener('change', handleCB); 
        });   
        // select check box
      
</script>


<style scoped>
.poup{
  max-width: 800px;
}
/* Custom styles for the dropdown */
.dropdown {
  display: inline-block;
}

.btn-success {
  background-color: #28a745; /* Green color for success */
  color: #fff; /* White text */
  border: none;
}

/* Style the dropdown toggle button */
.btn-success:hover,
.btn-success:focus {
  background-color: #218838; /* Darker green on hover/focus */
}

/* Style the dropdown menu */
/* Custom styles for the dropdown */
.dropdown {
  display: inline-block;
  position: relative; /* Ensure proper positioning of the dropdown */
}

/* ... (Previous styles remain unchanged) */

/* Style the dropdown menu */
.dropdown-menu {
  max-height: 200px; /* Set the maximum height for the dropdown */
  overflow-y: auto; /* Enable vertical scroll for excess content */
  border: 1px solid #28a745; /* Border color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle lift */
}

/* ... (Previous styles remain unchanged) */


/* Style the checkbox labels */
.dropdown-menu label {
  display: block;
    padding: 0 7px;
    cursor: pointer;
    font-size: 12px;
}

/* Style the checkboxes */
.dropdown-menu input[type="checkbox"] {
  margin-right: 10px;
}

/* Highlight the selected checkboxes */
.dropdown-menu label.active {
  background-color: #28a745; /* Green background for selected items */
  color: #fff; /* White text for selected items */
}

/* Add a hover effect for the checkboxes */
.dropdown-menu label:hover {
  background-color: #f8f9fa; /* Light gray on hover */
}

/* dropdown with check  horoscope  */

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .container {
    border: 1px solid #dddddd;
    padding: 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #dddddd;
    text-align: center;
    /* padding: 8px; */
    position: relative;
  }

  th {
    background-color: #f2f2f2;
  }

  .uneditable {
    background-color: #dddddd;
  }

  .centered-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

/* responsive css */
@media screen and (min-width: 480px) {
   .container {
    padding-left: 0;
  }
}
/* Your component styles here */
</style>
