<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for='item in items'>{{ item }}</div>
    <button type="button" name="button" @click='reverse'>反转</button>
    <form class="" action="" method="post">
      <input type="text" name="" value="" v-model='done' placeholder="add me">
      <button type="submit" name="button">递交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['1','2','3'],
      index: 1,
      done: '',
    };
  },
  methods: {
    reverse() {
      // this.items.reverse();
      if (this.index <= 3) {
        this.items = [`1.${this.index}`, '2','3'];
      } else {
        this.items.reverse();
        this.items.pop();
        this.items.reverse();
      }
      this.index ++;
    }
  },
}

</script>

<style lang='scss'>

</style>
