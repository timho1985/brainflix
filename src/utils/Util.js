import axios from "axios";

export function getDateStr(ts) {
    let date;
    if (ts) {
        date = new Date(ts);
    } else {
        date = new Date();

    }
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;
    return date;
}

export class BrainflixApi {
    constructor() {
        this.apiKey = "fd39feb0-8a1e-4099-9352-8cd082450bae";
        this.baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
        this.axios = axios.create({
        baseURL: this.baseUrl,
        params: {
            api_key: this.apiKey,
        },
        });
    }

    async getVideos() {
        try {
            const response = await this.axios.get("/videos");
            return response.data;
        } catch (error) {
            throw new Error("Failed to get videos: " + error.message);
        }
    }

    async getVideo(id) {
        try {
            const response = await this.axios.get(`/videos/${id}`);
            return response.data;
        } catch (error) {
            throw new Error("Failed to get videos: " + error.message);
        }
    }

    async postComment(id, comment) {
        try {
            const response = await this.axios.post(`/videos/${id}/comments`, comment);
            return response.data;
        } catch (error) {
            throw new Error("Failed to post comment: " + error.message);
        }
    }
}