
import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  category: 'industrial' | 'design' | 'process';
  title: string;
  // Cloudinary specific fields (Optional until fetched)
  public_id?: string;
  width?: number;
  height?: number;
  duration?: number;
  format?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  companyName = signal('EuroCoat Prestige');
  private http = inject(HttpClient);
  private apiUrl = 'https://eurocoat-api.onrender.com/api/videos';


  // Static Images (Local/Stock)
  private staticImages: ProjectMedia[] = [
    { type: 'image', category: 'industrial', url: 'https://picsum.photos/800/600?random=1', title: 'Parking Souterrain Casablanca' },
    { type: 'image', category: 'industrial', url: 'https://picsum.photos/800/600?random=2', title: 'Entrepôt Logistique Tanger' },
    { type: 'image', category: 'industrial', url: 'https://picsum.photos/800/600?random=3', title: 'Usine Pharmaceutique Rabat' },
    { type: 'image', category: 'design', url: 'https://picsum.photos/800/600?random=4', title: 'Finition Marbre - Cuisine Premium' },
    { type: 'image', category: 'design', url: 'https://picsum.photos/800/600?random=5', title: 'Rénovation Plan de Travail' },
    { type: 'image', category: 'design', url: 'https://picsum.photos/800/600?random=6', title: 'Détail Finition Mate' },
    { type: 'image', category: 'design', url: 'https://picsum.photos/800/600?random=7', title: 'Wrapping Mobilier Haut de Gamme' },
  ];

  // Signal that acts as the single source of truth for the gallery
  portfolio = signal<ProjectMedia[]>(this.staticImages);

  services = [
    {
      id: 'indus',
      title: 'Sols Industriels & Résines',
      desc: 'Solutions époxy et polyuréthane haute résistance pour usines, parkings et entrepôts.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      id: 'design',
      title: 'Architectural Wrapping',
      desc: 'Rénovation esthétique par film adhésif technique (Di-Noc) pour hôtellerie et résidentiel premium.',
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      id: 'tech',
      title: 'Étanchéité & Technique',
      desc: 'Protection des structures, cuvelage et imperméabilisation aux normes européennes.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  /**
   * Simulates fetching videos from the NestJS Backend
   * Endpoint: GET /api/videos
   */
  async fetchCloudinaryVideos(): Promise<ProjectMedia[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<any[]>(this.apiUrl)
      );

      const cloudName = 'eurocoat';

      const videos: ProjectMedia[] = response.map(video => ({
        type: 'video',
        category: 'process',
        title: video.public_id,
        public_id: video.public_id,
        format: 'mp4', // FORCE MP4
        width: video.width,
        height: video.height,
        url: `https://res.cloudinary.com/${cloudName}/video/upload/f_mp4,q_auto/${video.public_id}.mp4`
      }));

      this.portfolio.update(current => {
        const imagesOnly = current.filter(i => i.type !== 'video');
        return [...imagesOnly, ...videos];
      });

      return videos;

    } catch (error) {
      console.error('Erreur API vidéos:', error);
      return [];
    }
  }




}
