import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ['id', 'quantity']
    increment() {
        const quantity = parseInt(this.quantityTarget.textContent) + 1;
        this.quantityTarget.textContent = quantity;
    }

    decrement() {
        const quantity = parseInt(this.quantityTarget.textContent) - 1;
        this.quantityTarget.textContent = quantity;
    }
}