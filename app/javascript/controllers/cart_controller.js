import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['id', 'qty', 'price']

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
        this.updateRow(true)
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
        this.updateRow()
      } else {
        console.error(data.message);
      }
    })
    .catch(error => console.error("Error:", error));
  }

  setPrice(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  }

  updateRow(inc){
    let qty = this.qtyTarget
    let qtyValue = parseInt(qty.textContent)
    let price = this.priceTarget
    let priceValue = parseInt(price.getAttribute("price"))
    if(inc){
      qty.textContent = ++qtyValue
      price.textContent = this.setPrice(qtyValue * priceValue)
    }else{
      qty.textContent = --qtyValue
      price.textContent = this.setPrice(qtyValue * priceValue)
    }
  }
}

function extractIntegerFromPrice(priceString) {
    const cleanedPrice = priceString.replace(/[₹,]/g, '').split('.')[0];
    return parseInt(cleanedPrice);
}
  