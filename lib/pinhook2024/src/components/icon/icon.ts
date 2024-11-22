const { LitElement, html, css, property } = window.Lit;

const arrow = html`
<svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path class="fill-current" d="M0.335938 18.35L22.6594 18.3516L12.7109 28.2984L16.0328 31.625L31.6641 15.9953L16.0453 0.375L12.7203 3.70156L22.6687 13.6484H0.339063L0.335938 18.35Z" />
</svg>
`;

const chevron = html`
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 11 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="stroke-current"
      d="M1.07547 1L9 8.26415L1.07547 15.5283"
      stroke-width="2"
    />
  </svg>
`;

const cross = html`
  <svg
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 63.69 63.69"
  >
    <polygon
      points="63.69 9.19 54.5 0 31.85 22.65 9.19 0 0 9.19 22.65 31.85 0 54.5 9.19 63.69 31.85 41.04 54.5 63.69 63.69 54.5 41.04 31.85 63.69 9.19"
    />
  </svg>
`;

const crossCircle = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
  >
    <path
      class="fill-current"
      d="M14.5-25A12.515,12.515,0,0,0,2-12.5,12.515,12.515,0,0,0,14.5,0,12.515,12.515,0,0,0,27-12.5,12.515,12.515,0,0,0,14.5-25ZM19.456-9.185a.78.78,0,0,1,0,1.1l-.536.537a.78.78,0,0,1-1.1,0L14.5-10.8,11.185-7.544a.78.78,0,0,1-1.1,0L9.544-8.08a.78.78,0,0,1,0-1.1L12.8-12.5,9.544-15.815a.78.78,0,0,1,0-1.1l.537-.536a.78.78,0,0,1,1.1,0L14.5-14.2l3.315-3.251a.78.78,0,0,1,1.1,0l.536.536a.78.78,0,0,1,0,1.1L16.2-12.5Z"
      transform="translate(-2 25)"
      fill-rule="evenodd"
    />
  </svg>
`;

const email = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 -2.04 16 16"
  >
    <path
      class="fill-current"
      d="M-8.417,3.169a2.493,2.493,0,0,0-.707-.707A2.481,2.481,0,0,0-10.5,2.045h-11a2.481,2.481,0,0,0-1.376.417,2.493,2.493,0,0,0-.707.707A2.483,2.483,0,0,0-24,4.545v6.91a2.5,2.5,0,0,0,2.5,2.5h11a2.5,2.5,0,0,0,2.5-2.5V4.545A2.483,2.483,0,0,0-8.417,3.169ZM-21.5,3.045h11a1.48,1.48,0,0,1,.643.151L-16,9.338-22.143,3.2A1.48,1.48,0,0,1-21.5,3.045Zm11,9.91h-11a1.48,1.48,0,0,1-.643-.151l3.087-3.087a.5.5,0,0,0,0-.707.5.5,0,0,0-.707,0L-22.85,12.1a1.489,1.489,0,0,1-.15-.642V4.545a1.489,1.489,0,0,1,.15-.642l6.5,6.5a.5.5,0,0,0,.354.146.5.5,0,0,0,.354-.146l6.5-6.5A1.489,1.489,0,0,1-9,4.545v6.91a1.489,1.489,0,0,1-.15.642L-12.237,9.01a.5.5,0,0,0-.707,0,.5.5,0,0,0,0,.707L-9.857,12.8A1.48,1.48,0,0,1-10.5,12.955Z"
      transform="translate(24 -2.045)"
    />
  </svg>
`;

const emailCircle = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 299.997 299.997"
  >
    <path
      class="fill-current"
      d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150    C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009    c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749    l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721    c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0    c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721    c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749    V196.423z"
    />
  </svg>
`;

const facebook = html`
<svg class="fill-current" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
</svg>
`;

const globe = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
  >
    <defs>
      <path
        id="1fl5a"
        d="M295.494 31.947c0 6.378-5.17 11.548-11.547 11.548-6.377 0-11.547-5.17-11.547-11.548 0-6.377 5.17-11.547 11.547-11.547 6.378 0 11.547 5.17 11.547 11.547z"
      ></path>
      <path
        id="1fl5b"
        d="M276.43 25.285s-1.545 3.543.324 2.883c1.382-.487 1.503-1.055 1.503-1.055l.812-1.422s.122 1.99.284 2.274c.163.284.813 1.097 1.056-.04.448-2.09.523-2.68 1.295-2.68.772 0 2.36-.61 2.523 1.258.162 1.868-.163.772-1.178 1.26-1.015.486-1.259 2.192-.325 2.395.574.126 1.593.495 2.293.763 2.268.864 2.336 3.364 2.336 5.572 0 0 .042 2.559.975 1.95.935-.609 3.492-4.59 2.965-6.092-.528-1.502-.569-1.665.407-2.193.974-.528 1.664-1.177 1.624-1.909"
      ></path>
      <path
        id="1fl5c"
        d="M274.52 34.874s.284-3.223.934-2.708c.65.514.934.514 1.503 1.083.569.569 3.005.894 2.193 1.625-.813.731-1.124.689-2.233 3.939"
      ></path>
    </defs>
    <g>
      <g transform="translate(-271 -19)">
        <g>
          <use
            class="stroke-current"
            fill="transparent"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="50"
            stroke-width="1.5"
            xlink:href="#1fl5a"
          ></use>
        </g>
        <g>
          <use
            class="stroke-current fill-current"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="50"
            stroke-width="1.5"
            xlink:href="#1fl5b"
          ></use>
        </g>
        <g>
          <use
            class="stroke-current fill-current"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="50"
            stroke-width="1.5"
            xlink:href="#1fl5c"
          ></use>
        </g>
      </g>
    </g>
  </svg>
`;

const hamburger = html`
  <svg
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
  >
    <rect y="4" width="64" height="11"></rect>
    <rect y="47" width="64" height="11"></rect>
    <rect y="26" width="64" height="11"></rect>
  </svg>
`;

const instagram = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 28 28"
  >
    <path
      class="fill-current"
      d="M14,2.489a42.927,42.927,0,0,1,5.6.156,7.215,7.215,0,0,1,2.644.467,5.463,5.463,0,0,1,2.644,2.644A7.215,7.215,0,0,1,25.356,8.4c0,1.4.156,1.867.156,5.6a42.926,42.926,0,0,1-.156,5.6,7.215,7.215,0,0,1-.467,2.644,5.463,5.463,0,0,1-2.644,2.644,7.215,7.215,0,0,1-2.644.467c-1.4,0-1.867.156-5.6.156a42.926,42.926,0,0,1-5.6-.156,7.215,7.215,0,0,1-2.644-.467,5.463,5.463,0,0,1-2.644-2.644A7.215,7.215,0,0,1,2.644,19.6c0-1.4-.156-1.867-.156-5.6a42.927,42.927,0,0,1,.156-5.6,7.215,7.215,0,0,1,.467-2.644A5.587,5.587,0,0,1,4.2,4.2,2.63,2.63,0,0,1,5.756,3.111,7.215,7.215,0,0,1,8.4,2.644,42.927,42.927,0,0,1,14,2.489M14,0A45.962,45.962,0,0,0,8.244.156,9.6,9.6,0,0,0,4.822.778,6.09,6.09,0,0,0,2.333,2.333,6.09,6.09,0,0,0,.778,4.822,7.088,7.088,0,0,0,.156,8.244,45.962,45.962,0,0,0,0,14a45.962,45.962,0,0,0,.156,5.756,9.6,9.6,0,0,0,.622,3.422,6.09,6.09,0,0,0,1.556,2.489,6.09,6.09,0,0,0,2.489,1.556,9.6,9.6,0,0,0,3.422.622A45.962,45.962,0,0,0,14,28a45.962,45.962,0,0,0,5.756-.156,9.6,9.6,0,0,0,3.422-.622,6.526,6.526,0,0,0,4.044-4.044,9.6,9.6,0,0,0,.622-3.422C27.844,18.2,28,17.733,28,14a45.962,45.962,0,0,0-.156-5.756,9.6,9.6,0,0,0-.622-3.422,6.09,6.09,0,0,0-1.556-2.489A6.09,6.09,0,0,0,23.178.778,9.6,9.6,0,0,0,19.756.156,45.962,45.962,0,0,0,14,0m0,6.844A7.04,7.04,0,0,0,6.844,14,7.156,7.156,0,1,0,14,6.844m0,11.822A4.583,4.583,0,0,1,9.333,14,4.583,4.583,0,0,1,14,9.333,4.583,4.583,0,0,1,18.667,14,4.583,4.583,0,0,1,14,18.667M21.467,4.822a1.711,1.711,0,1,0,1.711,1.711,1.726,1.726,0,0,0-1.711-1.711"
      fill-rule="evenodd"
    />
  </svg>
`;

const linkedin = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewBox="0 0 26.043 26"
  >
    <path
      class="fill-current"
      d="M.428,8.634h5.4V26H.428ZM3.129,0A3.13,3.13,0,1,1,0,3.129,3.131,3.131,0,0,1,3.129,0"
    />
    <path
      class="fill-current"
      d="M54.688,49.109h5.178v2.372h.074a5.673,5.673,0,0,1,5.108-2.8c5.462,0,6.471,3.6,6.471,8.274v9.526H66.127V58.03c0-2.015-.039-4.605-2.806-4.605-2.809,0-3.237,2.194-3.237,4.459v8.591h-5.4Z"
      transform="translate(-45.474 -40.475)"
    />
  </svg>
`;

const logo = html`
<svg width="100%" height="100%" viewBox="0 0 480 520">
  <path class="fill-current" d="M223.66,428.81l-18.15-49.36c-.36-.98-1.26-1.65-2.29-1.72l-21.24-1.42c-1.04-.07-2.02.49-2.51,1.42l-2.87,5.55c-.32.61-.38,1.33-.18,1.99l12.17,40.46c.19.63.61,1.17,1.18,1.51l3.47,2.07c2.37,1.41,1.26,5.08-1.49,4.92l-145.32-8.67c-.52-.03-1.03.09-1.48.36l-15.54,9.13c-1.17.68-2.66.37-3.45-.73l-2.29-3.17c-.25-.34-.41-.74-.47-1.16l-10.95-73.09c-.37-2.49-3.66-3.1-4.89-.91l-7.01,12.52c-.27.48-.38,1.03-.32,1.58l7.78,73.51c.14,1.35,1.27,2.37,2.62,2.37l83.44-.2c3.26,0,3.61,4.79.39,5.27l-34.88,5.16c-1.77.26-2.77,2.18-1.97,3.79l2.87,5.84c.49,1,1.55,1.58,2.65,1.46l139.24-15.86c.84-.1,1.58-.59,1.99-1.33l5.25-9.37c.45-.79,1.26-1.3,2.17-1.34l13.28-.61c.93-.04,1.77-.58,2.21-1.41l1.53-2.94c.93-1.79-.39-3.93-2.39-3.88h0c-1.12.03-2.14-.67-2.53-1.73Z"/>
  <path class="fill-current" d="M72.98,344.19l-32.22-3.95c-2.53-.31-5.04.67-6.51,2.54l-4.95,6.31c-1.02,1.3-1.44,2.92-1.17,4.5l9.21,53.7c.79,4.58,6.65,6.83,10.82,4.16h0c1.27-.81,2.81-1.21,4.37-1.13l32.28,1.7c4.51.24,8.02-3.44,7.08-7.43l-13.07-55.5c-.61-2.58-2.95-4.54-5.85-4.9Z"/>
  <path class="fill-current" d="M194.76,136.08l-58.16,33.93c-2.01,1.17-4.09-1.42-2.54-3.15l43.36-48.36c.18-.2.32-.43.41-.69l8.69-23.71c.81-2.2-2.01-3.9-3.56-2.14l-50.51,57.51-39.1,46.03-36.52,47.51s-.06.08-.09.13l-38.3,58.36c-.17.26-.28.55-.33.85l-5.62,37.58c-.34,2.25,2.6,3.38,3.84,1.49l10.76-16.42c.45-.68,1.25-1.05,2.05-.93l58.75,7.66c1.27.18,2.4-.81,2.4-2.1l-4.06-8.25c0-.37.1-.74.28-1.06l9.83-17.24c1.05-1.84,3.84-1.16,3.93.96l5.16,111.48c.05,1.11.94,1.99,2.04,2.02l12.54.38c1.23.04,2.22-.98,2.17-2.22l-5.96-134.05c-.02-.48.12-.96.41-1.35l20.16-27.74c.14-.2.25-.42.32-.66l5.34-18.34c.66-2.26,3.93-1.92,4.12.42l1.46,17.84,8.46,166.5c.06,1.09.92,1.96,2,2.01l9.64.49c1.25.06,2.27-.97,2.21-2.22l-9.94-204.39c-.03-.53.14-1.04.48-1.45l27.1-33.26c.2-.25.35-.54.42-.86l9.43-40.25c.42-1.81-1.51-3.26-3.11-2.33ZM99.46,298.82l-3.05-75.19,1.02-6.65,3.05-3.58,5.08-.51,4.06,2.05,2.03,4.09,3.55,61.38-15.74,18.41Z"/>
  <path class="fill-current" d="M479.93,430.81l-8.74-34.72c-.08-.33-.23-.64-.44-.9l-25.54-32.25c-.49-.62-1.26-.96-2.05-.89l-4.23.36c-2.16.18-3.41-2.4-1.94-4l8-8.72c.41-.45.64-1.04.63-1.66l-.12-8.09c0-.47-.15-.92-.41-1.31l-6.45-9.51c-.28-.41-.68-.73-1.15-.9l-14.59-5.3c-.21-.08-.43-.12-.65-.14l-5.93-.39c-1.26-.08-2.24-1.15-2.22-2.43l.87-46.69c.02-1.05.71-1.96,1.71-2.25,6.91-2,12.04-7.61,12.44-14.51.38-6.71-3.83-12.74-10.18-15.62l-.16-.14-.3-.06c-2.05-.87-6.34-1.41-8.74-1.55l-11.04-.22-19.03.15c-1.42.01-1.95-1.88-.73-2.62l6.4-3.87c1.05-.63,1.43-1.99.86-3.08l-1.37-2.63c-.06-.12-.14-.24-.22-.35l-8.56-11.37c-.26-.34-.6-.61-.99-.77l-13.83-5.68c-.61-.25-1.11-.72-1.4-1.31l-46.31-95.07c-.54-1.11-.77-2.35-.65-3.58l1.3-13.7c.11-1.2-.1-2.4-.6-3.49l-7.68-16.41c-.48-1.03-1.22-1.92-2.14-2.59l-9.08-6.55c-.71-.51-1.31-1.16-1.78-1.91l-22.5-36.49-16.57-25.2c-.47-.75-1.31-1.18-2.18-1.11l-23.81-1.31c-.65.05-1.26.37-1.67.89l-14.06,17.73-8.29,11.95c-.63.76-.73,1.83-.25,2.69l13.09,35.29c.2.36.3.77.3,1.18l-.34,62.3c0,.38.08.75.25,1.08l44.44,89.17,1.76,2.97,18.33,26.4c.77,1.11,2.05,1.77,3.4,1.74l8.26-.15c2.27-.04,4.13,1.8,4.13,4.09l-.02,15.74c0,.84.25,1.66.73,2.35l21.12,30.41c.61.88,1.61,1.41,2.69,1.41l19.81.06c1.35,0,2.65.56,3.59,1.55l5.78,6.05,28.33,28.53c.42.42.66.98.69,1.58l2.83,61.55c.06,1.39-.93,2.6-2.3,2.8l-2.76.41c-.89.13-1.79-.19-2.39-.86l-33.04-36.76c-.5-.56-1.24-.85-1.98-.77l-5.9.56c-2.39.23-3.56-2.86-1.63-4.3l15.61-11.65c.61-.46.97-1.18.96-1.95l-.06-4.64c0-.63-.26-1.23-.71-1.68l-13.43-13.24c-.51-.51-1.23-.75-1.95-.66l-19.31,2.38-28.71,3.54c-.84.1-1.55.64-1.89,1.42l-46.02,107.25c-.36.83-1.14,1.38-2.04,1.44l-12.94.76c-1.07.06-1.96.84-2.18,1.9l-1.01,4.87c-.15.72.04,1.46.5,2.02l18.57,22.31c.21.25.47.46.77.61l75.06,37.38c.55.27,1.17.35,1.76.22l137.01-29.62c.5-.11.94-.37,1.28-.75l5.35-6.08c1.52-1.73-.04-4.41-2.28-3.92l-36.12,7.89c-2.81.61-4.08-3.39-1.44-4.52l56.46-24.2c.79-.34,1.34-1.09,1.43-1.95l2.61-25.15c.03-.28,0-.56-.06-.83ZM282.14,150.43c-.12-.17-.27-.33-.44-.46l-18.58-14.33c-.29-.22-.48-.56-.53-.92l-3.02-39.64c-.18-1.4,1.58-2.15,2.45-1.05l10.94,17.35c.12.15.27.28.45.37l14.97,7.77c.99.51,1.8,1.33,2.31,2.32l45.1,87.48c.19.37.73,1.24.69,1.65l1.99,7.04c-.11,1.28-1.29,2.18-2.55,1.94l-15.53-13.19c-.54-.1-1.03-.41-1.35-.87l-36.89-55.47ZM353.77,297.58l-29.13-16.08c-1.43-.59-1.23-2.68.28-2.99l28.8-.37c.91-.08,1.69.64,1.69,1.56l.51,16.42c0,1.11-1.12,1.87-2.14,1.45ZM327.79,448.49l-8.62,48.62c-.28,1.56-1.31,2.87-2.75,3.5l-7.56,3.3c-1.26.55-2.69.52-3.93-.09l-53.86-26.58c-.47-.23-.89-.54-1.26-.91l-9.23-9.35c-2.02-2.05-1.76-5.44.56-7.14l6.34-4.67c.7-.52,1.24-1.22,1.57-2.02l39.15-96.38c1.29-3.17,5.38-3.95,7.73-1.48l2.81,2.96c.82.87,1.29,2.02,1.3,3.22l.14,14.4c0,.81.22,1.6.62,2.3l22.41,39.49c.29.51.48,1.07.57,1.66l4.04,27.65c.07.5.07,1.02-.02,1.52ZM375.72,327.81c-1.13.1-2.12-.75-2.21-1.88l-1.63-43.35c-.12-3.19,2.82-5.9,5.99-6.1l25.24-1.61c1.12-.12,1.9,1.08,1.35,2.07l-17.19,30.83c-.34.6-.18,1.36.36,1.78l16.71,12.98c.99.77.54,2.35-.69,2.49l-16.42,1.82-11.5.98ZM431.92,401.98l-3.82.66c-.4.07-.82-.04-1.13-.31l-30.36-26.1c-.92-.79-.46-2.3.74-2.44l16.06-1.88c.2-.02.4-.09.57-.2l7.87-4.9c.31-.2.54-.51.62-.88l2.13-9.44c.05-.24.04-.5-.03-.73l-7.81-24.66c-.41-1.3,1.09-2.36,2.16-1.52l11.48,8.94c.33.25.52.64.54,1.05l2.13,60.99c.02.7-.47,1.3-1.15,1.42Z"/>
</svg>
`;

const logoFull = html`
<svg width="100%" height="100%" viewBox="0 0 640 230">
  <defs>
    <style>
      .cls-1 {
        fill: var(--color-orange);
      }
      .cls-2 {
        fill: var(--color-white);
      }
    </style>
  </defs>
  <g>
    <path class="cls-1" d="M99.64,189.67l-8.09-21.84c-.16-.43-.56-.73-1.02-.76l-9.46-.63c-.46-.03-.9.22-1.12.63l-1.28,2.46c-.14.27-.17.59-.08.88l5.42,17.9c.08.28.27.52.52.67l1.55.92c1.06.63.56,2.25-.67,2.18l-64.74-3.84c-.23-.01-.46.04-.66.16l-6.92,4.04c-.52.3-1.18.16-1.54-.32l-1.02-1.4c-.11-.15-.18-.33-.21-.51l-4.88-32.33c-.17-1.1-1.63-1.37-2.18-.4l-3.12,5.54c-.12.21-.17.46-.14.7l3.47,32.52c.06.6.57,1.05,1.17,1.05l37.17-.09c1.45,0,1.61,2.12.17,2.33l-15.54,2.28c-.79.12-1.23.96-.88,1.68l1.28,2.58c.22.44.69.7,1.18.64l62.03-7.02c.37-.04.7-.26.89-.59l2.34-4.14c.2-.35.56-.58.97-.59l5.92-.27c.42-.02.79-.26.98-.62l.68-1.3c.42-.79-.17-1.74-1.07-1.72h0c-.5.01-.95-.29-1.13-.76Z"/>
    <path class="cls-1" d="M32.52,152.25l-14.35-1.75c-1.13-.14-2.24.29-2.9,1.12l-2.21,2.79c-.46.58-.64,1.29-.52,1.99l4.1,23.75c.35,2.02,2.96,3.02,4.82,1.84h0c.56-.36,1.25-.54,1.95-.5l14.38.75c2.01.11,3.57-1.52,3.15-3.29l-5.82-24.55c-.27-1.14-1.32-2.01-2.61-2.17Z"/>
    <path class="cls-1" d="M86.77,60.19l-25.91,15.01c-.9.52-1.82-.63-1.13-1.39l19.32-21.39c.08-.09.14-.19.18-.3l3.87-10.49c.36-.98-.9-1.73-1.58-.95l-22.5,25.44-17.42,20.36-16.27,21.01s-.03.04-.04.06l-17.06,25.82c-.08.11-.12.24-.15.38l-2.5,16.62c-.15,1,1.16,1.5,1.71.66l4.79-7.26c.2-.3.55-.46.91-.41l26.17,3.39c.56.08,1.07-.36,1.07-.93l-1.81-3.65c0-.16.04-.33.12-.47l4.38-7.63c.47-.81,1.71-.51,1.75.42l2.3,49.31c.02.49.42.88.91.9l5.58.17c.55.02.99-.43.97-.98l-2.65-59.29c0-.21.05-.42.18-.6l8.98-12.27c.06-.09.11-.19.14-.29l2.38-8.11c.29-1,1.75-.85,1.84.19l.65,7.89,3.77,73.65c.02.48.41.87.89.89l4.3.22c.55.03,1.01-.43.99-.98l-4.43-90.41c-.01-.23.06-.46.21-.64l12.08-14.71c.09-.11.16-.24.19-.38l4.2-17.8c.19-.8-.67-1.44-1.39-1.03ZM44.31,132.18l-1.36-33.26.45-2.94,1.36-1.58,2.26-.23,1.81.9.9,1.81,1.58,27.15-7.01,8.14Z"/>
    <path class="cls-1" d="M213.82,190.56l-3.89-15.36c-.04-.15-.1-.28-.2-.4l-11.38-14.26c-.22-.28-.56-.42-.91-.39l-1.88.16c-.96.08-1.52-1.06-.86-1.77l3.57-3.86c.18-.2.28-.46.28-.73l-.06-3.58c0-.21-.07-.41-.18-.58l-2.88-4.21c-.13-.18-.3-.32-.51-.4l-6.5-2.34c-.09-.03-.19-.05-.29-.06l-2.64-.17c-.56-.04-1-.51-.99-1.07l.39-20.65c0-.46.32-.87.76-.99,3.08-.88,5.37-3.37,5.54-6.42.17-2.97-1.71-5.63-4.53-6.91l-.07-.06-.13-.03c-.91-.38-2.83-.63-3.89-.69l-4.92-.1-8.48.07c-.63,0-.87-.83-.33-1.16l2.85-1.71c.47-.28.64-.88.38-1.36l-.61-1.16c-.03-.05-.06-.11-.1-.16l-3.81-5.03c-.11-.15-.27-.27-.44-.34l-6.16-2.51c-.27-.11-.49-.32-.62-.58l-20.63-42.05c-.24-.49-.34-1.04-.29-1.59l.58-6.06c.05-.53-.04-1.06-.27-1.54l-3.42-7.26c-.22-.46-.54-.85-.95-1.14l-4.05-2.9c-.32-.23-.59-.51-.79-.85l-10.02-16.14-7.38-11.15c-.21-.33-.58-.52-.97-.49l-10.61-.58c-.29.02-.56.16-.74.39l-6.26,7.84-3.69,5.28c-.28.34-.32.81-.11,1.19l5.83,15.61c.09.16.14.34.13.52l-.15,27.56c0,.17.04.33.11.48l19.8,39.44.78,1.32,8.17,11.68c.34.49.91.78,1.51.77l3.68-.07c1.01-.02,1.84.8,1.84,1.81v6.96c-.01.37.1.73.32,1.04l9.41,13.45c.27.39.72.62,1.2.63l8.83.03c.6,0,1.18.25,1.6.68l2.58,2.68,12.62,12.62c.19.19.3.44.31.7l1.26,27.23c.03.61-.41,1.15-1.02,1.24l-1.23.18c-.4.06-.8-.08-1.07-.38l-14.72-16.26c-.22-.25-.55-.37-.88-.34l-2.63.25c-1.06.1-1.59-1.26-.73-1.9l6.96-5.15c.27-.2.43-.52.43-.86l-.03-2.05c0-.28-.12-.55-.32-.74l-5.98-5.86c-.23-.22-.55-.33-.87-.29l-8.6,1.05-12.79,1.57c-.37.05-.69.29-.84.63l-20.5,47.44c-.16.37-.51.61-.91.64l-5.76.34c-.48.03-.88.37-.97.84l-.45,2.15c-.07.32.02.65.22.89l8.28,9.87c.09.11.21.2.34.27l33.44,16.54c.24.12.52.15.79.1l61.04-13.1c.22-.05.42-.16.57-.33l2.38-2.69c.68-.76-.02-1.95-1.01-1.73l-16.09,3.49c-1.25.27-1.82-1.5-.64-2l25.15-10.7c.35-.15.6-.48.64-.86l1.16-11.13c.01-.12,0-.25-.03-.37ZM125.7,66.54c-.06-.08-.12-.14-.2-.2l-8.28-6.34c-.13-.1-.21-.25-.24-.41l-1.35-17.53c-.08-.62.7-.95,1.09-.47l4.87,7.67c.05.07.12.12.2.16l6.67,3.44c.44.23.8.59,1.03,1.03l20.09,38.7c.08.16.32.55.31.73l.88,3.11c-.05.57-.58.96-1.13.86l-6.92-5.84c-.24-.05-.46-.18-.6-.38l-16.43-24.54ZM157.61,131.63l-12.98-7.11c-.64-.26-.55-1.19.13-1.32l12.83-.16c.4-.03.75.29.75.69l.23,7.26c0,.49-.5.83-.96.64ZM146.04,198.38l-3.84,21.51c-.12.69-.58,1.27-1.23,1.55l-3.37,1.46c-.56.24-1.2.23-1.75-.04l-24-11.76c-.21-.1-.4-.24-.56-.4l-4.11-4.13c-.9-.91-.78-2.4.25-3.16l2.82-2.07c.31-.23.55-.54.7-.9l17.44-42.63c.57-1.4,2.4-1.75,3.44-.65l1.25,1.31c.37.38.57.89.58,1.42l.06,6.37c0,.36.1.71.28,1.02l9.98,17.47c.13.23.22.47.25.73l1.8,12.23c.03.22.03.45-.01.67ZM167.39,145c-.5.04-.94-.33-.99-.83l-.73-19.18c-.05-1.41,1.26-2.61,2.67-2.7l11.24-.71c.5-.05.85.48.6.91l-7.66,13.64c-.15.27-.08.6.16.79l7.45,5.74c.44.34.24,1.04-.31,1.1l-7.32.8-5.12.43ZM192.43,177.81l-1.7.29c-.18.03-.37-.02-.5-.14l-13.53-11.54c-.41-.35-.21-1.02.33-1.08l7.16-.83c.09-.01.18-.04.25-.09l3.51-2.17c.14-.09.24-.23.28-.39l.95-4.17c.02-.11.02-.22-.01-.32l-3.48-10.91c-.18-.58.49-1.04.96-.67l5.12,3.96c.14.11.23.28.24.47l.95,26.98c.01.31-.21.58-.51.63Z"/>
  </g>
  <g>
    <path class="cls-2" d="M245.9,112.11v-57.28h22.04c4.97,0,9.42.51,13.33,1.54,3.92,1.03,7,2.89,9.26,5.57,2.26,2.69,3.39,6.55,3.39,11.58s-1.13,8.82-3.39,11.53c-2.26,2.72-5.35,4.59-9.26,5.62-3.92,1.03-8.36,1.54-13.33,1.54h-8.49v19.89h-13.55ZM259.45,80.99h8.92c2.11,0,4.02-.2,5.7-.6,1.69-.4,3.03-1.14,4.03-2.23,1-1.09,1.5-2.63,1.5-4.63s-.5-3.53-1.5-4.59c-1-1.06-2.34-1.77-4.03-2.14-1.69-.37-3.59-.56-5.7-.56h-8.92v14.75Z"/>
    <path class="cls-2" d="M300.69,112.11v-10.63h8.06v-36.01h-8.06v-10.63h29.5v10.63h-7.89v36.01h7.89v10.63h-29.5Z"/>
    <path class="cls-2" d="M338.85,112.11v-57.28h17.24l22.12,40.82v-40.82h13.12v57.28h-17.32l-22.12-40.82v40.82h-13.03Z"/>
    <path class="cls-2" d="M398.87,112.11v-57.28h13.55v21.87h23.58v-21.87h13.55v57.28h-13.55v-23.5h-23.58v23.5h-13.55Z"/>
    <path class="cls-2" d="M485.99,113.14c-5.83,0-10.98-1.23-15.43-3.69-4.46-2.46-7.95-5.92-10.46-10.38-2.52-4.46-3.77-9.66-3.77-15.61s1.26-11.15,3.77-15.61c2.51-4.46,6-7.92,10.46-10.38,4.46-2.46,9.6-3.69,15.43-3.69s11.06,1.23,15.52,3.69c4.46,2.46,7.96,5.92,10.5,10.38,2.54,4.46,3.82,9.66,3.82,15.61s-1.27,11.15-3.82,15.61c-2.54,4.46-6.05,7.92-10.5,10.38-4.46,2.46-9.63,3.69-15.52,3.69ZM485.99,101.99c2.8,0,5.37-.7,7.72-2.1,2.34-1.4,4.22-3.47,5.62-6.22,1.4-2.74,2.1-6.14,2.1-10.2s-.7-7.46-2.1-10.2c-1.4-2.74-3.27-4.82-5.62-6.22-2.34-1.4-4.92-2.1-7.72-2.1s-5.29.7-7.63,2.1c-2.34,1.4-4.22,3.47-5.62,6.22-1.4,2.74-2.1,6.15-2.1,10.2s.7,7.46,2.1,10.2c1.4,2.74,3.27,4.82,5.62,6.22,2.34,1.4,4.89,2.1,7.63,2.1Z"/>
    <path class="cls-2" d="M551.51,113.14c-5.83,0-10.98-1.23-15.43-3.69-4.46-2.46-7.95-5.92-10.46-10.38-2.52-4.46-3.77-9.66-3.77-15.61s1.26-11.15,3.77-15.61c2.51-4.46,6-7.92,10.46-10.38,4.46-2.46,9.6-3.69,15.43-3.69s11.06,1.23,15.52,3.69c4.46,2.46,7.96,5.92,10.5,10.38,2.54,4.46,3.82,9.66,3.82,15.61s-1.27,11.15-3.82,15.61c-2.54,4.46-6.05,7.92-10.5,10.38-4.46,2.46-9.63,3.69-15.52,3.69ZM551.51,101.99c2.8,0,5.37-.7,7.72-2.1,2.34-1.4,4.22-3.47,5.62-6.22,1.4-2.74,2.1-6.14,2.1-10.2s-.7-7.46-2.1-10.2c-1.4-2.74-3.27-4.82-5.62-6.22-2.34-1.4-4.92-2.1-7.72-2.1s-5.29.7-7.63,2.1c-2.34,1.4-4.22,3.47-5.62,6.22-1.4,2.74-2.1,6.15-2.1,10.2s.7,7.46,2.1,10.2c1.4,2.74,3.27,4.82,5.62,6.22,2.34,1.4,4.89,2.1,7.63,2.1Z"/>
    <path class="cls-2" d="M588.12,112.11v-57.28h13.55v22.72l20.67-22.72h16.55l-22.64,24.52,23.75,32.76h-15.69l-16.81-23.32-5.83,6.43v16.89h-13.55Z"/>
  </g>
  <g>
    <path class="cls-2" d="M245.9,172.31v-42.73h32.88v8.89h-22.77v7.42h13.88v8.89h-13.88v8.64h22.77v8.89h-32.88Z"/>
    <path class="cls-2" d="M280.82,172.31l15.67-21.94-14.78-20.79h12.09l8.7,12.28,8.76-12.28h12.09l-14.78,20.79,15.67,21.94h-12.15l-9.6-13.5-9.53,13.5h-12.15Z"/>
    <path class="cls-2" d="M346.71,173.08c-4.44,0-8.25-.9-11.45-2.69s-5.65-4.35-7.36-7.68c-1.71-3.33-2.56-7.25-2.56-11.77s.88-8.43,2.65-11.74c1.77-3.3,4.27-5.86,7.52-7.68,3.24-1.81,7.06-2.72,11.45-2.72,4.05,0,7.58.9,10.59,2.69,3.01,1.79,5.32,4.2,6.94,7.23l-8.96,3.26c-.94-1.75-2.22-3-3.84-3.74-1.62-.75-3.31-1.12-5.05-1.12-1.96,0-3.75.54-5.37,1.63-1.62,1.09-2.9,2.67-3.84,4.73-.94,2.07-1.41,4.55-1.41,7.45,0,4.48,1.03,7.9,3.1,10.27,2.07,2.37,4.62,3.55,7.64,3.55,1.62,0,3.29-.34,5.02-1.02,1.73-.68,3.08-1.94,4.06-3.77l8.89,3.26c-1.71,3.03-4.13,5.43-7.26,7.2-3.13,1.77-6.73,2.65-10.78,2.65Z"/>
    <path class="cls-2" d="M366.48,172.31l16.18-42.73h11.13l16.18,42.73h-11l-2.56-7.61h-16.38l-2.56,7.61h-11ZM382.79,156.51h10.87l-5.5-16.25-5.37,16.25Z"/>
    <path class="cls-2" d="M419.7,172.31l-14.46-42.73h10.49l9.79,31.41,9.85-31.41h10.55l-14.52,42.73h-11.71Z"/>
    <path class="cls-2" d="M442.6,172.31l16.18-42.73h11.13l16.18,42.73h-11l-2.56-7.61h-16.38l-2.56,7.61h-11ZM458.91,156.51h10.87l-5.5-16.25-5.37,16.25Z"/>
    <path class="cls-2" d="M496.91,172.31v-33.84h-13.75v-8.89h37.55v8.89h-13.75v33.84h-10.04Z"/>
    <path class="cls-2" d="M525.31,172.31v-7.93h6.01v-26.87h-6.01v-7.93h22.01v7.93h-5.89v26.87h5.89v7.93h-22.01Z"/>
    <path class="cls-2" d="M573.54,173.08c-4.35,0-8.19-.92-11.51-2.75-3.33-1.83-5.93-4.41-7.8-7.74-1.88-3.33-2.81-7.21-2.81-11.64s.94-8.32,2.81-11.64c1.88-3.33,4.48-5.91,7.8-7.74,3.33-1.83,7.16-2.75,11.51-2.75s8.25.92,11.58,2.75c3.33,1.83,5.94,4.41,7.84,7.74,1.9,3.33,2.85,7.21,2.85,11.64s-.95,8.32-2.85,11.64c-1.9,3.33-4.51,5.91-7.84,7.74-3.33,1.83-7.19,2.75-11.58,2.75ZM573.54,164.76c2.09,0,4.01-.52,5.76-1.57,1.75-1.04,3.14-2.59,4.19-4.64,1.04-2.05,1.57-4.58,1.57-7.61s-.52-5.57-1.57-7.61c-1.05-2.05-2.44-3.59-4.19-4.64-1.75-1.04-3.67-1.57-5.76-1.57s-3.95.52-5.69,1.57c-1.75,1.05-3.15,2.59-4.19,4.64-1.05,2.05-1.57,4.58-1.57,7.61s.52,5.57,1.57,7.61c1.04,2.05,2.44,3.59,4.19,4.64,1.75,1.05,3.65,1.57,5.69,1.57Z"/>
    <path class="cls-2" d="M600.85,172.31v-42.73h12.86l16.5,30.45v-30.45h9.79v42.73h-12.92l-16.5-30.45v30.45h-9.72Z"/>
  </g>
</svg>
`;

const play = html`
  <svg width="100%" height="100%" viewBox="-3 0 28 28" fill="#FFFFFF">
    <g>
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g transform="translate(-419.000000, -571.000000)" fill="#FFFFFF">
          <path
            d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
          ></path>
        </g>
      </g>
    </g>
  </svg>
`;

const print = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      class="fill-current"
      d="M21.5 10H18V5.635L13.281 1H6v9H2.5A1.5 1.5 0 0 0 1 11.5v8A1.5 1.5 0 0 0 2.5 21H6v2h12v-2h3.5a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5zM17 6h-4V2zM7 2h5v5h5v3H7zm10 20H7v-5h10zm5-2.5a.5.5 0 0 1-.5.5H18v-2h1v-2H5v2h1v2H2.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5zm-7 .5v1H9v-1zm-6-1v-1h6v1zm10-7h1v1h-1z"
    />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
`;

const printCircle = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
  >
    <circle class="fill-current" cx="18" cy="18" r="18" />
    <path
      d="M13.333,16H2.666V12H1.333A1.319,1.319,0,0,1,0,10.667V4A1.319,1.319,0,0,1,1.333,2.666H2.666V0H13.333V2.666h1.333A1.319,1.319,0,0,1,16,4v6.667A1.319,1.319,0,0,1,14.666,12H13.333v4ZM4,9.333v5.333h8V9.333ZM2.666,8H13.333v2.666h1.333V4H1.333v6.667H2.666V8ZM4,1.333V2.666h8V1.333Z"
      transform="translate(10 10)"
      fill="#fff"
    />
  </svg>
`;

const quiltOne = html`
<svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_219_107)">
    <path d="M80.0439 80.0068V40.0322L0.0948029 40.0322V80.0068H80.0439Z" fill="#0887FF"/>
    <path d="M80.0439 40.0322V0.0576172L0.0948029 0.0576172V40.0322L80.0439 40.0322Z" fill="#F77800"/>
    <path d="M60.0058 0.0576172H20.0312V80.1085H60.0058V0.0576172Z" fill="#1A1A1A"/>
    <path d="M20.006 -0.0191677L0.0185547 19.9683L20.006 39.9557L39.9934 19.9683L20.006 -0.0191677Z" fill="#FAFAFA"/>
    <path d="M59.9806 -0.0186794L39.9932 19.9688L59.9806 39.9562L79.968 19.9688L59.9806 -0.0186794Z" fill="#FAFAFA"/>
    <path d="M59.9806 39.9554L39.9932 59.9429L59.9806 79.9303L79.968 59.9429L59.9806 39.9554Z" fill="#FAFAFA"/>
    <path d="M20.006 39.9559L0.0185547 59.9434L20.006 79.9308L39.9934 59.9434L20.006 39.9559Z" fill="#FAFAFA"/>
  </g>
  <defs>
    <clipPath id="clip0_219_107">
      <rect width="80" height="80" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;

const search = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 18 18"
  >
    <path
      class="fill-current"
      d="M14.287,12.634a7.624,7.624,0,0,0,1.575-4.7A7.9,7.9,0,0,0,7.987,0,7.993,7.993,0,0,0,0,7.938a7.993,7.993,0,0,0,7.987,7.938,7.5,7.5,0,0,0,4.725-1.565l3.375,3.354a1.092,1.092,0,0,0,1.575,0,1.076,1.076,0,0,0,0-1.565Zm-6.3.894A5.649,5.649,0,0,1,2.25,7.938a5.738,5.738,0,0,1,11.475,0A5.649,5.649,0,0,1,7.987,13.528Z"
    />
  </svg>
`;

const spinner = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 38 38"
  >
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stop-opacity="0" offset="0%" />
        <stop stop-opacity=".631" offset="63.146%" />
        <stop offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)">
        <path
          d="M36 18c0-9.94-8.06-18-18-18"
          id="Oval-2"
          stroke="url(#a)"
          stroke-width="2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
        <circle fill="#fff" cx="36" cy="18" r="1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  </svg>
`;

const twitter = html`
  <svg
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40.88"
  >
    <path
      class="fill-current"
      d="m23.81,17.31L38.7,0h-3.53l-12.93,15.03L11.91,0H0l15.62,22.73L0,40.88h3.53l13.65-15.87,10.91,15.87h11.91l-16.2-23.57h0Zm-4.83,5.62l-1.58-2.26L4.8,2.66h5.42l10.16,14.53,1.58,2.26,13.21,18.89h-5.42l-10.78-15.41h0Z"
    ></path>
  </svg>
`;

const youtube = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="42"
    height="29"
    viewBox="0 0 42 29"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          width="42"
          height="29"
          transform="translate(-0.349 0)"
          fill="none"
        />
      </clipPath>
    </defs>
    <g transform="translate(0.612 -0.065)">
      <g transform="translate(-0.262 0.065)" clip-path="url(#clip-path)">
        <path
          class="fill-current"
          d="M40.323,4.531A5.174,5.174,0,0,0,36.682.866C33.47,0,20.592,0,20.592,0S7.713,0,4.5.866A5.174,5.174,0,0,0,.861,4.531C0,7.763,0,14.508,0,14.508s0,6.744.861,9.977A5.175,5.175,0,0,0,4.5,28.149c3.212.866,16.09.866,16.09.866s12.878,0,16.09-.866a5.175,5.175,0,0,0,3.641-3.665c.861-3.232.861-9.977.861-9.977s0-6.744-.861-9.977M16.38,20.631V8.384l10.764,6.124Z"
          transform="translate(0.445 -0.18)"
        />
      </g>
    </g>
  </svg>
`;

const icons = {
  arrow,
  chevron,
  cross,
  crossCircle,
  email,
  emailCircle,
  facebook,
  globe,
  hamburger,
  instagram,
  linkedin,
  logo,
  logoFull,
  play,
  print,
  printCircle,
  quiltOne,
  search,
  spinner,
  twitter,
  youtube,
};

const styles = css`
  :host {
    display: contents;
  }

  svg.fill-current,
  svg .fill-current {
    fill: currentColor;
  }

  svg.stroke-current,
  svg .stroke-current {
    stroke: currentColor;
  }
`;

export class Icon extends LitElement {
  static styles = styles;

  @property({ type: String }) icon: string = "";

  get iconSvg() {
    return icons[this.icon as keyof typeof icons];
  }

  render() {
    return html`${this.iconSvg}`;
  }
}

window.customElements.define("px-icon", Icon);
