<template>
  <div>
    <h2>Template Static Asset Reference</h2>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
module.exports = {
  name: "Index",
  data() {
    return {
      msg: "msg",
    };
  },
};
</script>
<style scoped>
img {
  width: 30px;
}

.relative-style-url {
  display: inline-block;
  height: 30px;
  width: 30px;
  background-size: 30px;
}
</style>
