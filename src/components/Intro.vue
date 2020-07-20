<template>
  <div>
    <div class="name">
      <h2>{{string}}</h2>
      <h1>{{string2}}</h1>
    </div>
    <div class="introMessage2">
      <p class="introMessage">{{message}}</p>
      <p class="introMessage">{{message2}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {},
  data: () => {
    return {
      array: ["T", "O", "M", "I", "S", "L", "A", "V "],
      array2: ["K", "A", "R", "N", "A", "S"],
      array3: ["f", "r", "o", "n", "t", "-", "e", "n", "d"],
      array4: ["d", "e", "v", "e", "l", "o", "p", "e", "r"],
      string: "", // here your string will be stored,
      string2: "",
      message: "",
      message2: ""
    };
  },
  methods: {
    appendFirstName: function() {
      const it = this.array[Symbol.iterator](); // convenient for yeilding values
      const int = setInterval(() => {
        // time interval
        const next = it.next(); // next value
        if (!next.done) {
          // done = true when the end of array reached
          this.string += " " + next.value; // concatenate word to the string
        } else {
          clearInterval(int); // when done - clear interval
        }
      }, 300); // interval duration, 1s
    },
    appendLastName: function() {
      setTimeout(() => {
        const it = this.array2[Symbol.iterator](); // convenient for yeilding values
        const int = setInterval(() => {
          // time interval
          const next = it.next(); // next value
          if (!next.done) {
            // done = true when the end of array reached
            this.string2 += " " + next.value; // concatenate word to the string
          } else {
            clearInterval(int); // when done - clear interval
          }
        }, 400); // interval duration, 1s
      }, 2400);
    },
    appendMsg: function() {
      setTimeout(() => {
        const it = this.array3[Symbol.iterator](); // convenient for yeilding values
        const int = setInterval(() => {
          // time interval
          const next = it.next(); // next value
          if (!next.done) {
            // done = true when the end of array reache
            this.message += " " + next.value; // concatenate word to the string
          } else {
            clearInterval(int); // when done - clear interval
          }
        }, 100); // interval duration, 1s
      }, 5000);
    },
    appendMsg2: function() {
      setTimeout(() => {
        const it = this.array4[Symbol.iterator](); // convenient for yeilding values
        const int = setInterval(() => {
          // time interval
          const next = it.next(); // next value
          if (!next.done) {
            // done = true when the end of array reache
            this.message2 += " " + next.value; // concatenate word to the string
          } else {
            clearInterval(int); // when done - clear interval
          }
        }, 100); // interval duration, 1s
      }, 5900);
    }
  },
  mounted() {
    this.appendFirstName(); // invoke function when ready
    this.appendLastName(); // invoke function when ready
    this.appendMsg();
    this.appendMsg2();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introMessage2 {
  display: flex;
  z-index: 1;
}

.introMessage2 p {
  margin: 5rem 2rem;
}
h2 {
  margin-bottom: 1.6rem;
}
</style>

