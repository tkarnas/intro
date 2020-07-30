<template>
  <div id="app">
    <Intro class="intro" />
    <Slide>
      <router-link :to="'/'"><span>Home</span></router-link>
      <router-link :to="'/About'"><span>About</span></router-link>
    </Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import { Slide } from "vue-burger-menu";

export default {
  name: "App",
  components: {
    Intro,
    Slide,
  },
  data: () => {
    return {
      display: "none",
    };
  },
  methods: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.intro {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: rgb(26, 26, 26);
  color: tomato;
  animation: slide 1s linear forwards;
  animation-delay: 8s;
}
.bm-burger-bars {
  background-color: tomato;
  animation: burger 9s linear forwards;
}

.bm-menu {
  background-color: tomato;
}

.bm-item-list > * > span {
  color: black;
}

@keyframes burger {
  0% {
    scale: 0%;
    opacity: 0;
  }
  90% {
    scale: 0%;
    opacity: 0;
  }
  100% {
    scale: 100%;
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    display: none;
  }
}
</style>
