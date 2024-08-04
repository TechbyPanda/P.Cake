import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['id', 'quantity']

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
      } else {
        console.error(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
  }

  getId() {
    return this.idTarget.id;
  }
}
