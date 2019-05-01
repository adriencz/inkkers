<template>
  <div class="home">


    <div class="ui active centered inline loader" v-show="mainLoader"></div>

    <div class="ui grid post" v-show="!mainLoader">
      <div class="ui eight wide column picture-container">
        <img src="/img/post1.jpg" alt="">
      </div>
      <div class="ui eight wide column post-content">
        <!-- header -->
        <div class="post-header">
          <img src="/img/stories/face2.jpeg" alt="">
          <div class="infos">
            <router-link class="post-username" :to="{ name: '', params: {} }">adrien.czerwinski</router-link>
            <p class="time">53 min</p>
          </div>
        </div>
        <!-- description -->
        <div class="post-description">
          <p class="legend">First tattoo</p>
          <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <!-- comments -->
        <div class="last-comment-container">
          <div class="comment-user">
            <img src="/img/stories/face4.jpeg" alt="">
            <p class="comment-username">claudiakreszka</p>
          </div>
          <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</p>
        </div>


        <!-- display comments -->
        <p class="link-comments">Afficher les commentaires (33)</p>

        <!-- like -->
        <div class="like-container">
          <i class="ui heart icon liked"></i>
          <p class="like liked"> 41 j'aime</p>
        </div>

        <!-- comment -->
        <!-- <div class="comment-container">
          <textarea name="name" placeholder="Votre commentaire..."></textarea>
          <button class="ui button"><img src="/img/app/send5.png" alt=""></button>
        </div> -->

      </div>

      <!-- diaporama -->
      <div class="diapo-container">
        <img src="/img/post1.jpg" alt="">
        <img src="/img/post3.jpg" alt="">
        <img src="/img/post2.jpg" alt="">
        <img src="/img/post4.jpg" alt="">
      </div>



      <!-- commenting -->
      <div class="ui edit-container grid">
        <div class="ui fourteen wide column text-container">
          <textarea name="name" placeholder="Votre commentaire..." id="edit-zone"></textarea>
        </div>
        <div class="ui two wide column send-container">
          <button class="ui button"><img src="/img/app/send3.png" alt=""></button>
        </div>
      </div>
    </div>





    <div class="ui grid post" v-show="!mainLoader">

      <!-- Picture -->
      <div class="ui eight wide column picture-container">
        <img src="/img/post2.jpg" alt="">
      </div>


      <!-- Informations -->
      <div class="ui eight wide column post-content">
        <!-- header -->
        <div class="post-header">
          <img src="/img/stories/face1.jpeg" alt="">
          <div class="infos">
            <router-link class="post-username" :to="{ name: '', params: {} }">maria.cznawiasz</router-link>
            <p class="time">53 min</p>
          </div>
        </div>
        <!-- description -->
        <div class="post-description">
          <p class="legend">First tattoo</p>
          <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <!-- comments -->
        <div class="last-comment-container">
          <div class="comment-user">
            <img src="/img/stories/face2.jpeg" alt="">
            <p class="comment-username">claudiakreszka</p>
          </div>
          <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</p>
        </div>
        <!-- display comments -->
        <p class="link-comments">Afficher les commentaires (33)</p>

        <!-- like -->
        <div class="like-container">
          <i class="ui heart icon"></i>
          <p class="like"> 0 j'aime</p>
        </div>

      </div>

      <!-- diaporama -->
      <!-- <div class="diapo-container">
        <img src="/img/post2.jpg" alt="">
        <img src="/img/post1.jpg" alt="">
      </div> -->


      <!-- commenting -->
      <div class="ui edit-container grid">
        <div class="ui fourteen wide column text-container">
          <textarea name="name" placeholder="Votre commentaire..." id="edit-zone"></textarea>
        </div>
        <div class="ui two wide column send-container">
          <button class="ui button"><img src="/img/app/send3.png" alt=""></button>
        </div>
      </div>
    </div>







  </div>
</template>

<script>
export default {
  data() {
    return {
      mainLoader: true,
    }
  },

  mounted() {
    let self = this
    setTimeout(function() {
      self.mainLoader = false
    }, 1000)


    let comment = document.getElementById('edit-zone')

    comment.addEventListener('input', function() {
      this.style.height = '35px';
      this.style.cssText = 'height:' + this.scrollHeight + 'px';
    })
  }
}
</script>


<style>

.home {
  padding: 1rem;
}

.post {
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.11);
  margin-bottom: 4rem !important;
}

.post .picture-container {
  height: 100%;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  /* border-right: 1px solid rgba(0, 0, 0, 0.11); */
  background-color: black;
  height: 500px;
}

.post .picture-container img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}



.post .post-content {
  height: 500px;
}

.post .post-content .post-header {
  width: 100%;
  height: 60px;
  /* background-color: #f5f5f5; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
}
.post .post-content .post-header img {
  width: 55px;
  height: 55px;
  border-radius: 55px;
  object-fit: cover;
  margin-right: 10px;
  margin-left: 10px;
}

.post .post-content .post-header .infos .post-username {
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15.5px;
  color: #101010 !important;
}
.post .post-content .post-header .infos .time {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 13px;
  /* color: black; */
}





.post .post-content .post-description {
  width: 100%;
  height: 150px;
  /* background-color: #f6f6f6; */
  text-align: left;
  padding: 1rem;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
}
.post .post-content .post-description .legend {
  font-weight: 500;
  font-size: 15px;
  color: #151515;
  margin-bottom: 3px;
}
.post .post-content .post-description .content {
  line-height: 22px;
  font-size: 14.5px;
  color: black;
}









.post .post-content .last-comment-container {
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  text-align: left;
  flex-wrap: wrap;
  font-weight: 400 !important;
  font-family: Roboto, sans-serif;
  padding-top: 0;
}
.post .post-content .last-comment-container .comment-user {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 35px;
}
.post .post-content .last-comment-container .comment-user img {
  width: 35px;
  height: 35px;
  border-radius: 35px;
  object-fit: cover;
}
.post .post-content .last-comment-container .comment-username {
  padding-left: 10px;
  font-weight: 500;
  color: black;
}

.post .post-content .last-comment-container .content {
  font-weight: 400 !important;
  font-size: 13px;
  padding-top: 5px;
}




.link-comments {
  color: #2688e2;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: left;
  padding-left: 1rem;
  cursor: pointer;
}
.link-comments:hover {
  color: #1663aa;
}








.post .like-container {
  width: 100%;
  height: auto;
  padding: 1rem;
  text-align: left;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start;
  position: absolute;
  bottom: 20px;
}

.post .like-container .like {
  font-size: 16px;
  font-family: Roboto, sans-serif;
  padding-left: 5px;
  color: #303030;
}
.post .like-container i {
  font-size: 22px;
  color: #000;
  opacity: 0.23;
  transition: .2s;
  cursor: pointer;
  /* padding-top: 2px; */
  /* margin-top: -2px; */
}
.post .like-container i.liked {
  opacity: 1;
  color: #e03939;
}
.post .like-container i:hover {
  opacity: 1;
  color: #e03939;
}






.post .diapo-container {
  width: 100%;
  height: 150px;
  /* background-color: #0069D3; */
  border-top: 1px solid rgba(0, 0, 0, 0.11);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.post .diapo-container img {
  width: 122px;
  height: 122px;
  border: 2px solid #ffffff;
  margin-right: 13px;
  object-fit: cover;
}
.post .diapo-container img:hover {
  border: 2px solid #5993cd;
}



.ui.loader {
  margin-top: 50px !important;
}

.ui.loader::after {
  /* border-color: #757575 transparent transparent !important; */
}











/*  */


.post .edit-container {
  width: 100%;
  min-height: auto;
  margin: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.13);
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 2px; */
}


.post .edit-container .attachment-container {
  text-align: center;
}
.post .edit-container .attachment-container i {
  font-size: 19px;
}

.post .edit-container .text-container textarea {
  height: 35px;
  padding-top: 10px;
  /* padding-bottom: 10px; */
  padding-left: 10px;
  width: 100%;
  resize: none;
  font-family: Roboto, sans-serif;
  font-size: 15.3px;
  overflow: hidden;
  border: 0;
}
.post .edit-container .send-container {
  display: flex;
  justify-content: center;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.post .edit-container .send-container button {
  width: 50px !important;
  height: 50px !important;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  /* align-items: center !important; */
  background: none;
  border: none;
  box-shadow: none;
  /* border-left: 1px solid rgba(0, 0, 0, 0.17); */
}
.post .edit-container .send-container button img {
  width: 27px;
  height: 27px;
}
</style>
