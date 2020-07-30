<template>
  <div class="home-container">
    <section class="section">
      <div class="box1">
        <div class="boks">
          <img class="arrow" src="../assets/arrow.png" alt="" />
          <p class="text2">
            ...and this is Me. Wannabe Front-end developer of next generation.
          </p>
          <p class="text3">
            p.s. I'm looking for a job! <span class="emoji">&#128517;</span>
          </p>
        </div>
      </div>
      <div class="box2">
        <img class="me" src="../assets/portfolio.jpg" />
      </div>
      <div class="box3">
        <div class="boks2">
          <img class="arrow2" src="../assets/arrow.png" alt="" />
          <p class="text">Hi, this is Chicago..</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data: () => {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap";

.home-container {
  font-family: "Source Code Pro", monospace;
  font-weight: bolder;
  height: 100vh;
  width: 100vw;
  color: rgb(26, 26, 26);
  background-image: url("../assets/pozadina2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.section {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "box2 box3"
    "box1 box1";
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  grid-column-gap: 1rem;
  grid-row-gap: 0rem;
}

.box1,
.box2,
.box3 {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box1 {
  grid-area: box1;
  display: flex;
  align-items: flex-start;
  justify-content: left;
}
.box2 {
  grid-area: box2;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.box3 {
  grid-area: box3;
  display: flex;
  align-items: center;
  justify-content: left;
}

.boks {
  height: 20vh;
  width: 50vw;
  color: whitesmoke;
  font-size: 3rem;
  margin: 0 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.boks2 {
  height: 10vh;
  width: 40vw;
  font-size: 3rem;
  color: whitesmoke;
  margin: 0 2rem 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.text {
  margin: 0 2rem;
}
.text2 {
  margin: 3rem 5rem;
  text-align: left;
}
.text3 {
  margin: 2rem 10rem;
  text-align: left;
  font-size: 1.5rem;
  color: rgba(255, 99, 71, 0.705);
}

.me {
  height: 80%;
  position: relative;
  border-radius: 2rem;
}

.arrow {
  height: 3rem;
  position: relative;
  left: 7rem;
  transform: rotateZ(240deg);
}
.arrow2 {
  height: 4rem;
  position: relative;
  top: 2rem;
  transform: rotateZ(150deg);
}

.emoji {
  font-size: 3rem;
}
</style>
