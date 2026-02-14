import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VideoPlaybackService {

    private activeVideo: HTMLVideoElement | null = null;

    register(video: HTMLVideoElement) {
        // Si une autre vidéo joue → on la coupe
        if (this.activeVideo && this.activeVideo !== video) {
            this.activeVideo.pause();
            this.activeVideo.currentTime = 0;
        }

        this.activeVideo = video;
    }

    unregister(video: HTMLVideoElement) {
        if (this.activeVideo === video) {
            this.activeVideo = null;
        }
    }
}
