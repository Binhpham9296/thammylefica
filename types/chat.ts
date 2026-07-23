export type Role = "user" | "assistant";

export interface ChatMessage {
  role: Role;
  content: string;
  createdAt?: number;
}

export interface ProductCardData {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  url: string;
}

export interface ChatResponse {
  reply: string;
  products?: ProductCardData[];
}

export interface ChatRequest {
  messages: ChatMessage[];
}
