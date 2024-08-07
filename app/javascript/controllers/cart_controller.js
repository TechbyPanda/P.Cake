import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['id', 'quantity', 'price']

  currentId = ''

  headers = {
    "Content-Type": "application/json",
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }

  increment(event) {
    this.currentId = event.currentTarget.dataset.id

    fetch(`/line_items/${this.currentId}/increment`, {
      method: "PATCH",
      headers: this.headers
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // const quantity = parseInt(this.quantityTarget.textContent) + 1;
        // this.quantityTarget.textContent = quantity;
        // console.log(this.getPrice())
        // this.setPrice(this.getPrice() * quantity)
      } else {
        console.error(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
  }

  decrement(event) {
    this.currentId = event.currentTarget.dataset.id
    fetch(`/line_items/${this.currentId}/decrement`, {
      method: "PATCH",
      headers: this.headers
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // const quantity = parseInt(this.quantityTarget.textContent) - 1;
        // this.quantityTarget.textContent = quantity;
        // this.setPrice(this.getPrice() * quantity)
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
    const price = this.priceTarget.getAttribute('price')
    return parseInt(price)
  }

  getRow(event){
    return event.currentTarget.closest(`[id="id-${this.currentId}"]`)
  }

  getId() {
    console.log(this.idTarget)
    let currentTarget = `id-${this.currentId}Target`
    console.log(this[currentTarget])
    return this[currentTarget]
  }
}

function extractIntegerFromPrice(priceString) {
    const cleanedPrice = priceString.replace(/[₹,]/g, '').split('.')[0];
    return parseInt(cleanedPrice);
}
  