import { create } from "zustand";
import axios from "axios";
interface UseFetchData {
  data: any;
  loading: boolean;
  error: any;
}
const url = "https://groww-intern-assignment.vercel.app/v1/api/order-details";
const useFetchData = create<UseFetchData>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      set({ data, loading: false });
    } catch (error) {
      set({
        error: "Error fetching data, please try again later!!",
        loading: false,
      });
    }
  },
}));

export default useFetchData;
