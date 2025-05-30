import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './invertory.component.html',
  styleUrls: ['./invertory.component.scss'],
  standalone: false,
})
export class InventoryComponent implements OnInit {
  showModal = false;

  constructor(private productService: ProductService) {}

  page = signal<string>('Page 1 of 10');

  products: Product[] = [];

  // Use Partial<Product> for easier form handling and initializing default values
  newProduct: Partial<Product> = {
    name: '',
    category: '',
    price: null,
    quantity: null,
    unit: '',
    exp_date: '',
    threshold: null,
  };

  ngOnInit(): void {
    // Load products from backend
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  close() {
    this.showModal = false;
  }

  // Add a product after validating fields
  addProduct() {
    // Validate required fields
    if (
      !this.newProduct.name ||
      !this.newProduct.category ||
      this.newProduct.price === null ||
      this.newProduct.quantity === null ||
      !this.newProduct.unit ||
      !this.newProduct.exp_date ||
      this.newProduct.threshold === null
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Convert fields to correct types for backend
    this.newProduct.price = Number(this.newProduct.price);
    this.newProduct.quantity = Number(this.newProduct.quantity);
    this.newProduct.threshold = Number(this.newProduct.threshold);

    console.log('Sending to backend:', this.newProduct);

    this.productService.addProduct(this.newProduct as Product).subscribe({
      next: (res) => {
        console.log('Product added successfully', res);

        // ✅ Add the new product and trigger table update
        this.products = [res, ...this.products];

        this.showModal = false;

        // Reset form
        this.newProduct = {
          name: '',
          category: '',
          price: null,
          quantity: null,
          unit: '',
          exp_date: '',
          threshold: null,
        };
      },
      error: (err) => {
        console.error('Error adding product', err);
        alert('Failed to add product. Check console for details.');
      },
    });
  }

  getStockStatus(
    quantity: number,
    threshold: number
  ): 'out of stock' | 'low stock' | 'in stock' {
    if (quantity === 0) {
      return 'out of stock';
    } else if (quantity <= threshold) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }
  resetNewProductForm() {
    this.newProduct = {
      name: '',
      category: '',
      price: null,
      quantity: null,
      unit: '',
      exp_date: '',
      threshold: null,
    };
  }
}
