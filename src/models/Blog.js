import { Profile } from "./Account.js"

export class Blog {
    constructor(data) {
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt).toLocaleDateString()
        this.creator = new Profile(data.creator)
    }
}








