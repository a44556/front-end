<template>
    <div class="post-container">
      <UserPost :username="post.username" :avatar="post.avatar" :publishedTime="post.publishedTime" />
      <PostDetails :videoLink="post.videoLink" :image="post.image" :title="post.title" />
      <Comments :comments="post.comments" />
    </div>
  </template>


  <script>
  import UserPost from './UserPost.vue';
  import PostDetails from './PostDetails.vue';
  import Comments from './Comments.vue';

  export default {
    components: { UserPost, PostDetails, Comments },
    props: {
      post: Object,
    },
  };
  </script>

