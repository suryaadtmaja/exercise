<template>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 2</b-col>
    <b-col>2 of 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>{{text}}</b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data() {
    return {
      text: 'name'
    }
  }
}
</script>

