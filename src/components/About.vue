<template>
  <section class="about">
    <h1>hello</h1>
  </section>
</template>

<script>
export default {};
</script>

<style>
.about {
  height: 100vh;
  width: 100vw;
  animation: pageShow 1s linear forwards;
  animation-delay: 9s;
}

@keyframes pageShow {
  0% {
    display: none;
  }
  90% {
    display: none;
  }
  100% {
    display: inline-block;
  }
}
</style>
