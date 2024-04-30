<template>
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
														<h6><a href="#" title="">White BMW 1998 Model for sale</a></h6>
														<span><i class="fa fa-map-marker"></i> Ontario, CA <ins><i>used</i> $700</ins></span>
														<em><i class="fa fa-cloud-upload"></i> Jan, 13 2020</em>
													</div>
												</div>
  </template>

  <script>
  export default {
    props: ['videoLink', 'image', 'title'],
  };
  </script>
