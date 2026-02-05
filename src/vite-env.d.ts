/// <reference types="vite/client" />

// Tipos para Hotmart Checkout
interface HotmartCheckoutElements {
  init: (type: string, options: { offer: string }) => {
    mount: (selector: string) => void;
    unmount: () => void;
  };
}

interface Window {
  checkoutElements?: HotmartCheckoutElements;
}
