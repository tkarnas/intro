<template>
  <div id="app">
    <Intro class="intro" />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  components: {
    Intro,
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
  animation-delay: 4s;
}
.bm-burger-bars {
  background-color: tomato;
  animation: burger 5s linear forwards;
}

.bm-menu {
  background-color: rgb(68, 68, 68);
}

.bm-item-list > * > span {
  color: tomato;
}
header {
  display: flex;
  width: 80%;
  margin: auto;
  align-items: center;
  height: 5vh;
}
.nav {
  flex: 1;
  background: greenyellow;
}

.nav__list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__item {
  margin: 0 2rem;
}

.logo {
  display: flex;
  background: cornflowerblue;
}

.logo img {
  display: block;
  height: 3vh;
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
