
import { Injectable, signal } from '@angular/core';

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
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // MOCK DATA: This matches exactly what the NestJS backend described below will return
    const mockCloudinaryResponse: ProjectMedia[] = [
      {
        type: 'video',
        category: 'process',
        title: 'Application Résine Epoxy - Timelapse',
        url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4', // Demo URL for visualization
        public_id: 'EuroCoat Prestige/ECP - Videos/timelapse_resin',
        width: 1920,
        height: 1080,
        duration: 15.4,
        format: 'mp4'
      },
      {
        type: 'video',
        category: 'process',
        title: 'Technique Wrapping 3M',
        url: 'https://res.cloudinary.com/demo/video/upload/c_crop,h_200,w_300/dog.mp4', 
        public_id: 'EuroCoat Prestige/ECP - Videos/wrapping_demo',
        width: 1920,
        height: 1080,
        duration: 42.0,
        format: 'mp4'
      },
      {
        type: 'video',
        category: 'process',
        title: 'Finition Sol Industriel',
        url: 'https://res.cloudinary.com/demo/video/upload/e_blur:200/dog.mp4',
        public_id: 'EuroCoat Prestige/ECP - Videos/industrial_finish',
        width: 1080,
        height: 1920, // Portrait video
        duration: 25.5,
        format: 'mp4'
      }
    ];

    // Merge videos into portfolio
    this.portfolio.update(current => {
      // Remove old videos to prevent duplicates if fetched multiple times
      const imagesOnly = current.filter(i => i.type !== 'video');
      return [...imagesOnly, ...mockCloudinaryResponse];
    });

    return mockCloudinaryResponse;
  }
}
