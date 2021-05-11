<template>
  <div id="app">
    <v-app>
      <v-bottom-navigation v-model="value">
        <v-btn value="recent">
          <span>Recent</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>
        <template v-if="$store.state.auth">
          <v-btn value="favorites">
            <span>{{ $store.state.user.name }}</span>
            <v-icon>fas fa-user</v-icon>
          </v-btn>

          <v-btn :loading="loadbtn" @click="logout">
            <span>Logout</span>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <router-link tag="v-btn" to="/login">
            <span>Login</span>
            <v-icon>fas fa-sign-in-alt</v-icon>
          </router-link>
        </template>
      </v-bottom-navigation>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ value: 'recent', loadbtn: false }),
  methods: {
    async logout () {
      this.loadbtn = true
      await this.$store.dispatch('logout')
      this.loadbtn = false
      return this.$router.replace('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
