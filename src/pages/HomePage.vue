<template>
  <div class="container-fluid">
    <section class="row justify-content-center p-4">
      <div class="col-10 my-4 border border-dark p-3" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />

      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js';

export default {

  setup() {

    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }

    }

    onMounted(() => {
      getBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
