<template lang="html">
<div class="message">
  <div class="message-container">
    <div class="message-header">
      <div class="author-container">
        <img src="/img/stories/face2.jpeg" alt="">
        <router-link :to="{ name: '', params: {} }">adrien.czerwinski</router-link>
      </div>
      <div class="menu-message">
        <i class="ui ellipsis horizontal icon"></i>
      </div>
    </div>
    <div class="message-content" id="dialog">


      <div class="dialog dial-contact">
        <p class="time">10:42</p>
        <div class="message">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="dialog dial-user">
        <p class="time">10:44</p>
        <div class="message">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="dialog dial-contact">
        <p class="time">10:46</p>
        <div class="message">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
      <div class="dialog dial-contact">
        <p class="time">10:50</p>
        <div class="message">
          <p>Yes.</p>
        </div>
      </div>
      <div class="dialog dial-user">
        <p class="time">10:54</p>
        <div class="message">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </div>
      </div>





    </div>
    <div class="ui edit-container grid">
      <div class="ui two wide column attachment-container">
        <i class="image outline icon"></i>
      </div>
      <div class="ui twelve wide column text-container">
        <textarea name="name" placeholder="Votre message..." id="edit-zone"></textarea>
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
  mounted() {


    let dialog = document.getElementById('dialog')
    dialog.scrollTop = dialog.scrollHeight


    let message = document.getElementById('edit-zone')

    message.addEventListener('input', function() {
      this.style.height = '35px';
      this.style.cssText = 'height:' + this.scrollHeight + 'px';
    })
  }
}
</script>

<style lang="css">
.message .message-container {
  width: 100%;
  height: auto;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.13);
}


.message .message-container .message-header {
  width: 100%;
  height: 80px;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.message .message-container .message-header .author-container {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.message .message-container .message-header .author-container img {
  width: 55px;
  height: 55px;
  border-radius: 55px;
  object-fit: cover;
  margin-right: 15px;
  margin-left: 20px;
}
.message .message-container .message-header .author-container a {
  font-family: Roboto, sans-serif;
  font-size: 15.5px;
  font-weight: 500;
  color: #222;
}
.message .message-container .message-header .menu-message {
  padding-right: 20px;
  font-size: 24px;
  color: #111;
}



/* ******************** */


.message .message-container .message-content {
  width: 100%;
  height: 500px;
  margin: auto;
  overflow-y: scroll;
}

.message .message-container .message-content .dialog {
  width: 100%;
  /* height: 30px; */
  /* background-color: #efeeee; */
  /* margin-bottom: 20px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.message .message-container .message-content .dialog p.time {
  font-family: Roboto, sans-serif;
  font-size: 11px;
  color: #57535d;
  margin-top: auto;
  margin-bottom: auto;
}
.message .message-container .message-content .dialog.dial-contact {
  flex-direction: row-reverse;
}
.message .message-container .message-content .dialog:first-child {
  margin-top: 30px;
}
.message .message-container .message-content .dialog:last-child {
  margin-bottom: 30px;
}


.message .message-container .message-content .dialog .message {
  margin: 0.7rem 1.5rem 0.7rem 1.5rem;

  padding: 0.7rem 1rem 0.7rem 1rem;
  background-color: #1661d2;

  max-width: 60%;
  border-radius: 6px;
}
.message .message-container .message-content .dialog .message p {
  color: white;
  font-family: Roboto, sans-serif;
  text-align: left;
  width: 100%;
  height: auto;
  margin: auto;
}
.message .message-container .message-content .dialog.dial-contact .message {
  background-color: #f1f1f1;
}
.message .message-container .message-content .dialog.dial-contact .message p {
  color: #57535d;
}

/* ******************** */



.message .message-container .edit-container {
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


.message .message-container .edit-container .attachment-container {
  text-align: center;
}
.message .message-container .edit-container .attachment-container i {
  font-size: 19px;
}

.message .message-container .edit-container .text-container textarea {
  height: 35px;
  padding-top: 10px;
  /* padding-bottom: 10px; */
  padding-left: 10px;
  width: 100%;
  resize: none;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  overflow: hidden;
  border: 0;
}
.message .message-container .edit-container .send-container {
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
}
.message .message-container .edit-container .send-container button {
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
.message .message-container .edit-container .send-container button img {
  width: 27px;
  height: 27px;
}

</style>
