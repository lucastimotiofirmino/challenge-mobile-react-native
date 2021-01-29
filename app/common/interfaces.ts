export interface IHero {
  id: string;
  name: string;
  avatar: string;
  description?: string | null;
  numEvents: number;
  favorite?: boolean;
  thumbnail?: {
    path: string;
    extension: string;
  };
  events?: {
    available?: number;
  };
}