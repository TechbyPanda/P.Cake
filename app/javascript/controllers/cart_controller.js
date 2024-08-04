import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['id', 'quantity', 'price']

  headers = {
    "Content-Type": "application/json",
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }

  increment() {
    const lineItemId = this.getId();
    fetch(`/line_items/${lineItemId}/increment`, {
      method: "PATCH",
      headers: this.headers
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const quantity = parseInt(this.quantityTarget.textContent) + 1;
        this.quantityTarget.textContent = quantity;
        console.log(this.getPrice())
        this.setPrice(this.getPrice() * quantity)
      } else {
        console.error(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
  }

  decrement() {
    const lineItemId = this.getId();
    fetch(`/line_items/${lineItemId}/decrement`, {
      method: "PATCH",
      headers: this.headers
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const quantity = parseInt(this.quantityTarget.textContent) - 1;
        this.quantityTarget.textContent = quantity;
        this.setPrice(this.getPrice() * quantity)
      } else {
        console.error(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
  }

  setPrice(price) {
    this.priceTarget.textContent = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  }  

  getPrice(){
    // return extractIntegerFromPrice(this.priceTarget.textContent)
    const price = this.priceTarget.getAttribute('price')
    return parseInt(price)
  }

  getId() {
    return this.idTarget.id;
  }
}

function extractIntegerFromPrice(priceString) {
    const cleanedPrice = priceString.replace(/[₹,]/g, '').split('.')[0];
    return parseInt(cleanedPrice);
}
  