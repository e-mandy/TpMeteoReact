export const refreshPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Chargement des données réussi !!");
    }, 1000);
  });
};
