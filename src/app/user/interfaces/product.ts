export interface Product {
  id?: number; // optional if not needed at creation
  name: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;         // ✅ should be string
  exp_date: string;     // ISO format (e.g., '2024-12-31')
  threshold: number;
}
