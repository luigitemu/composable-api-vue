import { ref } from "vue";
import axios from "axios";

export const useUsers = (page = 1) => {
  const isLoading = ref(true);
  const currentPage = ref(1);
  const users = ref([]);
  const errorMessage = ref(null);

  const getUsers = async (page = 1) => {
    if (page < 1) {
      page = 1;
    }
    isLoading.value = true;
    const { data, status } = await axios.get("https://reqres.in/api/users", {
      params: {
        page: page,
      },
    });
    if (status === 200 && data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      errorMessage.value = null;
    } else if (currentPage.value > 0) {
      errorMessage.value = "No hay mas usuarios ";
    }
    isLoading.value = false;
  };

  getUsers();

  return {
    isLoading,
    currentPage,
    users,
    errorMessage,
    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1),
  };
};
