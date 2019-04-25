<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test name="周三"></test>
    <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker>
  </div>
</template>

<script>
export default {
    data () {
        return {
            color: '#ff0000'
        }
    },
    methods: {
        headleChangeColor () {
            console.log('颜色改变')
        }
    }
}
</script>