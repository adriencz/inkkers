<template lang="html">
  <div class="ui vertical menu left-app-menu">
    <div class="item">
      <div class="ui input"><input type="text" placeholder="Search..."></div>
    </div>
    <a class="item">
      Browse
    </a>
    <a class="item">
      Messages
    </a>
    <div class="item item-stories">
      Stories
      <div class="menu item-stories-container">
        <div class="story">
          <img src="/img/stories/face1.jpeg" alt="">
          <div class="author-container">
            <p class="author">claudiakreszka</p>
            <p class="time">Il y a 1 heure</p>
          </div>
        </div>
        <div class="story">
          <img src="/img/stories/face2.jpeg" alt="">
          <div class="author-container">
            <p class="author">claudiakreszka</p>
            <p class="time">Il y a 23 min</p>
          </div>
        </div>
        <div class="story">
          <img src="/img/stories/face4.jpeg" alt="">
          <div class="author-container">
            <p class="author">claudiakreszka</p>
            <p class="time">Il y a 21 heures</p>
          </div>
        </div>
        <div class="story">
          <img src="/img/stories/face4.jpeg" alt="">
          <div class="author-container">
            <p class="author">claudiakreszka</p>
            <p class="time">Il y a 3 heures</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.left-app-menu {
  width: 100% !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  position: -webkit-sticky;
  position: sticky;
  top: 110px;
}

.left-app-menu .ui.input input {
  border-radius: 4px;
  font-family: Roboto, sans-serif;
}

.left-app-menu .item {
  text-align: left;
  font-family: Roboto, sans-serif;
  height: 43px;
  display: flex !important;
  align-items: center !important;
}
.left-app-menu .item:first-child, .left-app-menu .item:last-child {
  height: auto;
  display: inherit !important;
  align-items: inherit !important;
}




.left-app-menu .item-stories {
  padding-bottom: 0 !important;
}

.left-app-menu .item-stories-container {
  height: 180px !important;
  overflow: auto;
  margin-top: 15px !important;
}

.left-app-menu .story {
  height: 55px;
  width: 100%;
  /* background-color: #bfbbbb; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

.left-app-menu .story img {
  width: 47px;
  height: 47px;
  border-radius: 47px;
  object-fit: cover;
}

.left-app-menu .story .author-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  flex-wrap: wrap;
  font-size: 13px;
  font-weight: 400;
}
.left-app-menu .story .author-container .author {
  font-weight: 500;
  margin: 0;
  width: 100%;
}

.left-app-menu .story .author-container p.time {
  font-family: Roboto, sans-serif !important;
  /* font-size: 18px; */
}
</style>
