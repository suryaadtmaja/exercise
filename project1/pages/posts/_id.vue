<template>
  <div class="container mt-5 mb-5">
    <div class="row">
    <div class="col">
      <img :src="post.url">
    </div>
    <div class="col">
      <h1 style="font-size: 1.5rem">{{post.title}}</h1>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData({ req, params }) {
        return axios.get('https://jsonplaceholder.typicode.com/photos/' + params.id)
            .then((res) => {
                return { post: res.data }
            })
    },
    head() {
    return {
        title: 'List posts'
    }
    },
}
</script>