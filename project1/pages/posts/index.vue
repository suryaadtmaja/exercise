<template>
  <div class="container">
    <modal v-if="showModal" @closemodal="showModal=false"/>
    <h1>Blog</h1>
    <div class="row">
        <div v-for="(post, index) in posts" :key="index" class="col-md-3">
          <div class="card">
            <nuxt-link :to="{name: 'posts-id', params:{id: post.id}}">
            <img class="card-img-top" :src="post.thumbnailUrl" alt="Card image cap">
            </nuxt-link>
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text">{{post.title}}</p>
              <a href="#" @click="showModal=true" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from '~/components/modal'

export default {
  components: {
    Modal
  },
    asyncData({ req, params }) {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return { posts: res.data.slice(0, 5) }
            })
    },
    head: {
        title: 'List posts'
    },
    data () {
      return {
        showModal: false
      }
    }
}
</script>
