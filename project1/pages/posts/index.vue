<template>
  <div class="container">
    <h1>Blog</h1>
    <div class="row">
        <div v-for="(post, index) in posts" :key="index" class="col-md-3">
          <div class="card">
            <img class="card-img-top" :src="post.thumbnailUrl" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text">{{post.title}}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData({ req, params }) {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return { posts: res.data.slice(0, 5) }
            })
    },
    head: {
        title: 'List posts'
    }
}
</script>
