export interface Project {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  raised: number;
  goal: number;
  createAt?: number
}