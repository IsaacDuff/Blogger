<template>
    <div class="row">
        <div class="col-8">
            <div class="d-flex p-2 align-items-center">
                <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
                    <img class="img-fluid creatorImg" :src="blog.creator.picture" :alt="blog.creator.name">
                </router-link>
                <h6 class="ps-3">{{ blog.creator.name }}</h6>
            </div>
            <div>
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.body.substring(0, 50) }}...</p>
                <b>Created On: {{ blog.createdAt }}</b>
            </div>
        </div>
        <div class="col-4 d-flex align-items-center">
            <img class="img-fluid selectable" @click="setActive(blog.id)" :src="blog.imgUrl" :alt="blog.title"
                data-bs-toggle="modal" data-bs-target="#blogModal">
        </div>
    </div>
</template>



<script>
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';

export default {
    props: {
        blog: { type: Blog, required: true }
    },


    setup() {
        return {
            setActive(blogId) {
                try {
                    // logger.log('getting correct blog id', blogId)
                    blogsService.setActive(blogId)
                } catch (error) {
                    logger.log(error.message)
                    Pop.error(error.message)
                }
            }
        };
    },
};
</script>




<style lang="scss" scoped>
.creatorImg {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
}
</style>