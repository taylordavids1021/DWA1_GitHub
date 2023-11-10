//@ts-check
//@eslint
import { LitElement, html, css } from "./components/logic.js";

/**
 * @typedef {Object} States
 * @property {string} IDLE
 * @property {string} MAX
 * @property {string} MIN
 */
const States = {
  IDLE: "Idle",
  MAX: "Max reached",
  MIN: "Min reached",
};

Object.freeze(States);

class LitCSS extends LitElement {
    // Define component styles using CSS template literal
    static styles = css`
      // CSS styles here
    `;

  // Define component properties
  static properties = {
    value: { type: String },
    open: { type: "boolean", state: true },
    depleted: { type: Number },
    exceeded: { type: Number },
    state: { type: String },
  };

  constructor() {
    super();
    // Initialize component properties
    this.value = "0";
    this.open = false;
    this.depleted = -10;
    this.exceeded = 10;
    this.state = States.IDLE;
  }

  toggleOpen() {
    // Toggle the value of `open` property
    this.open = !this.open;
  }

  subHandler = () => {
    // Event handler for subtract button click
    let num = parseInt(this.value);
    num--;
    num === this.depleted
      ? (this.state = States.MIN) // If the counter reaches the minimum value, update the state to "Min reached"
      : (this.state = States.IDLE); // Otherwise, update the state to "Idle"
    this.value = num.toString(); // Update the value of the counter
  };

  addHandler = () => {
    // Event handler for add button click
    let num = parseInt(this.value);
    num++;
    num === this.exceeded
      ? (this.state = States.MAX) // If the counter reaches the maximum value, update the state to "Max reached"
      : (this.state = States.IDLE); // Otherwise, update the state to "Idle"
    this.value = num.toString(); // Update the value of the counter
  };

  resetHandler = () => {
    // Event handler for reset button click
    this.state = States.IDLE; // Set the state to "Idle"
    this.value = "0"; // Reset the counter value to zero
    this.toggleOpen(); // Toggle the `open` property to display a message
    setTimeout(() => {
      this.toggleOpen(); // Toggle the `open` property again after a delay to hide the message
    }, 1500);
  };

  render() {
    // Render the component's HTML template
    return html` <section>
      <!-- Header section -->
      <header class="header">
        <h1 class="header__title">Tally Count</h1>
        <p>State: ${this.state}</p>
      </header>

      <!-- Main section -->
      <main class="counter">
        <dialog .open=${this.open} class="message" data-overlay>
          <p align="center">The counter has been set to zero</p>
        </dialog>
        <input
          class="counter__value"
          readonly
          value="${this.value}"
          data-number
        />
        <div class="counter__actions">
          <!-- Subtract button -->
          <sl-button
            ?disabled=${this.state === States.MIN}
            @click=${this.subHandler}
            class="button subtract"
            pill
            data-subtract
            >-</sl-button
          >
          <!-- Reset button -->
          <sl-button
            ?disabled=${this.value === "0"}
            @click=${this.resetHandler}
            class="reset"
            pill
            data-reset
            >Reset</sl-button
          >
          <!-- Add button -->
          <sl-button
            ?disabled=${this.state === States.MAX}
            @click=${this.addHandler}
            class="button add"
            pill
            data-add
            >+</sl-button
          >
        </div>
      </main>

      <!-- Footer section -->
      <footer class="footer">
        Inspired by
        <a class="footer__link" href="https://tallycount.app/">Tally Count</a>,
        This is a student project
      </footer>
    </section>`;
  }
}

customElements.define("tally-app", LitCSS);