<template>
    <div class="row">
        <div class="col-8">
            <div class="d-flex p-2 align-items-center">
                <img class="img-fluid creatorImg"
                    src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                    alt="lame profile pic">
                <h6 class="ps-3">Creator Name</h6>
            </div>
            <div>
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.body.substring(0, 50) }}...</p>
                <b>Created On: {{ blog.createdAt }}</b>
            </div>
        </div>
        <div class="col-4 d-flex align-items-center">
            <img class="img-fluid" :src="blog.imgUrl" :alt="blog.title">
        </div>
    </div>
</template>



<script>
import { Blog } from '../models/Blog.js';

export default {
    props: {
        blog: { type: Blog, required: true }
    },


    setup() {
        return {};
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