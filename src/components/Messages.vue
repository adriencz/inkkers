<template>
  <div class="about">

    <router-link :to="{ name: 'message', params: {} }">
    <div class="messages">
      <div class="avatar-container">
        <p class="nb-message">5</p>
        <img src="/img/stories/face2.jpeg" alt="">
      </div>
      <div class="preview-container">
        <router-link :to="{ name: '', params: {} }">adrien.czerwinski</router-link>
        <p class="preview-content"><b>Lorem ipsum dolor sit amet, consectetur...</b></p>
      </div>
    </div>
    </router-link>

    <router-link :to="{ name: 'message', params: {} }">
    <div class="messages">
      <div class="avatar-container">
        <img src="/img/stories/face1.jpeg" alt="">
      </div>
      <div class="preview-container">
        <router-link :to="{ name: '', params: {} }">maria.legrand</router-link>
        <p class="preview-content">Lorem ipsum dolor sit amet, consectetur...</p>
      </div>
    </div>
    </router-link>

    <router-link :to="{ name: 'message', params: {} }">
    <div class="messages">
      <div class="avatar-container">
        <img src="/img/stories/face4.jpeg" alt="">
      </div>
      <div class="preview-container">
        <router-link :to="{ name: '', params: {} }">laure.wiszka</router-link>
        <p class="preview-content">Lorem ipsum dolor sit amet, consectetur...</p>
      </div>
    </div>
    </router-link>







  </div>
</template>


<script>
  export default {

  }
</script>


<style media="screen">
.about .messages {
  width: 100%;
  height: 95px;
  /* background-color: #efeeee; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  transition: .2s;
}
.about .messages:hover {
  background-color: #f3f3f3;
}

.about .messages .avatar-container {
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.about .messages .avatar-container img {
  width: 65px;
  height: 65px;
  border-radius: 65px;
  margin: auto;
  object-fit: cover;
}
.about .messages .avatar-container p.nb-message {
  position: absolute;
  background-color: #8661df;
  color: white;
  border-radius: 20px;
  padding: 0.6rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  /* width: 30px; */
  /* height: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 13px;
  top: 30px;
}
.about .messages .preview-container {
  flex-direction: column;
  text-align: left;
}
.about .messages .preview-container a {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #2177db;
  color: #111;
  text-align: left;
  font-weight: 500;
}
.about .messages .preview-container p.preview-content {
  font-family: Roboto, sans-serif;
  font-size: 15px;
  text-align: left;
  color: black;
}
.about .messages .preview-container p.preview-content b {
  font-weight: 500;
}
</style>
