export interface Track {
  id: number;
  title: string;
  duration: string;
  featured?: string;
}

export interface ReviewSection {
  title: string;
  content: string;
  highlight?: string;
}
