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
        this.baseUrl = "http://localhost:5050";
        this.axios = axios.create({
            baseURL: this.baseUrl,
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

    async postVideo(title, description) {
        try {
            const postData = {
                title: title,
                description: description,
            };
            console.log(postData);
            const response = await this.axios.post("/videos", postData);
            return response.data;
        } catch (error) {
            throw new Error("Failed to post videos: " + error.message);
        }
    }
}