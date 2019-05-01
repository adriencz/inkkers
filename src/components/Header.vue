<template lang="html">
  <div class="ui top fixed menu app-header">
    <div class="ui container">
      <router-link :to="{ name: 'home', params: {} }"><p class="item item-logo">!nkkers</p></router-link>
      <div class="right menu">
        <div class="item">
          <router-link :to="{ name: '', params: {} }"><img src="/img/app/calendar.png" alt=""></router-link>
        </div>
        <div class="item">
          <router-link :to="{ name: '', params: {} }"><img src="/img/app/like.png" alt=""></router-link>
        </div>
        <div class="item">
          <router-link :to="{ name: 'messages', params: {} }"><img src="/img/app/message.png" alt=""></router-link>
        </div>
        <div class="item">
          <router-link :to="{ name: '', params: {} }"><img src="/img/app/user.png" alt=""></router-link>
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
.app-header {
  box-shadow: none !important;
}

.app-header .item-logo {
  font-size: 27px;
  font-family: cool;
  margin: 0;
}

.app-header .item {
  border: none;
}

.app-header .right.menu .item img {
  width: 24px;
}
.app-header .right.menu .item::before {
  display: none;
}
</style>
