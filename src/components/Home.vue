<template>
  <div class="home-container">
    <Slide>
      <a href="">
        <span>About</span>
      </a>
      <a href="">
        <span>Education</span>
      </a>
      <a href="">
        <span>Experience</span>
      </a>
      <a href="">
        <span>Contact</span>
      </a>
    </Slide>
    <section class="section">
      <img src="../assets/portfolio.jpg" />
    </section>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "Home",
  props: {},
  data: () => {
    return {};
  },
  components: {
    Slide,
  },
};
</script>

<style>
.home-container {
  height: 100vh;
  width: 100vw;
  background: rgb(26, 26, 26);
}

.section {
  height: 85vh;
  width: 80vw;
  margin: 0 auto;
}

img {
  height: 45%;
  top: 15vh;
  left: -15vw;
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
</style>
