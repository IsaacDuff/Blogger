<template>
    <div class="container-fluid">
        <section class="row justify-content-center">
            <div class="col-10 mt-4">
                <div class="row justify-content-between">
                    <div class="col-4 text-end">
                        <img class="profile-img" :src="profile?.picture" :alt="profile?.name">
                    </div>
                    <div class="col-8 ps-5">
                        <h2>{{ profile?.name }}</h2>
                        <p>{{ profile?.bio }}</p>
                        <button class="btn btn-warning"><i class="mdi mdi-pen"></i></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="row justify-content-center p-4">
            <div class="col-10 my-4 border border-dark p-3 elevation-4" v-for="b in blogs" :key="b.id">
                <BlogCard :blog="b" />

            </div>
        </section>
    </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup() {
        const route = useRoute()

        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                // logger.log('getting profile by ID', profileId)
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.log(error.message)
                Pop.error(error.message)
            }
        }

        async function getBlogsById() {
            try {
                const profileId = route.params.profileId
                await blogsService.getBlogsById({ creatorId: profileId })
            } catch (error) {
                logger.log(error.message)
                Pop.error(error.message)
            }
        }

        onMounted(() => {
            getProfileById()
            getBlogsById()
        })


        return {
            route,
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
        };
    },
};
</script>


<style scoped lang="scss">
.profile-img {
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
}
</style>