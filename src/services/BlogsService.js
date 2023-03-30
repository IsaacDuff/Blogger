import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"



class BlogsService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        // logger.log('got blogs', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
        logger.log('[Mapped Blogs]', AppState.blogs)
    }

    async getBlogsById(query) {
        const res = await api.get('api/blogs', { params: query })
        // logger.log('[get blogs by id]', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
        logger.log('got all blogs by id', AppState.blogs)
    }

}

export const blogsService = new BlogsService()