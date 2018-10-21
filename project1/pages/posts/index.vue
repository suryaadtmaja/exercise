<template>
  <div class="container">
    <modal v-if="showModal" @closemodal="showModal=false"/>
    <h1>Blog</h1>
    <div class="row">
      <!-- {{ posts }} -->
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal
  },
  computed: {
    ...mapGetters({
      posts: 'posts/items'  
    }),
    items() {
      return this.posts.data
    }
  },
  methods: {
    async getNews() {
      try {
        this.loading = true
        await this.$store.dispatch('posts/items')
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log('ERROR CUY')
      }
    }
  },
  mounted() {
    this.getNews()
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
