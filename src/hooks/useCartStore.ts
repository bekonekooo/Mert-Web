import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      });
    } catch (err) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
}));







// import { create } from "zustand";
// import { currentCart } from "@wix/ecom";
// import { WixClient } from "@/context/wixContext";

// type CartState = {
//   cart: currentCart.Cart | null;
//   isLoading: boolean;
//   counter: number;
//   getCart: (wixClient: WixClient) => Promise<void>;
//   addItem: (
//     wixClient: WixClient,
//     productId: string,
//     variantId: string | null,
//     quantity: number
//   ) => Promise<void>;
//   removeItem: (wixClient: WixClient, itemId: string) => Promise<void>;
// };

// export const useCartStore = create<CartState>((set) => ({
//   cart: null,
//   isLoading: false,
//   counter: 0,

//   getCart: async (wixClient) => {
//     set({ isLoading: true });
//     try {
//       const cart = await wixClient.currentCart.getCurrentCart();
//       set({
//         cart,
//         isLoading: false,
//         counter: cart?.lineItems?.length || 0,
//       });
//     } catch (err) {
//       console.error("getCart error:", err);
//       set({ isLoading: false });
//     }
//   },

//   addItem: async (wixClient, productId, variantId, quantity) => {
//     set({ isLoading: true });
//     try {
//       const response = await wixClient.currentCart.addToCurrentCart({
//         lineItems: [
//           {
//             catalogReference: {
//               appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
//               catalogItemId: productId,
//               ...(variantId ? { options: { variantId } } : {}),
//             },
//             quantity,
//           },
//         ],
//       });

//       set({
//         cart: response.cart,
//         counter: response.cart?.lineItems?.length || 0,
//         isLoading: false,
//       });
//     } catch (err) {
//       console.error("addItem error:", err);
//       set({ isLoading: false });
//     }
//   },

//   removeItem: async (wixClient, itemId) => {
//     set({ isLoading: true });
//     try {
//       const response =
//         await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);

//       set({
//         cart: response.cart,
//         counter: response.cart?.lineItems?.length || 0,
//         isLoading: false,
//       });
//     } catch (err) {
//       console.error("removeItem error:", err);
//       set({ isLoading: false });
//     }
//   },
// }));


// DENEME 3 

