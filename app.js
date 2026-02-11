// TODO : 
// -Ajouter compétences, projets, contact, etc.
// Completer les sections avec du contenu réel

const { createApp } = Vue;
// Je vais utiliser vue pour faire des boucle automatiques v-for pour les projets, compétences, etc. ça va creer les div automatiquement comme ça 
createApp({
    data() {
        return {
            portfolio: {
                nom: "Miens Alexis",
                titre: "Développeur d'applications / Web",
                soustitre: "blablabla",
                apropos: {            
                    description: "Passionné par le développement web," +
                        "je crée des expériences numériques innovantes et performantes." +
                        "Avec une expertise en HTML, CSS, JavaScript et Vue.js, je transforme les idées en réalité." + 
                        "Découvrez mes projets et contactez-moi pour collaborer sur votre prochain projet web.",
                    passion: "J'adore résoudre des problèmes complexes et créer des interfaces utilisateur intuitives. " +
                        "Mon objectif est de développer des applications web qui offrent une expérience utilisateur exceptionnelle tout en étant performantes et maintenables.",
                },
                parcours: [
                    {
                        periode : "2024 - 2026",
                        titre : "BTS SIO SLAM"
                    },
                    {
                        periode : "2025",
                        titre : "Stage developpement d'une application C#"
                    },
                    {
                        periode : "2026",
                        titre : "Stage Academie police clermont ferrand"
                    },
                ],
                competences: [
                    "Vue.js",
                    "JavaScript",
                    "HTML/CSS",
                    "Node.js",
                    "Git",
                    "Sql/MySQL",
                    "php",
                    "Csharp NET",
                ],
                projets: [

                ],
            },
        };
    },
    mounted() {
        // Menu burger toggle
        const burger = document.querySelector('.burger'); // 
        const navLinks = document.querySelector('.nav-links'); // 
        
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active'); 
        });
        
        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            });
        });
        // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            // Sélectionne tous les liens d'ancrage
            anchor.addEventListener("click", function (e) {
              // Ajoute un écouteur d'événement pour le clic
              e.preventDefault(); // Empêche le comportement par défaut du lien en gros pas les saut directe quand on clique sur un lien comme ça je peux custom
              const target = document.querySelector(this.getAttribute("href")); // Récupère la cible de l'ancre
              if (target) {
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                }); // Fait défiler en douceur jusqu'à la cible
              }
            });
          });
    }      
}).mount("#app");
