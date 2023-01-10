import create from "zustand";
import { products } from "./data";

const useStore = create((set) => ({
  products: products,

  addItem: (data) => {
    set((state) => ({
      products: [
        {
          productName: data.name,
          id: Math.random() * 100,
          Image: data.imgUrl,
          category: data.category,
          price: data.price,
          shortDesc: data.shortDesc,
          description: data.description,
        },
        ...state.products,
      ],
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      products: state.products.filter((data) => data.id !== id),
    }));
  },

  filter: "",
  setFilter: (value) => {
    set({ filter: value });
  },
}));

export default useStore;
