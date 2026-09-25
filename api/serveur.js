const express = require("express");
const app = express();
let samsung = [
  { id: 1, nom: "samsung galaxy s24", prix: 500 },
  { id: 2, nom: "samsung galaxy s25", prix: 600 },
  { id: 3, nom: "samsung galaxy s26", prix: 700 }
];

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});


// GET /samsung -> renvoie tout le tableau
app.get("/samsung", (req, res) => {
  res.json(samsung);
}); 

// GET /produits/2 -> renvoie le produit dont l id vaut 2
app.get("/samsung/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const produit = samsung.find((p) => p.id === id);
  if (!produit) {                              // rien trouve
    return res.status(404).json({ erreur: "produits introuvable" });
  }
  res.json(produit);
});

