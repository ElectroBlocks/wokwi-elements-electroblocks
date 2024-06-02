import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wokwi-breadboard')
export class BreadboardElement extends LitElement {
  private readonly BOTTOM_MIDDLE_HOLES = ['A', 'B', 'C', 'D', 'E'];
  private readonly TOP_MIDDLE_HOLES = ['F', 'G', 'H', 'I', 'J'];
  private readonly RAILS = ['W', 'X', 'Y', 'Z'];
  @property() color = '#09bd21';

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
    console.log(this.color, 'test');
    const pinNodeList = this.shadowRoot?.querySelectorAll('#sockets > g') ?? [];
    pinNodeList.forEach((pin) => {
      pin.addEventListener('mouseover', (e) => {
        const id = (e.target as HTMLElement)?.parentElement?.id;
        if (id && id.includes('pin')) {
          const pinNumber = id.replace('pin', '');
          const letter = pinNumber.split('').pop() as string;
          const number = +pinNumber.replace(letter, '');
          if (this.BOTTOM_MIDDLE_HOLES.includes(letter)) {
            this.BOTTOM_MIDDLE_HOLES.forEach((l) => {
              this.shadowRoot?.querySelectorAll(`#pin${number}${l} path`).forEach((path) => {
                (path as HTMLElement).style.fill = this.color;
              });
            });
          }

          if (this.TOP_MIDDLE_HOLES.includes(letter)) {
            this.TOP_MIDDLE_HOLES.forEach((l) => {
              this.shadowRoot?.querySelectorAll(`#pin${number}${l} path`).forEach((path) => {
                (path as HTMLElement).style.fill = this.color;
              });
            });
          }

          if (this.RAILS.includes(letter)) {
            for (let i = 3; i <= 61; i += 1) {
              this.shadowRoot?.querySelectorAll(`#pin${i}${letter} path`).forEach((path) => {
                (path as HTMLElement).style.fill = this.color;
              });
            }
          }
        }
      });
      pin.addEventListener('mouseout', (e) => {
        const id = (e.target as HTMLElement)?.parentElement?.id;
        if (id && id.includes('pin')) {
          const pinNumber = id.replace('pin', '');
          const letter = pinNumber.split('').pop() as string;
          const number = +pinNumber.replace(letter, '');

          if (this.BOTTOM_MIDDLE_HOLES.includes(letter)) {
            this.BOTTOM_MIDDLE_HOLES.forEach((l) => {
              (
                this.shadowRoot?.querySelector(
                  `#pin${number}${l} path:first-of-type`
                ) as HTMLElement
              ).style.fill = '#bfbfbf';

              (
                this.shadowRoot?.querySelector(`#pin${number}${l} path:last-of-type`) as HTMLElement
              ).style.fill = '#e6e6e6';
            });
          }

          if (this.TOP_MIDDLE_HOLES.includes(letter)) {
            this.TOP_MIDDLE_HOLES.forEach((l) => {
              (
                this.shadowRoot?.querySelector(
                  `#pin${number}${l} path:first-of-type`
                ) as HTMLElement
              ).style.fill = '#bfbfbf';

              (
                this.shadowRoot?.querySelector(`#pin${number}${l} path:last-of-type`) as HTMLElement
              ).style.fill = '#e6e6e6';
            });
          }

          if (this.RAILS.includes(letter)) {
            for (let i = 3; i <= 61; i += 1) {
              const bottomPath = this.shadowRoot?.querySelector(
                `#pin${i}${letter} path:last-of-type`
              );
              const topPath = this.shadowRoot?.querySelector(
                `#pin${i}${letter} path:first-of-type`
              );

              if (bottomPath && topPath) {
                (bottomPath as HTMLElement).style.fill = '#e6e6e6';
                (topPath as HTMLElement).style.fill = '#bfbfbf';
              }
            }
          }
        }
      });
    });
  }
  render() {
    return html`
      <svg
        width="600"
        height="152"
        version="1.1"
        viewBox="0 0 600 152"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="breadboard">
          <g id="breadboardbreadboard">
            <g id="background">
              <rect x="109.2" width="468.24" height="151.2" style="fill: #d9d9d9" />
            </g>
            <g id="stripes">
              <rect x="109.2" y="20.93" width="468.24" height="0.4" style="fill: #b3b0b0" />
              <rect x="109.2" y="129.48" width="468.24" height="0.4" style="fill: #b3b0b0" />
            </g>
            <g>
              <rect x="109.2" y="19.2" width="468.24" height="0.4" style="fill: red" />
              <rect x="109.2" y="148.8" width="468.24" height="0.4" style="fill: red" />
              <rect x="109.2" y="2.4" width="468.24" height="0.4" style="fill: blue" />
              <rect x="109.2" y="132" width="468.24" height="0.4" style="fill: blue" />
            </g>
            <rect x="109.2" y="71.2" width="468.24" height="7.2" style="fill: #ccc9c9" />
            <g id="sockets">
              <g id="pin1A">
                <path
                  d="M135.75,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,219a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1B">
                <path
                  d="M135.75,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1C">
                <path
                  d="M135.75,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1D">
                <path
                  d="M135.75,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1E">
                <path
                  d="M135.75,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1F">
                <path
                  d="M135.75,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1G">
                <path
                  d="M135.75,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1H">
                <path
                  d="M135.75,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1I">
                <path
                  d="M135.75,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin1J">
                <path
                  d="M135.75,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M140.53,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="120.12" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2A">
                <path
                  d="M142.93,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2B">
                <path
                  d="M142.93,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2C">
                <path
                  d="M142.93,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2D">
                <path
                  d="M142.93,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2E">
                <path
                  d="M142.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2F">
                <path
                  d="M142.93,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,168.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2G">
                <path
                  d="M142.93,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,161.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2H">
                <path
                  d="M142.93,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2I">
                <path
                  d="M142.93,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin2J">
                <path
                  d="M142.93,139.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M147.73,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="127.32" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3A">
                <path
                  d="M150.15,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3B">
                <path
                  d="M150.15,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3C">
                <path
                  d="M150.15,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3D">
                <path
                  d="M150.15,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3E">
                <path
                  d="M150.15,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3F">
                <path
                  d="M150.15,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3G">
                <path
                  d="M150.15,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3H">
                <path
                  d="M150.15,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3I">
                <path
                  d="M150.15,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3J">
                <path
                  d="M150.15,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.52" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4A">
                <path
                  d="M157.35,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4B">
                <path
                  d="M157.35,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4C">
                <path
                  d="M157.35,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4D">
                <path
                  d="M157.35,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4E">
                <path
                  d="M157.35,190.2a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,190.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4F">
                <path
                  d="M157.35,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4G">
                <path
                  d="M157.35,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4H">
                <path
                  d="M157.35,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,154.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4I">
                <path
                  d="M157.35,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4J">
                <path
                  d="M157.35,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.13,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5A">
                <path
                  d="M164.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5B">
                <path
                  d="M164.55,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5C">
                <path
                  d="M164.55,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5D">
                <path
                  d="M164.55,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5E">
                <path
                  d="M164.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5F">
                <path
                  d="M164.55,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5G">
                <path
                  d="M164.55,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5H">
                <path
                  d="M164.55,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5I">
                <path
                  d="M164.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5J">
                <path
                  d="M164.55,139.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.92" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6A">
                <path
                  d="M171.75,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6B">
                <path
                  d="M171.75,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6C">
                <path
                  d="M171.75,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6D">
                <path
                  d="M171.75,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6E">
                <path
                  d="M171.75,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6F">
                <path
                  d="M171.75,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6G">
                <path
                  d="M171.75,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6H">
                <path
                  d="M171.75,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6I">
                <path
                  d="M171.75,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6J">
                <path
                  d="M171.75,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.12" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7A">
                <path
                  d="M178.93,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7B">
                <path
                  d="M178.93,211.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7C">
                <path
                  d="M178.93,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7D">
                <path
                  d="M178.93,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7E">
                <path
                  d="M178.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7F">
                <path
                  d="M178.93,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7G">
                <path
                  d="M178.93,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7H">
                <path
                  d="M178.93,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7I">
                <path
                  d="M178.93,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7J">
                <path
                  d="M178.93,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.32" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8A">
                <path
                  d="M186.15,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8B">
                <path
                  d="M186.15,211.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8C">
                <path
                  d="M186.15,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8D">
                <path
                  d="M186.15,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8E">
                <path
                  d="M186.15,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8F">
                <path
                  d="M186.15,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8G">
                <path
                  d="M186.15,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8H">
                <path
                  d="M186.15,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8I">
                <path
                  d="M186.15,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin8J">
                <path
                  d="M186.15,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M190.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="170.52" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9A">
                <path
                  d="M193.35,219a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9B">
                <path
                  d="M193.35,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9C">
                <path
                  d="M193.35,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9D">
                <path
                  d="M193.35,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9E">
                <path
                  d="M193.35,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9F">
                <path
                  d="M193.35,168.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9G">
                <path
                  d="M193.35,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9H">
                <path
                  d="M193.35,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9I">
                <path
                  d="M193.35,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9J">
                <path
                  d="M193.35,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10A">
                <path
                  d="M200.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10B">
                <path
                  d="M200.55,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10C">
                <path
                  d="M200.55,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10D">
                <path
                  d="M200.55,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10E">
                <path
                  d="M200.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10F">
                <path
                  d="M200.55,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10G">
                <path
                  d="M200.55,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10H">
                <path
                  d="M200.55,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10I">
                <path
                  d="M200.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10J">
                <path
                  d="M200.55,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.92" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11A">
                <path
                  d="M207.75,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11B">
                <path
                  d="M207.75,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11C">
                <path
                  d="M207.75,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11D">
                <path
                  d="M207.75,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11E">
                <path
                  d="M207.75,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11F">
                <path
                  d="M207.75,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11G">
                <path
                  d="M207.75,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11H">
                <path
                  d="M207.75,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11I">
                <path
                  d="M207.75,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11J">
                <path
                  d="M207.75,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12A">
                <path
                  d="M214.93,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12B">
                <path
                  d="M214.93,211.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12C">
                <path
                  d="M214.93,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12D">
                <path
                  d="M214.93,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12E">
                <path
                  d="M214.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12F">
                <path
                  d="M214.93,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12G">
                <path
                  d="M214.93,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12H">
                <path
                  d="M214.93,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12I">
                <path
                  d="M214.93,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12J">
                <path
                  d="M214.93,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.73,139.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.32" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13A">
                <path
                  d="M222.15,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13B">
                <path
                  d="M222.15,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13C">
                <path
                  d="M222.15,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13D">
                <path
                  d="M222.15,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13E">
                <path
                  d="M222.15,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13F">
                <path
                  d="M222.15,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13G">
                <path
                  d="M222.15,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13H">
                <path
                  d="M222.15,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13I">
                <path
                  d="M222.15,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13J">
                <path
                  d="M222.15,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14A">
                <path
                  d="M229.35,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14B">
                <path
                  d="M229.35,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14C">
                <path
                  d="M229.35,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14D">
                <path
                  d="M229.35,197.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14E">
                <path
                  d="M229.35,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,190.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14F">
                <path
                  d="M229.35,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14G">
                <path
                  d="M229.35,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14H">
                <path
                  d="M229.35,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14I">
                <path
                  d="M229.35,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,147a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin14J">
                <path
                  d="M229.35,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M234.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="213.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15A">
                <path
                  d="M236.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15B">
                <path
                  d="M236.55,211.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15C">
                <path
                  d="M236.55,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15D">
                <path
                  d="M236.55,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15E">
                <path
                  d="M236.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15F">
                <path
                  d="M236.55,168.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15G">
                <path
                  d="M236.55,161.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15H">
                <path
                  d="M236.55,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15I">
                <path
                  d="M236.55,147a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15J">
                <path
                  d="M236.55,139.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.33,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16A">
                <path
                  d="M243.75,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16B">
                <path
                  d="M243.75,211.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16C">
                <path
                  d="M243.75,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16D">
                <path
                  d="M243.75,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16E">
                <path
                  d="M243.75,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16F">
                <path
                  d="M243.75,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16G">
                <path
                  d="M243.75,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16H">
                <path
                  d="M243.75,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16I">
                <path
                  d="M243.75,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16J">
                <path
                  d="M243.75,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.53,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17A">
                <path
                  d="M250.93,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17B">
                <path
                  d="M250.93,211.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17C">
                <path
                  d="M250.93,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17D">
                <path
                  d="M250.93,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17E">
                <path
                  d="M250.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17F">
                <path
                  d="M250.93,168.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17G">
                <path
                  d="M250.93,161.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17H">
                <path
                  d="M250.93,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17I">
                <path
                  d="M250.93,147a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17J">
                <path
                  d="M250.93,139.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.73,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18A">
                <path
                  d="M258.15,219a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18B">
                <path
                  d="M258.15,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18C">
                <path
                  d="M258.15,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,204.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18D">
                <path
                  d="M258.15,197.39a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,197.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18E">
                <path
                  d="M258.15,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,190.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18F">
                <path
                  d="M258.15,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,168.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18G">
                <path
                  d="M258.15,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,161.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18H">
                <path
                  d="M258.15,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,154.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18I">
                <path
                  d="M258.15,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18J">
                <path
                  d="M258.15,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19A">
                <path
                  d="M265.34,219a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19B">
                <path
                  d="M265.34,211.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19C">
                <path
                  d="M265.34,204.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19D">
                <path
                  d="M265.34,197.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19E">
                <path
                  d="M265.34,190.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19F">
                <path
                  d="M265.34,168.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19G">
                <path
                  d="M265.34,161.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19H">
                <path
                  d="M265.34,154.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19I">
                <path
                  d="M265.34,147a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19J">
                <path
                  d="M265.34,139.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.13,139.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20A">
                <path
                  d="M272.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20B">
                <path
                  d="M272.55,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20C">
                <path
                  d="M272.55,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20D">
                <path
                  d="M272.55,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20E">
                <path
                  d="M272.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20F">
                <path
                  d="M272.55,168.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20G">
                <path
                  d="M272.55,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20H">
                <path
                  d="M272.55,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20I">
                <path
                  d="M272.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin20J">
                <path
                  d="M272.55,139.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M277.33,139.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="256.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21A">
                <path
                  d="M279.74,219a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21B">
                <path
                  d="M279.74,211.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21C">
                <path
                  d="M279.74,204.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21D">
                <path
                  d="M279.74,197.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21E">
                <path
                  d="M279.74,190.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21F">
                <path
                  d="M279.74,168.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21G">
                <path
                  d="M279.74,161.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21H">
                <path
                  d="M279.74,154.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21I">
                <path
                  d="M279.74,147a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21J">
                <path
                  d="M279.74,139.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.53,139.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.12" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22A">
                <path
                  d="M286.93,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22B">
                <path
                  d="M286.93,211.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22C">
                <path
                  d="M286.93,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22D">
                <path
                  d="M286.93,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22E">
                <path
                  d="M286.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22F">
                <path
                  d="M286.93,168.6a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22G">
                <path
                  d="M286.93,161.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22H">
                <path
                  d="M286.93,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22I">
                <path
                  d="M286.93,147a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22J">
                <path
                  d="M286.93,139.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.73,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23A">
                <path
                  d="M294.15,219a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23B">
                <path
                  d="M294.15,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23C">
                <path
                  d="M294.15,204.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,204.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23D">
                <path
                  d="M294.15,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,197.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23E">
                <path
                  d="M294.15,190.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,190.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23F">
                <path
                  d="M294.15,168.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,168.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23G">
                <path
                  d="M294.15,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,161.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23H">
                <path
                  d="M294.15,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,154.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23I">
                <path
                  d="M294.15,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23J">
                <path
                  d="M294.15,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24A">
                <path
                  d="M301.34,219a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,219a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24B">
                <path
                  d="M301.34,211.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24C">
                <path
                  d="M301.34,204.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24D">
                <path
                  d="M301.34,197.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24E">
                <path
                  d="M301.34,190.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24F">
                <path
                  d="M301.34,168.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,168.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24G">
                <path
                  d="M301.34,161.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,161.39a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24H">
                <path
                  d="M301.34,154.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,154.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24I">
                <path
                  d="M301.34,147a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24J">
                <path
                  d="M301.34,139.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.13,139.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.71" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25A">
                <path
                  d="M308.55,219a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25B">
                <path
                  d="M308.55,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,211.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25C">
                <path
                  d="M308.55,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25D">
                <path
                  d="M308.55,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25E">
                <path
                  d="M308.55,190.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25F">
                <path
                  d="M308.55,168.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,168.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25G">
                <path
                  d="M308.55,161.39a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25H">
                <path
                  d="M308.55,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25I">
                <path
                  d="M308.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,147a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25J">
                <path
                  d="M308.55,139.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.33,139.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26A">
                <path
                  d="M315.74,219a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26B">
                <path
                  d="M315.74,211.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,211.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26C">
                <path
                  d="M315.74,204.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26D">
                <path
                  d="M315.74,197.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26E">
                <path
                  d="M315.74,190.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26F">
                <path
                  d="M315.74,168.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,168.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26G">
                <path
                  d="M315.74,161.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26H">
                <path
                  d="M315.74,154.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26I">
                <path
                  d="M315.74,147a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin26J">
                <path
                  d="M315.74,139.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M320.53,139.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="300.12" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27A">
                <path
                  d="M322.93,219a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,219a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27B">
                <path
                  d="M322.93,211.8a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,211.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27C">
                <path
                  d="M322.93,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,204.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27D">
                <path
                  d="M322.93,197.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,197.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27E">
                <path
                  d="M322.93,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,190.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27F">
                <path
                  d="M322.93,168.6a2.39,2.39,0,1,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,168.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27G">
                <path
                  d="M322.93,161.39a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,161.39a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27H">
                <path
                  d="M322.93,154.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,154.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27I">
                <path
                  d="M322.93,147a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,147a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27J">
                <path
                  d="M322.93,139.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.73,139.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28A">
                <path
                  d="M330.14,219a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28B">
                <path
                  d="M330.14,211.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,211.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28C">
                <path
                  d="M330.14,204.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,204.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28D">
                <path
                  d="M330.14,197.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,197.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28E">
                <path
                  d="M330.14,190.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28F">
                <path
                  d="M330.14,168.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,168.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28G">
                <path
                  d="M330.14,161.39a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28H">
                <path
                  d="M330.14,154.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,154.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28I">
                <path
                  d="M330.14,147a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28J">
                <path
                  d="M330.14,139.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,139.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29A">
                <path
                  d="M337.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29B">
                <path
                  d="M337.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29C">
                <path
                  d="M337.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29D">
                <path
                  d="M337.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29E">
                <path
                  d="M337.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29F">
                <path
                  d="M337.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29G">
                <path
                  d="M337.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29H">
                <path
                  d="M337.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29I">
                <path
                  d="M337.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29J">
                <path
                  d="M337.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.71" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30A">
                <path
                  d="M344.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30B">
                <path
                  d="M344.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30C">
                <path
                  d="M344.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30D">
                <path
                  d="M344.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30E">
                <path
                  d="M344.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30F">
                <path
                  d="M344.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30G">
                <path
                  d="M344.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30H">
                <path
                  d="M344.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30I">
                <path
                  d="M344.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30J">
                <path
                  d="M344.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31A">
                <path
                  d="M351.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31B">
                <path
                  d="M351.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31C">
                <path
                  d="M351.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31D">
                <path
                  d="M351.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31E">
                <path
                  d="M351.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31F">
                <path
                  d="M351.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31G">
                <path
                  d="M351.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31H">
                <path
                  d="M351.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31I">
                <path
                  d="M351.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31J">
                <path
                  d="M351.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.12" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32A">
                <path
                  d="M358.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32B">
                <path
                  d="M358.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32C">
                <path
                  d="M358.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32D">
                <path
                  d="M358.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32E">
                <path
                  d="M358.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32F">
                <path
                  d="M358.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32G">
                <path
                  d="M358.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32H">
                <path
                  d="M358.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32I">
                <path
                  d="M358.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin32J">
                <path
                  d="M358.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M363.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="343.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33A">
                <path
                  d="M366.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33B">
                <path
                  d="M366.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33C">
                <path
                  d="M366.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33D">
                <path
                  d="M366.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33E">
                <path
                  d="M366.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33F">
                <path
                  d="M366.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33G">
                <path
                  d="M366.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33H">
                <path
                  d="M366.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33I">
                <path
                  d="M366.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33J">
                <path
                  d="M366.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34A">
                <path
                  d="M373.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34B">
                <path
                  d="M373.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34C">
                <path
                  d="M373.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34D">
                <path
                  d="M373.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34E">
                <path
                  d="M373.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34F">
                <path
                  d="M373.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34G">
                <path
                  d="M373.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34H">
                <path
                  d="M373.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34I">
                <path
                  d="M373.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34J">
                <path
                  d="M373.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.71" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35A">
                <path
                  d="M380.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35B">
                <path
                  d="M380.55,211.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35C">
                <path
                  d="M380.55,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35D">
                <path
                  d="M380.55,197.39a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35E">
                <path
                  d="M380.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35F">
                <path
                  d="M380.55,168.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35G">
                <path
                  d="M380.55,161.39a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35H">
                <path
                  d="M380.55,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35I">
                <path
                  d="M380.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35J">
                <path
                  d="M380.55,139.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36A">
                <path
                  d="M387.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36B">
                <path
                  d="M387.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36C">
                <path
                  d="M387.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36D">
                <path
                  d="M387.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36E">
                <path
                  d="M387.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36F">
                <path
                  d="M387.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36G">
                <path
                  d="M387.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36H">
                <path
                  d="M387.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36I">
                <path
                  d="M387.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36J">
                <path
                  d="M387.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37A">
                <path
                  d="M394.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37B">
                <path
                  d="M394.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37C">
                <path
                  d="M394.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37D">
                <path
                  d="M394.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37E">
                <path
                  d="M394.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37F">
                <path
                  d="M394.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37G">
                <path
                  d="M394.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37H">
                <path
                  d="M394.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37I">
                <path
                  d="M394.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37J">
                <path
                  d="M394.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38A">
                <path
                  d="M402.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38B">
                <path
                  d="M402.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38C">
                <path
                  d="M402.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38D">
                <path
                  d="M402.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38E">
                <path
                  d="M402.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38F">
                <path
                  d="M402.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38G">
                <path
                  d="M402.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38H">
                <path
                  d="M402.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38I">
                <path
                  d="M402.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin38J">
                <path
                  d="M402.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M406.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="386.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39A">
                <path
                  d="M409.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39B">
                <path
                  d="M409.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39C">
                <path
                  d="M409.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39D">
                <path
                  d="M409.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39E">
                <path
                  d="M409.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39F">
                <path
                  d="M409.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39G">
                <path
                  d="M409.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39H">
                <path
                  d="M409.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39I">
                <path
                  d="M409.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39J">
                <path
                  d="M409.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40A">
                <path
                  d="M416.55,219a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40B">
                <path
                  d="M416.55,211.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40C">
                <path
                  d="M416.55,204.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40D">
                <path
                  d="M416.55,197.39a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40E">
                <path
                  d="M416.55,190.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40F">
                <path
                  d="M416.55,168.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40G">
                <path
                  d="M416.55,161.39a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40H">
                <path
                  d="M416.55,154.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40I">
                <path
                  d="M416.55,147a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40J">
                <path
                  d="M416.55,139.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41A">
                <path
                  d="M423.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41B">
                <path
                  d="M423.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41C">
                <path
                  d="M423.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41D">
                <path
                  d="M423.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41E">
                <path
                  d="M423.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41F">
                <path
                  d="M423.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41G">
                <path
                  d="M423.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41H">
                <path
                  d="M423.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41I">
                <path
                  d="M423.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41J">
                <path
                  d="M423.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42A">
                <path
                  d="M430.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42B">
                <path
                  d="M430.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42C">
                <path
                  d="M430.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42D">
                <path
                  d="M430.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42E">
                <path
                  d="M430.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42F">
                <path
                  d="M430.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42G">
                <path
                  d="M430.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42H">
                <path
                  d="M430.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42I">
                <path
                  d="M430.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42J">
                <path
                  d="M430.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43A">
                <path
                  d="M438.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43B">
                <path
                  d="M438.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43C">
                <path
                  d="M438.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43D">
                <path
                  d="M438.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43E">
                <path
                  d="M438.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43F">
                <path
                  d="M438.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43G">
                <path
                  d="M438.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43H">
                <path
                  d="M438.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43I">
                <path
                  d="M438.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43J">
                <path
                  d="M438.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44A">
                <path
                  d="M445.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44B">
                <path
                  d="M445.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44C">
                <path
                  d="M445.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44D">
                <path
                  d="M445.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44E">
                <path
                  d="M445.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44F">
                <path
                  d="M445.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44G">
                <path
                  d="M445.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44H">
                <path
                  d="M445.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44I">
                <path
                  d="M445.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin44J">
                <path
                  d="M445.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M450.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="429.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45A">
                <path
                  d="M452.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45B">
                <path
                  d="M452.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45C">
                <path
                  d="M452.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45D">
                <path
                  d="M452.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45E">
                <path
                  d="M452.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45F">
                <path
                  d="M452.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45G">
                <path
                  d="M452.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45H">
                <path
                  d="M452.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45I">
                <path
                  d="M452.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45J">
                <path
                  d="M452.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46A">
                <path
                  d="M459.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46B">
                <path
                  d="M459.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46C">
                <path
                  d="M459.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46D">
                <path
                  d="M459.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46E">
                <path
                  d="M459.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46F">
                <path
                  d="M459.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46G">
                <path
                  d="M459.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46H">
                <path
                  d="M459.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46I">
                <path
                  d="M459.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46J">
                <path
                  d="M459.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47A">
                <path
                  d="M466.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47B">
                <path
                  d="M466.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47C">
                <path
                  d="M466.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47D">
                <path
                  d="M466.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47E">
                <path
                  d="M466.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47F">
                <path
                  d="M466.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47G">
                <path
                  d="M466.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47H">
                <path
                  d="M466.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47I">
                <path
                  d="M466.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47J">
                <path
                  d="M466.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48A">
                <path
                  d="M474.14,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48B">
                <path
                  d="M474.14,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48C">
                <path
                  d="M474.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48D">
                <path
                  d="M474.14,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48E">
                <path
                  d="M474.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48F">
                <path
                  d="M474.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48G">
                <path
                  d="M474.14,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48H">
                <path
                  d="M474.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48I">
                <path
                  d="M474.14,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48J">
                <path
                  d="M474.14,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49A">
                <path
                  d="M481.34,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49B">
                <path
                  d="M481.34,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49C">
                <path
                  d="M481.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49D">
                <path
                  d="M481.34,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49E">
                <path
                  d="M481.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49F">
                <path
                  d="M481.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49G">
                <path
                  d="M481.34,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49H">
                <path
                  d="M481.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49I">
                <path
                  d="M481.34,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49J">
                <path
                  d="M481.34,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.72" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50A">
                <path
                  d="M488.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50B">
                <path
                  d="M488.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50C">
                <path
                  d="M488.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50D">
                <path
                  d="M488.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50E">
                <path
                  d="M488.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50F">
                <path
                  d="M488.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50G">
                <path
                  d="M488.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50H">
                <path
                  d="M488.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50I">
                <path
                  d="M488.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin50J">
                <path
                  d="M488.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M493.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="472.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51A">
                <path
                  d="M495.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51B">
                <path
                  d="M495.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51C">
                <path
                  d="M495.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51D">
                <path
                  d="M495.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51E">
                <path
                  d="M495.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51F">
                <path
                  d="M495.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51G">
                <path
                  d="M495.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51H">
                <path
                  d="M495.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51I">
                <path
                  d="M495.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51J">
                <path
                  d="M495.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52A">
                <path
                  d="M502.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52B">
                <path
                  d="M502.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52C">
                <path
                  d="M502.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52D">
                <path
                  d="M502.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52E">
                <path
                  d="M502.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52F">
                <path
                  d="M502.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52G">
                <path
                  d="M502.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52H">
                <path
                  d="M502.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52I">
                <path
                  d="M502.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52J">
                <path
                  d="M502.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53A">
                <path
                  d="M510.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53B">
                <path
                  d="M510.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53C">
                <path
                  d="M510.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53D">
                <path
                  d="M510.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53E">
                <path
                  d="M510.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53F">
                <path
                  d="M510.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53G">
                <path
                  d="M510.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53H">
                <path
                  d="M510.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53I">
                <path
                  d="M510.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53J">
                <path
                  d="M510.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54A">
                <path
                  d="M517.34,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54B">
                <path
                  d="M517.34,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54C">
                <path
                  d="M517.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54D">
                <path
                  d="M517.34,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54E">
                <path
                  d="M517.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54F">
                <path
                  d="M517.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54G">
                <path
                  d="M517.34,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54H">
                <path
                  d="M517.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54I">
                <path
                  d="M517.34,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54J">
                <path
                  d="M517.34,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.71" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55A">
                <path
                  d="M524.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55B">
                <path
                  d="M524.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55C">
                <path
                  d="M524.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55D">
                <path
                  d="M524.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55E">
                <path
                  d="M524.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55F">
                <path
                  d="M524.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55G">
                <path
                  d="M524.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55H">
                <path
                  d="M524.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55I">
                <path
                  d="M524.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55J">
                <path
                  d="M524.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56A">
                <path
                  d="M531.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56B">
                <path
                  d="M531.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56C">
                <path
                  d="M531.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56D">
                <path
                  d="M531.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56E">
                <path
                  d="M531.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56F">
                <path
                  d="M531.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56G">
                <path
                  d="M531.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56H">
                <path
                  d="M531.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56I">
                <path
                  d="M531.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin56J">
                <path
                  d="M531.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M536.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="516.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57A">
                <path
                  d="M538.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57B">
                <path
                  d="M538.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57C">
                <path
                  d="M538.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57D">
                <path
                  d="M538.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57E">
                <path
                  d="M538.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57F">
                <path
                  d="M538.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57G">
                <path
                  d="M538.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57H">
                <path
                  d="M538.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57I">
                <path
                  d="M538.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57J">
                <path
                  d="M538.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58A">
                <path
                  d="M546.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58B">
                <path
                  d="M546.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58C">
                <path
                  d="M546.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58D">
                <path
                  d="M546.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58E">
                <path
                  d="M546.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58F">
                <path
                  d="M546.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58G">
                <path
                  d="M546.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58H">
                <path
                  d="M546.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58I">
                <path
                  d="M546.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58J">
                <path
                  d="M546.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59A">
                <path
                  d="M553.34,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59B">
                <path
                  d="M553.34,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59C">
                <path
                  d="M553.34,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59D">
                <path
                  d="M553.34,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59E">
                <path
                  d="M553.34,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59F">
                <path
                  d="M553.34,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59G">
                <path
                  d="M553.34,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59H">
                <path
                  d="M553.34,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59I">
                <path
                  d="M553.34,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59J">
                <path
                  d="M553.34,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.13,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.71" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60A">
                <path
                  d="M560.54,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60B">
                <path
                  d="M560.54,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60C">
                <path
                  d="M560.54,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60D">
                <path
                  d="M560.54,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60E">
                <path
                  d="M560.54,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60F">
                <path
                  d="M560.54,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60G">
                <path
                  d="M560.54,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60H">
                <path
                  d="M560.54,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60I">
                <path
                  d="M560.54,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60J">
                <path
                  d="M560.54,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.33,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.91" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61A">
                <path
                  d="M567.74,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61B">
                <path
                  d="M567.74,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61C">
                <path
                  d="M567.74,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61D">
                <path
                  d="M567.74,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61E">
                <path
                  d="M567.74,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61F">
                <path
                  d="M567.74,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61G">
                <path
                  d="M567.74,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61H">
                <path
                  d="M567.74,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61I">
                <path
                  d="M567.74,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61J">
                <path
                  d="M567.74,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.53,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.11" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62A">
                <path
                  d="M574.93,219a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62B">
                <path
                  d="M574.93,211.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62C">
                <path
                  d="M574.93,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62D">
                <path
                  d="M574.93,197.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62E">
                <path
                  d="M574.93,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62F">
                <path
                  d="M574.93,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62G">
                <path
                  d="M574.93,161.39a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62H">
                <path
                  d="M574.93,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62I">
                <path
                  d="M574.93,147a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin62J">
                <path
                  d="M574.93,139.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M579.73,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="559.31" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63A">
                <path
                  d="M582.14,219a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,219a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="115.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63B">
                <path
                  d="M582.14,211.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,211.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="108" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63C">
                <path
                  d="M582.14,204.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,204.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="100.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63D">
                <path
                  d="M582.14,197.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,197.39a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="93.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63E">
                <path
                  d="M582.14,190.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,190.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="86.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63F">
                <path
                  d="M582.14,168.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,168.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="64.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63G">
                <path
                  d="M582.14,161.39a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,161.39a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="57.6" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63H">
                <path
                  d="M582.14,154.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,154.2a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="50.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63I">
                <path
                  d="M582.14,147a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,147a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="43.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin63J">
                <path
                  d="M582.14,139.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M586.93,139.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="566.51" cy="36" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3W">
                <path
                  d="M150.16,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3X">
                <path
                  d="M150.16,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3Y">
                <path
                  d="M150.16,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin3Z">
                <path
                  d="M150.16,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M154.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="134.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4W">
                <path
                  d="M157.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.15,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4X">
                <path
                  d="M157.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.15,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4Y">
                <path
                  d="M157.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.15,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin4Z">
                <path
                  d="M157.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M162.15,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="141.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5W">
                <path
                  d="M164.56,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.35,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5X">
                <path
                  d="M164.56,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.35,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5Y">
                <path
                  d="M164.56,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.35,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin5Z">
                <path
                  d="M164.56,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M169.35,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="148.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6W">
                <path
                  d="M171.76,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6X">
                <path
                  d="M171.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6Y">
                <path
                  d="M171.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin6Z">
                <path
                  d="M171.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M176.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="156.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7W">
                <path
                  d="M178.93,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.75,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7X">
                <path
                  d="M178.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.75,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7Y">
                <path
                  d="M178.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.75,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin7Z">
                <path
                  d="M178.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M183.75,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="163.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9W">
                <path
                  d="M193.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.15,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9X">
                <path
                  d="M193.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.15,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9Y">
                <path
                  d="M193.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.15,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin9Z">
                <path
                  d="M193.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M198.15,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="177.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10W">
                <path
                  d="M200.56,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.35,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10X">
                <path
                  d="M200.56,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.35,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10Y">
                <path
                  d="M200.56,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.35,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin10Z">
                <path
                  d="M200.56,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M205.35,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="184.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11W">
                <path
                  d="M207.76,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11X">
                <path
                  d="M207.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11Y">
                <path
                  d="M207.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin11Z">
                <path
                  d="M207.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M212.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="192.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12W">
                <path
                  d="M214.93,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.75,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12X">
                <path
                  d="M214.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.75,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12Y">
                <path
                  d="M214.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.75,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin12Z">
                <path
                  d="M214.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M219.75,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="199.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13W">
                <path
                  d="M222.16,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13X">
                <path
                  d="M222.16,240.6a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13Y">
                <path
                  d="M222.16,118.2a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin13Z">
                <path
                  d="M222.16,111a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M226.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="206.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15W">
                <path
                  d="M236.56,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.35,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15X">
                <path
                  d="M236.56,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.35,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15Y">
                <path
                  d="M236.56,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.35,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin15Z">
                <path
                  d="M236.56,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M241.35,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="220.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16W">
                <path
                  d="M243.76,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.55,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16X">
                <path
                  d="M243.76,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.55,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16Y">
                <path
                  d="M243.76,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin16Z">
                <path
                  d="M243.76,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M248.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="228.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17W">
                <path
                  d="M250.93,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.75,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17X">
                <path
                  d="M250.93,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.75,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17Y">
                <path
                  d="M250.93,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.75,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin17Z">
                <path
                  d="M250.93,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M255.75,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="235.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18W">
                <path
                  d="M258.16,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18X">
                <path
                  d="M258.16,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18Y">
                <path
                  d="M258.16,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin18Z">
                <path
                  d="M258.16,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M262.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="242.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19W">
                <path
                  d="M265.36,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.15,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19X">
                <path
                  d="M265.36,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.15,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19Y">
                <path
                  d="M265.36,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.15,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin19Z">
                <path
                  d="M265.36,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M270.15,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="249.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21W">
                <path
                  d="M279.76,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.55,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21X">
                <path
                  d="M279.76,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.55,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21Y">
                <path
                  d="M279.76,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin21Z">
                <path
                  d="M279.76,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M284.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="264.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22W">
                <path
                  d="M286.93,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.75,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22X">
                <path
                  d="M286.93,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.75,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22Y">
                <path
                  d="M286.93,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.75,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin22Z">
                <path
                  d="M286.93,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M291.75,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="271.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23W">
                <path
                  d="M294.16,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23X">
                <path
                  d="M294.16,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23Y">
                <path
                  d="M294.16,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin23Z">
                <path
                  d="M294.16,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M298.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="278.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24W">
                <path
                  d="M301.36,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.15,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24X">
                <path
                  d="M301.36,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.15,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24Y">
                <path
                  d="M301.36,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.15,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin24Z">
                <path
                  d="M301.36,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M306.15,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="285.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25W">
                <path
                  d="M308.56,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.35,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25X">
                <path
                  d="M308.56,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.35,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25Y">
                <path
                  d="M308.56,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.35,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin25Z">
                <path
                  d="M308.56,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M313.35,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="292.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27W">
                <path
                  d="M322.93,247.8a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.75,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27X">
                <path
                  d="M322.93,240.6a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.75,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27Y">
                <path
                  d="M322.93,118.2a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.75,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin27Z">
                <path
                  d="M322.93,111a2.4,2.4,0,0,1,4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M327.75,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="307.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28W">
                <path
                  d="M330.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,247.8a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28X">
                <path
                  d="M330.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,240.6a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28Y">
                <path
                  d="M330.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin28Z">
                <path
                  d="M330.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M334.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="314.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29W">
                <path
                  d="M337.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.15,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29X">
                <path
                  d="M337.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.15,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29Y">
                <path
                  d="M337.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.15,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin29Z">
                <path
                  d="M337.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M342.15,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="321.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30W">
                <path
                  d="M344.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.34,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30X">
                <path
                  d="M344.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.34,240.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30Y">
                <path
                  d="M344.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.34,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin30Z">
                <path
                  d="M344.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M349.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="328.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31W">
                <path
                  d="M351.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31X">
                <path
                  d="M351.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31Y">
                <path
                  d="M351.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin31Z">
                <path
                  d="M351.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M356.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="336.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33W">
                <path
                  d="M366.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33X">
                <path
                  d="M366.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33Y">
                <path
                  d="M366.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin33Z">
                <path
                  d="M366.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M370.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="350.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34W">
                <path
                  d="M373.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.14,247.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34X">
                <path
                  d="M373.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.14,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34Y">
                <path
                  d="M373.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.14,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin34Z">
                <path
                  d="M373.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M378.14,111a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="357.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35W">
                <path
                  d="M380.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.34,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle
                  cx="382.97"
                  cy="247.81"
                  r="1.2"
                  transform="translate(58.98 482.33) rotate(-80.78)"
                  style="fill: #383838"
                />
              </g>
              <g id="pin35X">
                <path
                  d="M380.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.34,240.6a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle
                  cx="382.96"
                  cy="240.62"
                  r="1.2"
                  transform="translate(66.07 476.28) rotate(-80.78)"
                  style="fill: #383838"
                />
              </g>
              <g id="pin35Y">
                <path
                  d="M380.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.34,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin35Z">
                <path
                  d="M380.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M385.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="364.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36W">
                <path
                  d="M387.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36X">
                <path
                  d="M387.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36Y">
                <path
                  d="M387.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin36Z">
                <path
                  d="M387.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M392.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="372.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37W">
                <path
                  d="M394.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.74,247.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37X">
                <path
                  d="M394.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.74,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37Y">
                <path
                  d="M394.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.74,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin37Z">
                <path
                  d="M394.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M399.74,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="379.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39W">
                <path
                  d="M409.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.14,247.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39X">
                <path
                  d="M409.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.14,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39Y">
                <path
                  d="M409.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.14,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin39Z">
                <path
                  d="M409.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M414.14,111a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="393.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40W">
                <path
                  d="M416.56,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.34,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40X">
                <path
                  d="M416.56,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.34,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40Y">
                <path
                  d="M416.56,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.34,118.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin40Z">
                <path
                  d="M416.56,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M421.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="400.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41W">
                <path
                  d="M423.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41X">
                <path
                  d="M423.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41Y">
                <path
                  d="M423.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin41Z">
                <path
                  d="M423.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M428.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="408.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42W">
                <path
                  d="M430.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.74,247.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42X">
                <path
                  d="M430.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.74,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42Y">
                <path
                  d="M430.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.74,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin42Z">
                <path
                  d="M430.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M435.74,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="415.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43W">
                <path
                  d="M438.16,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43X">
                <path
                  d="M438.16,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43Y">
                <path
                  d="M438.16,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin43Z">
                <path
                  d="M438.16,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M442.93,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="422.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45W">
                <path
                  d="M452.56,247.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.34,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45X">
                <path
                  d="M452.56,240.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.34,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45Y">
                <path
                  d="M452.56,118.2a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.34,118.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin45Z">
                <path
                  d="M452.56,111a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M457.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="436.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46W">
                <path
                  d="M459.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46X">
                <path
                  d="M459.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46Y">
                <path
                  d="M459.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin46Z">
                <path
                  d="M459.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M464.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="444.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47W">
                <path
                  d="M466.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.74,247.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47X">
                <path
                  d="M466.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.74,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47Y">
                <path
                  d="M466.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.74,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin47Z">
                <path
                  d="M466.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M471.74,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="451.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48W">
                <path
                  d="M474.16,247.8a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48X">
                <path
                  d="M474.16,240.6a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48Y">
                <path
                  d="M474.16,118.2a2.39,2.39,0,1,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin48Z">
                <path
                  d="M474.16,111a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M478.93,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="458.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49W">
                <path
                  d="M481.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.14,247.8a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49X">
                <path
                  d="M481.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.14,240.6a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49Y">
                <path
                  d="M481.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.14,118.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin49Z">
                <path
                  d="M481.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M486.14,111a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="465.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51W">
                <path
                  d="M495.76,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.55,247.8a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51X">
                <path
                  d="M495.76,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.55,240.6a2.4,2.4,0,0,1-4.79,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51Y">
                <path
                  d="M495.76,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.55,118.2a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin51Z">
                <path
                  d="M495.76,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M500.55,111a2.4,2.4,0,0,1-4.79,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="480.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52W">
                <path
                  d="M502.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.74,247.8a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52X">
                <path
                  d="M502.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.74,240.6a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52Y">
                <path
                  d="M502.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.74,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin52Z">
                <path
                  d="M502.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M507.74,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="487.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53W">
                <path
                  d="M510.16,247.8a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53X">
                <path
                  d="M510.16,240.6a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53Y">
                <path
                  d="M510.16,118.2a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin53Z">
                <path
                  d="M510.16,111a2.39,2.39,0,0,1,4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M514.93,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="494.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54W">
                <path
                  d="M517.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.14,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54X">
                <path
                  d="M517.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.14,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54Y">
                <path
                  d="M517.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.14,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin54Z">
                <path
                  d="M517.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M522.14,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="501.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55W">
                <path
                  d="M524.56,247.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.34,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55X">
                <path
                  d="M524.56,240.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.34,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55Y">
                <path
                  d="M524.56,118.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.34,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin55Z">
                <path
                  d="M524.56,111a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M529.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="508.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57W">
                <path
                  d="M538.93,247.8a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.74,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.33" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57X">
                <path
                  d="M538.93,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.74,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.33" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57Y">
                <path
                  d="M538.93,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.74,118.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.33" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin57Z">
                <path
                  d="M538.93,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M543.74,111a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="523.33" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58W">
                <path
                  d="M546.16,247.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.53" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58X">
                <path
                  d="M546.16,240.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.53" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58Y">
                <path
                  d="M546.16,118.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.53" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin58Z">
                <path
                  d="M546.16,111a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M550.93,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="530.53" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59W">
                <path
                  d="M553.36,247.8a2.4,2.4,0,0,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.14,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.73" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59X">
                <path
                  d="M553.36,240.6a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.14,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.73" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59Y">
                <path
                  d="M553.36,118.2a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.14,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.73" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin59Z">
                <path
                  d="M553.36,111a2.4,2.4,0,1,1,4.79-.31,1.61,1.61,0,0,1,0,.31"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M558.14,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="537.73" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60W">
                <path
                  d="M560.56,247.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.34,247.8a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.93" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60X">
                <path
                  d="M560.56,240.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.34,240.6a2.39,2.39,0,1,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.93" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60Y">
                <path
                  d="M560.56,118.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.34,118.2a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.93" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin60Z">
                <path
                  d="M560.56,111a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M565.34,111a2.39,2.39,0,1,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="544.93" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61W">
                <path
                  d="M567.76,247.8a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.54,247.8a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.13" cy="144" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61X">
                <path
                  d="M567.76,240.6a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.54,240.6a2.39,2.39,0,0,1-4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.13" cy="136.8" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61Y">
                <path
                  d="M567.76,118.2a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.54,118.2a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.13" cy="14.4" r="1.2" style="fill: #383838" />
              </g>
              <g id="pin61Z">
                <path
                  d="M567.76,111a2.39,2.39,0,0,1,4.78,0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #bfbfbf"
                />
                <path
                  d="M572.54,111a2.39,2.39,0,0,1-4.78,0h0"
                  transform="translate(-18.02 -103.8)"
                  style="fill: #e6e6e6"
                />
                <circle cx="552.13" cy="7.2" r="1.2" style="fill: #383838" />
              </g>
            </g>
            <g id="text">
              <text
                transform="translate(122 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                1
              </text>
              <text
                transform="translate(122 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                1
              </text>
              <text
                transform="translate(150.8 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                5
              </text>
              <text
                transform="translate(150.8 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                5
              </text>
              <text
                transform="translate(186.8 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                10
              </text>
              <text
                transform="translate(186.8 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                10
              </text>
              <text
                transform="translate(222.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                15
              </text>
              <text
                transform="translate(222.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                15
              </text>
              <text
                transform="translate(258.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                20
              </text>
              <text
                transform="translate(258.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                20
              </text>
              <text
                transform="translate(294.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                25
              </text>
              <text
                transform="translate(294.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                25
              </text>
              <text
                transform="translate(330.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                30
              </text>
              <text
                transform="translate(330.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                30
              </text>
              <text
                transform="translate(366.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                35
              </text>
              <text
                transform="translate(366.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                35
              </text>
              <text
                transform="translate(402.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                40
              </text>
              <text
                transform="translate(402.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                40
              </text>
              <text
                transform="translate(438.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                45
              </text>
              <text
                transform="translate(438.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                45
              </text>
              <text
                transform="translate(474.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                50
              </text>
              <text
                transform="translate(474.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                50
              </text>
              <text
                transform="translate(510.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                55
              </text>
              <text
                transform="translate(510.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                55
              </text>
              <text
                transform="translate(546.79 30.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                60
              </text>
              <text
                transform="translate(546.79 126.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                60
              </text>
              <text
                transform="translate(114.8 116.8) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica;letter-spacing: -0.1047681747264069em"
              >
                A
              </text>
              <text
                transform="translate(574.79 116.8) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica;letter-spacing: -0.1047681747264069em"
              >
                A
              </text>
              <text
                transform="translate(114.8 109.6) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                B
              </text>
              <text
                transform="translate(574.79 109.6) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                B
              </text>
              <text
                transform="translate(114.8 102.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                C
              </text>
              <text
                transform="translate(574.79 102.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;fill: #020202;font-family: Helvetica"
              >
                C
              </text>
              <text
                transform="translate(114.8 95.2) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                D
              </text>
              <text
                transform="translate(574.79 95.2) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                D
              </text>
              <text
                transform="translate(114.8 88) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                E
              </text>
              <text
                transform="translate(574.79 88) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                E
              </text>
              <text
                transform="translate(114.8 66.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                F
              </text>
              <text
                transform="translate(574.79 66.4) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                F
              </text>
              <text
                transform="translate(114.8 59.2) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                G
              </text>
              <text
                transform="translate(574.79 59.2) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                G
              </text>
              <text
                transform="translate(114.8 52) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                H
              </text>
              <text
                transform="translate(574.79 52) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                H
              </text>
              <text
                transform="translate(114.8 44) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                I
              </text>
              <text
                transform="translate(574.79 44) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                I
              </text>
              <text
                transform="translate(114.8 36.8) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                J
              </text>
              <text
                transform="translate(574.79 36.8) rotate(-90)"
                style="isolation: isolate;font-size: 4.599999904632568px;font-family: Helvetica"
              >
                J
              </text>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}
