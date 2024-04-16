import initUserRoutes from "./user.routes.js";

// Fonction pour initialiser toutes les routes de l'application Express
const initRoutes = (app) => {
    // Appel des fonctions d'initialisation des routes pour chaque domaine
    initUserRoutes(app);
};

export default initRoutes;