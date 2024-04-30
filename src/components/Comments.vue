<template>
    <div class="coment-area" style="">
      <ul class="we-comet">
        <li v-for="comment in comments" :key="comment.id">
          <!-- Comment details here -->
          <div class="comet-avatar">
            <img src="images/resources/nearly3.jpg" alt="">
        </div>
        <div class="we-comment">
            <h5><a href="time-line.html" title="">Jason borne</a></h5>
            <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
            <div class="inline-itms">
                <span>1 year ago</span>
                <a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
                <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
            </div>
        </div>
        </li>
        <!-- Add comment form here -->
      </ul>
    </div>
  </template>

  <script>
  export default {
    props: ['comments'],
  };
  </script>
