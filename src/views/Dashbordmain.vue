<template>
    <div>
        <NavbarLayout></NavbarLayout>
        <div class="theme-layout">



            <section>
                <div class="gap2 gray-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row merged20" id="page-contents">
                                    <div class="col-lg-3">
                                        <aside class="sidebar static left">
                                            <div class="widget">
                                                <h4 class="widget-title">Profile</h4>
                                                <div class="your-page">
                                                    <figure>
                                                        <a href="#" title=""><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></a>
                                                        <span>@Monica12</span>
                                                    </figure>
                                                    <div class="page-meta">
                                                        <a href="#" title="" class="underline">Monica lee</a>
                                                        <span><i class="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                                                        <span><i class="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                                                    </div>
                                                    
                                                </div>
                                            </div><!-- My Profile -->
                                           
                                            <div class="widget">
                                                <h4 class="widget-title">Latest Videos</h4>
                                                <ul class="widget-video">
                                                    <li>
                                                        <a href="https://www.youtube.com/watch?v=d5OHYyHrrUU" title="" data-strip-group="mygroup" class="strip" data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"><img src="data:image/jpeg;base64,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" alt="">
                                                            <i>
                                                                <svg version="1.1" class="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="50px" width="50px"
                                                                 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                              <path class="stroke-solid" fill="none" stroke=""  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                                                                C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                                              <path class="icon" fill="" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <em>2:35</em>
                                                        <span> Beautiful red truck free style stunts</span>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.youtube.com/watch?v=wwu_mZ31JfY" title="" data-strip-group="mygroup" class="strip" data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"><img src="data:image/jpeg;base64,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" alt="">

                                                            <i>
                                                                <svg version="1.1" class="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="50px" width="50px"
                                                                 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                                              <path class="stroke-solid" fill="none" stroke=""  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                                                                C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                                              <path class="icon" fill="" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <em>4:30</em>
                                                        <span>Travel to south africa forest</span>
                                                    </li>
                                                </ul>
                                            </div><!-- latest video-->
                                            
                                            
                                        </aside>
                                    </div><!-- sidebar -->
                                    <div class="col-lg-6">
                                        <div class="central-meta postbox">
                                          <span class="create-post">Create post</span>
                                          <div class="new-postbox">
                                            <figure>
                                              <img src="" alt="">
                                            </figure>
                                            <div class="newpst-input">
                                              <form @submit.prevent="submitPost">
                                                <textarea v-model="postContent" rows="2" placeholder="Share what you are thinking?"></textarea>
                                              </form>
                                            </div>
                                            <div class="attachments">
                                                <ul>
                                                    <li v-for="icon in fileIcons" :key="icon">
                                                      <i :class="'fa fa-' + icon"></i>
                                                      <label class="fileContainer">
                                                        <input type="file" @change="handleFileUpload(icon)">
                                                      </label>
                                                    </li>
                                                    <li class="preview-btn">
                                                      <button class="post-btn-preview" @click="previewPost" type="button" data-ripple="">Preview</button>
                                                    </li>
                                                  </ul>
                                              <button class="post-btn" @click="submitPost" type="button" data-ripple="">Post</button>
                                            </div>
                                            <div class="add-location-post">
                                              <span>Drag map point to selected area</span>
                                              <div class="row">
                                                <div class="col-lg-6">
                                                  <label class="control-label">Lat :</label>
                                                  <input v-model="latitude" type="text" class="" id="us3-lat" />
                                                </div>
                                                <div class="col-lg-6">
                                                  <label>Long :</label>
                                                  <input v-model="longitude" type="text" class="" id="us3-lon" />
                                                </div>
                                              </div>
                                              <!-- map -->
                                              <div id="us3"></div>
                                            </div>
                                          </div>
                                        </div><!-- add post new box -->

                                        <div class="loadMore">
                                        


                                        <div class="central-meta item">
										<div class="classi-pst">
											<div class="row merged10">
												<div class="col-lg-6">
													<div class="image-bunch single">
														<figure><img src="data:image/jpeg;base64,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" alt=""></figure>
														<span>New Post</span>
													</div>
												</div>
												<div class="col-lg-6">
													<div class="more">
														<div class="more-post-optns"><i class="ti-more-alt"></i>
															<ul>
																<li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
																<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
																<li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
																<li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
															</ul>
														</div>
													</div>
													<div class="user-fig">
														<img src="data:image/jpeg;base64,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" alt="">
														<a href="#" title="">Xing Xong</a>
													</div>
													<div class="classi-pst-meta">
														<h6><a href="#" title="">White BMW 1998 Model for sale</a></h6>
														<span><i class="fa fa-map-marker"></i> Ontario, CA <ins><i>used</i> $700</ins></span>
														<em><i class="fa fa-cloud-upload"></i> Jan, 13 2020</em>
													</div>
												</div>
												<div class="col-lg-12">
													<p class="classi-pst-des">
														A beautiful Iphone Mobile golden color 6 months used only A beautiful Iphone 
														Mobile golden color 6 months used only
													</p>
													
												</div>
											</div>
										</div>
									</div>
									

									<div id="app" class="central-meta item">
                                    <div class="classi-pst">
                                        <div class="row merged10">
                                            <div class="col-lg-6">
                                                <div class="image-bunch three">
                                                    <!-- Default image, clicking on it will trigger the audio popup -->
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRh57SHwChDmydqMuf1G7p1sCWkwaAGP4ew&usqp=CAU" alt="Audio Player" @click="showAudioPopup">
                                                </div>
                                                <!-- Audio Popup -->
                                                <div v-if="isAudioPopupVisible" class="audio-popup">
                                                    <!-- Your actual audio player goes here -->
                                                    <audio controls class="w-full h-10 p-2 rounded-md border border-gray-300 bg-gradient-to-r from-blue-500 to-purple-500">
                                                        <source src="your-audio-file.mp3" type="audio/mp3">
                                                    </audio>
                                                    <span class="text-white font-bold">Featured</span>
                                                    <!-- Close button for the popup -->
                                                    <button @click="hideAudioPopup">Close</button>
                                                </div>
                                            </div>
												<div class="col-lg-6">
													<div class="more">
														<div class="more-post-optns"><i class="ti-more-alt"></i>
															<ul>
																<li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
																<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
																<li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
																<li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
															</ul>
														</div>
													</div>
													<div class="user-fig">
														<img src="images/resources/tube-user2.jpg" alt="">
														<a href="#" title="">Xing Xong</a>
													</div>
													<div class="classi-pst-meta">
														<h6><a href="#" title="">Beautiful iphone x 2020 in gold color</a></h6>
														<span><i class="fa fa-map-marker"></i> Ontario, CA <ins><i>used</i> $700</ins></span>
														<em><i class="fa fa-cloud-upload"></i> Jan, 13 2020</em>
													</div>
												</div>
												<div class="col-lg-12">
													<p class="classi-pst-des">
														A beautiful Iphone Mobile golden color 6 months used only A beautiful Iphone 
														Mobile golden color 6 months used only
													</p>
													
												</div>
											</div>
										</div>
									</div>
									<div class="central-meta item">
                                        <div class="classi-pst">
                                            <div class="row merged10">
                                                <div class="col-lg-6">
                                                    <!-- Replace image-bunch with a link to the PDF -->
                                                    <div class="pdf-link">
                                                        <a href="https://www.traffic.org/site/assets/files/5332/traffic_pub_gen19.pdf" target="_blank">
                                                            <img src="data:image/png;base64,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" alt="PDF Icon">
                                                        </a>
                                                    </div>
                                                </div>
												<div class="col-lg-6">
													<div class="more">
														<div class="more-post-optns"><i class="ti-more-alt"></i>
															<ul>
																<li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
																<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
																<li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
																<li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
															</ul>
														</div>
													</div>
													<div class="user-fig">
														<img src="images/resources/tube-user2.jpg" alt="">
														<a href="#" title="">Xing Xong</a>
													</div>
													<div class="classi-pst-meta">
														<h6><a href="#" title="">Dell Laptop Xp13"-14"-15"-17" Branded</a></h6>
														<span><i class="fa fa-map-marker"></i> Ontario, CA <ins><i>used</i> $1200</ins></span>
														<em><i class="fa fa-cloud-upload"></i> Jan, 13 2020</em>
													</div>
												</div>
												<div class="col-lg-12">
													<p class="classi-pst-des">
														A beautiful Iphone Mobile golden color 6 months used only A beautiful Iphone 
														Mobile golden color 6 months used only
													</p>
													
												</div>
											</div>
										</div>
									</div>
                                            <!-- video post -->

                                        </div>
                                    </div><!-- centerl meta -->
                                    <div class="col-lg-3">
                                        <aside class="sidebar static right">
                                            
                                            <div class="widget">
                                                <h4 class="widget-title">Explor Events <a title="" href="#" class="see-all">See All</a></h4>
                                                <div class="rec-events bg-purple">
                                                    <i class="ti-gift"></i>
                                                    <h6><a href="" title="">Ocean Motel good night event in columbia</a></h6>
                                                    <img src="images/clock.png" alt="">
                                                </div>
                                                <div class="rec-events bg-blue">
                                                    <i class="ti-microphone"></i>
                                                    <h6><a href="" title="">2016 The 3rd International Conference</a></h6>
                                                    <img src="images/clock.png" alt="">
                                                </div>
                                            </div><!-- explore events -->
                                          
                                            <div class="widget">
                                                <div class="banner high-opacity purple">
                                                    <div class="bg-image" style="background-image: url(images/resources/baner-widgetbg2.jpg)"></div>
                                                    <div class="post-job">
                                                        <img src="images/job-icon.png" alt="">
                                                        <span>Post a new job</span>
                                                        <p>Create a new job post for hire a new talented from the pitnik</p>
                                                        <a class="main-btn" href="#" title="">Post Job</a>
                                                    </div>
                                                </div>
                                            </div><!-- create new job -->
                                          
                                          
                                           
                                        </aside>
                                    </div><!-- sidebar -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterLayout></FooterLayout>
        </div>
            <div class="side-panel">
                <h4 class="panel-title">General Setting</h4>
                <form method="post">
                    <div class="setting-row">
                        <span>use night mode</span>
                        <input type="checkbox" id="nightmode1"/>
                        <label for="nightmode1" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Notifications</span>
                        <input type="checkbox" id="switch22" />
                        <label for="switch22" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Notification sound</span>
                        <input type="checkbox" id="switch33" />
                        <label for="switch33" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>My profile</span>
                        <input type="checkbox" id="switch44" />
                        <label for="switch44" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Show profile</span>
                        <input type="checkbox" id="switch55" />
                        <label for="switch55" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                </form>
                <h4 class="panel-title">Account Setting</h4>
                <form method="post">
                    <div class="setting-row">
                        <span>Sub users</span>
                        <input type="checkbox" id="switch66" />
                        <label for="switch66" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>personal account</span>
                        <input type="checkbox" id="switch77" />
                        <label for="switch77" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Business account</span>
                        <input type="checkbox" id="switch88" />
                        <label for="switch88" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Show me online</span>
                        <input type="checkbox" id="switch99" />
                        <label for="switch99" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Delete history</span>
                        <input type="checkbox" id="switch101" />
                        <label for="switch101" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div class="setting-row">
                        <span>Expose author name</span>
                        <input type="checkbox" id="switch111" />
                        <label for="switch111" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                </form>
            </div><!-- side panel -->

            <div class="popup-wraper2">
                <div class="popup post-sharing">
                    <span class="popup-closed"><i class="ti-close"></i></span>
                    <div class="popup-meta">
                        <div class="popup-head">
                            <select data-placeholder="Share to friends..." multiple class="chosen-select multi">
                                <option>Share in your feed</option>
                                <option>Share in friend feed</option>
                                <option>Share in a page</option>
                                <option>Share in a group</option>
                                <option>Share in message</option>
                            </select>
                            <div class="post-status">
                                <span><i class="fa fa-globe"></i></span>
                                <ul>
                                    <li><a href="#" title=""><i class="fa fa-globe"></i> Post Globaly</a></li>
                                    <li><a href="#" title=""><i class="fa fa-user"></i> Post Private</a></li>
                                    <li><a href="#" title=""><i class="fa fa-user-plus"></i> Post Friends</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="postbox">
                            <div class="post-comt-box">
                                <form method="post">
                                    <input type="text" placeholder="Search Friends, Pages, Groups, etc....">
                                    <textarea placeholder="Say something about this..."></textarea>
                                    <div class="add-smiles">
                                        <span title="add icon" class="em em-expressionless"></span>
                                        <div class="smiles-bunch">
                                            <i class="em em---1"></i>
                                            <i class="em em-smiley"></i>
                                            <i class="em em-anguished"></i>
                                            <i class="em em-laughing"></i>
                                            <i class="em em-angry"></i>
                                            <i class="em em-astonished"></i>
                                            <i class="em em-blush"></i>
                                            <i class="em em-disappointed"></i>
                                            <i class="em em-worried"></i>
                                            <i class="em em-kissing_heart"></i>
                                            <i class="em em-rage"></i>
                                            <i class="em em-stuck_out_tongue"></i>
                                        </div>
                                    </div>

                                    <button type="submit"></button>
                                </form>
                            </div>
                            <figure><img src="" alt=""></figure>
                            <div class="friend-info">
                                <figure>
                                    <img alt="" src="">
                                </figure>
                                <div class="friend-name">
                                    <ins><a title="" href="time-line.html">Jack Carter</a> share <a title="" href="#">link</a></ins>
                                    <span>Yesterday with @Jack Piller and @Emily Stone at the concert of # Rock'n'Rolla in Ontario.</span>
                                </div>
                            </div>
                            <div class="share-to-other">
                                <span>Share to other socials</span>
                                <ul>
                                    <li><a class="facebook-color" href="#" title=""><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a class="twitter-color" href="#" title=""><i class="fa fa-twitter-square"></i></a></li>
                                    <li><a class="dribble-color" href="#" title=""><i class="fa fa-dribbble"></i></a></li>
                                    <li><a class="instagram-color" href="#" title=""><i class="fa fa-instagram"></i></a></li>
                                    <li><a class="pinterest-color" href="#" title=""><i class="fa fa-pinterest-square"></i></a></li>
                                </ul>
                            </div>
                            <div class="copy-email">
                                <span>Copy & Email</span>
                                <ul>
                                    <li><a href="#" title="Copy Post Link"><i class="fa fa-link"></i></a></li>
                                    <li><a href="#" title="Email this Post"><i class="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div><!-- share popup -->

            <div class="popup-wraper3">
                <div class="popup">
                    <span class="popup-closed"><i class="ti-close"></i></span>
                    <div class="popup-meta">
                        <div class="popup-head">
                            <h5>Report Post</h5>
                        </div>
                        <div class="Rpt-meta">
                            <span>We're sorry something's wrong. How can we help?</span>
                            <form method="post" class="c-form">
                                <div class="form-radio">
                                  <div class="radio">
                                    <label>
                                      <input type="radio" name="radio" checked="checked"><i class="check-box"></i>It's spam or abuse
                                    </label>
                                  </div>
                                  <div class="radio">
                                    <label>
                                      <input type="radio" name="radio"><i class="check-box"></i>It breaks r/technology's rules
                                    </label>
                                  </div>
                                    <div class="radio">
                                    <label>
                                      <input type="radio" name="radio"><i class="check-box"></i>Not Related
                                    </label>
                                  </div>
                                    <div class="radio">
                                    <label>
                                      <input type="radio" name="radio"><i class="check-box"></i>Other issues
                                    </label>
                                  </div>
                                </div>
                            <div>
                                <label>Write about Report</label>
                                <textarea placeholder="write someting about Post" rows="2"></textarea>
                            </div>
                            <div>
                                <button data-ripple="" type="submit" class="main-btn">Submit</button>
                                <a href="#" data-ripple="" class="main-btn3 cancel">Close</a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div><!-- report popup -->

            <div class="popup-wraper1">
                <div class="popup direct-mesg">
                    <span class="popup-closed"><i class="ti-close"></i></span>
                    <div class="popup-meta">
                        <div class="popup-head">
                            <h5>Send Message</h5>
                        </div>
                        <div class="send-message">
                            <form method="post" class="c-form">
                                <input type="text" placeholder="Sophia">
                                <textarea placeholder="Write Message"></textarea>
                                <button type="submit" class="main-btn">Send</button>
                            </form>
                            <div class="add-smiles">
                                <div class="uploadimage">
                                    <i class="fa fa-image"></i>
                                    <label class="fileContainer">
                                        <input type="file">
                                    </label>
                                </div>
                                <span title="add icon" class="em em-expressionless"></span>
                                <div class="smiles-bunch">
                                    <i class="em em---1"></i>
                                    <i class="em em-smiley"></i>
                                    <i class="em em-anguished"></i>
                                    <i class="em em-laughing"></i>
                                    <i class="em em-angry"></i>
                                    <i class="em em-astonished"></i>
                                    <i class="em em-blush"></i>
                                    <i class="em em-disappointed"></i>
                                    <i class="em em-worried"></i>
                                    <i class="em em-kissing_heart"></i>
                                    <i class="em em-rage"></i>
                                    <i class="em em-stuck_out_tongue"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div><!-- send message popup -->

            <div class="modal fade" id="img-comt">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">×</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="pop-image">
                                    <div class="pop-item">
                                        <figure><img src="images/resources/blog-detail.jpg" alt=""></figure>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="user">
                                    <figure><img src="images/resources/user1.jpg" alt=""></figure>
                                    <div class="user-information">
                                        <h4><a href="#" title="">Danile Walker</a></h4>
                                        <span>2 hours ago</span>
                                    </div>
                                    <a href="#" title="Follow" data-ripple="">Follow</a>
                                </div>
                                
                                <div style="display: block;" class="coment-area">
                                    <ul class="we-comet">
                                        <li>
                                            <div class="comet-avatar">
                                                <img alt="" src="images/resources/nearly3.jpg">
                                            </div>
                                            <div class="we-comment">
                                                <h5><a title="" href="time-line.html">Jason borne</a></h5>
                                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
                                                <div class="inline-itms">
                                                    <span>1 year ago</span>
                                                    <a title="Reply" href="#" class="we-reply"><i class="fa fa-reply"></i></a>
                                                    <a title="" href="#"><i class="fa fa-heart"></i><span>20</span></a>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div class="comet-avatar">
                                                <img alt="" src="images/resources/comet-4.jpg">
                                            </div>
                                            <div class="we-comment">
                                                <h5><a title="" href="time-line.html">Sophia</a></h5>
                                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                                    <i class="em em-smiley"></i>
                                                </p>
                                                <div class="inline-itms">
                                                    <span>1 year ago</span>
                                                    <a title="Reply" href="#" class="we-reply"><i class="fa fa-reply"></i></a>
                                                    <a title="" href="#"><i class="fa fa-heart"></i><span>20</span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="comet-avatar">
                                                <img alt="" src="images/resources/comet-4.jpg">
                                            </div>
                                            <div class="we-comment">
                                                <h5><a title="" href="time-line.html">Sophia</a></h5>
                                                <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                                    <i class="em em-smiley"></i>
                                                </p>
                                                <div class="inline-itms">
                                                    <span>1 year ago</span>
                                                    <a title="Reply" href="#" class="we-reply"><i class="fa fa-reply"></i></a>
                                                    <a title="" href="#"><i class="fa fa-heart"></i><span>20</span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a class="showmore underline" title="" href="#">more comments+</a>
                                        </li>
                                        <li class="post-comment">
                                            <div class="comet-avatar">
                                                <img alt="" src="images/resources/nearly1.jpg">
                                            </div>
                                            <div class="post-comt-box">
                                                <form method="post">
                                                    <textarea placeholder="Post your comment"></textarea>
                                                    <div class="add-smiles">
                                                        <div class="uploadimage">
                                                            <i class="fa fa-image"></i>
                                                            <label class="fileContainer">
                                                                <input type="file">
                                                            </label>
                                                        </div>
                                                        <span title="add icon" class="em em-expressionless"></span>
                                                        <div class="smiles-bunch">
                                                            <i class="em em---1"></i>
                                                            <i class="em em-smiley"></i>
                                                            <i class="em em-anguished"></i>
                                                            <i class="em em-laughing"></i>
                                                            <i class="em em-angry"></i>
                                                            <i class="em em-astonished"></i>
                                                            <i class="em em-blush"></i>
                                                            <i class="em em-disappointed"></i>
                                                            <i class="em em-worried"></i>
                                                            <i class="em em-kissing_heart"></i>
                                                            <i class="em em-rage"></i>
                                                            <i class="em em-stuck_out_tongue"></i>
                                                        </div>
                                                    </div>

                                                    <button type="submit"></button>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div><!-- The Scrolling Modal image with comment -->
        
    </div>
</template>
<style>.audio-box {
    max-width: 300px; /* Set a maximum width for the audio box */
    margin: 0 auto; /* Center the audio box horizontally */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow */
}

.audio-box audio {
    outline: none; /* Remove the default outline on focus */
}

.audio-box span {
    display: block; /* Ensure the span takes full width */
    text-align: center; /* Center the text within the span */
    margin-top: 8px; /* Add some space between the audio player and the text */
}
</style>
<script>
import FooterLayout from '../components/FooterLayout.vue';
import NavbarLayout from '../components/NavbarLayout.vue';
import SideNav from '../components/SideNav.vue';
import PostContainer from '../components/PostContainer.vue';

export default {
  name: 'Dashbordmain',
  components: { NavbarLayout, SideNav, FooterLayout ,PostContainer},
    el: '#app',
  data() {
    return {
      fileIcons: ['music', 'image', 'video-camera', 'camera'],
        isAudioPopupVisible: false,
      postData: {
        username: 'John Doe',
        avatar: 'path/to/avatar.jpg',
        publishedTime: 'January 1, 2023',
        videoLink: 'https://www.youtube.com/watch?v=yourvideoid',
        image: 'https://images.unsplash.com/photo-1703150976789-55d9a2b9086e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
        title: 'Your Post Title',
        comments: [
          { user: 'User1', text: 'Comment 1' },
          { user: 'User2', text: 'Comment 2' },
          // Add more comments as needed
        ],
        // Add other properties as needed
      },
    };
  },
  methods: {

   showAudioPopup() {
                this.isAudioPopupVisible = true;
            },
     hideAudioPopup() {
                this.isAudioPopupVisible = false;
            },
    submitPost() {
      this.logPostDetails('Post content:', this.postContent);
      this.logPostDetails('Latitude:', this.latitude);
      this.logPostDetails('Longitude:', this.longitude);
      this.logPostDetails('Files:', this.files);
      // Add your logic for submitting the post
    },
    previewPost() {
      this.logPostDetails('Post preview:', this.postContent);
      this.logPostDetails('Latitude:', this.latitude);
      this.logPostDetails('Longitude:', this.longitude);
      this.logPostDetails('Files:', this.files);
      // Add your logic for previewing the post
    },
    handleFileUpload(type) {
        const fileInput = this.$refs[type + 'FileInput'];
      this.files[type] = fileInput.files[0];
    },
    logPostDetails(label, value) {
      console.log(label, value);
    },
  },
};

</script>


