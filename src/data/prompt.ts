export interface Prompt {
  createdAt: Date | null;
  description: string;
  id: number;
  likes: number;
  reports: number;
  show: boolean;
  tags: string[];
}
