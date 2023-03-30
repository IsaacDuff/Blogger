<template>
    <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Blog of The Day</h1>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center">
                        <img class="img-fluid" :src="blog?.imgUrl" :alt="blog?.title">
                    </div>
                    <div class="d-flex ">
                        <img class="p-3 creator-img" :src="blog?.creator?.picture" :alt="blog?.creator?.name">
                        <div class="p-3">
                            <h3>{{ blog?.title }}</h3>
                            <h6>Created By: {{ blog?.creator?.name }}</h6>
                            <h6>Created On: {{ blog?.createdAt }}</h6>
                        </div>
                    </div>
                    <p>{{ blog?.body }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed } from 'vue';

export default {
    setup() {
        return {
            blog: computed(() => AppState.activeBlog)

        };
    },
};
</script>


<style scoped lang="scss">
.creator-img {
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
}
</style>