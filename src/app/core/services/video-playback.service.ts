import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideoPlaybackService {
    private currentVideo: HTMLVideoElement | null = null;

    register(video: HTMLVideoElement) {
        if (this.currentVideo && this.currentVideo !== video) {
            this.currentVideo.pause();
            this.currentVideo.currentTime = 0;
        }
        this.currentVideo = video;
    }

    unregister(video: HTMLVideoElement) {
        if (this.currentVideo === video) {
            this.currentVideo = null;
        }
    }
}
