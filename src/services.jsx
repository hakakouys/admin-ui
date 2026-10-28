  const city = "jakarta";
  const street="Jl.merdeka";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city:city,
      street:street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("[Services] Gagal mengambil posts:", error);
    throw error;
  }
};
  
