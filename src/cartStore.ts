import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ProductInCart extends Omit<Product, 'description'> {
  amount: number;
}

interface CartState {
  products: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  updateAmount: (productId: number, newAmount: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        addToCart(product) {
          set((state) => {
            const isAlreadyInCart = state.products.find(
              (state_product) => state_product.id == product.id
            );

            if (isAlreadyInCart) {
              return {
                products: state.products.map((state_product) => {
                  if (state_product.id == product.id) {
                    return {
                      ...state_product,
                      amount: state_product.amount + 1,
                    };
                  } else {
                    return state_product;
                  }
                }),
              };
            } else {
              return {
                products: [...state.products, product],
              };
            }
          });
        },
        updateAmount(productId, newAmount) {
          set((state) => {
            return {
              products: state.products.map((product) => {
                if (product.id == productId) {
                  return {
                    ...product,
                    amount: newAmount,
                  };
                } else {
                  return product;
                }
              }),
            };
          });
        },
        removeFromCart(productId) {
          set((state) => {
            return {
              products: state.products.filter(
                (product) => product.id != productId
              ),
            };
          });
        },
        clearCart() {
          set({ products: [] });
        },
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);
