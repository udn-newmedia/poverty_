<template>
    <div class="container">
        <h2>count:<span class="count">{{ count }}</span></h2>
        <button @click="actionIncrease"> + </button>
        <button @click="actionDecrease"> - </button>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
            count: 'getCount',
        }),
    },
    methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
    ]),
    // 其他 method call action 的方法
    callAction() {
      // example
      this.actionIncrease;
    }
  },
}

</script>

<style>
    .count{
        color: red;
    }
</style>