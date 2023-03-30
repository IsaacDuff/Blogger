import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"


class ProfilesService {
    async getProfileById(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        // logger.log('[getting all the profile stuff]', res.data)
        AppState.activeProfile = new Profile(res.data)
        // logger.log(AppState.activeProfile)
    }
}
export const profilesService = new ProfilesService()