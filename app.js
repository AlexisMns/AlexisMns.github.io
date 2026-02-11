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
                titre: "Etudiant en BTS SIO SLAM",
                soustitre: "Actuellement etudiant en bts sio slam (devoppement d'application)," + 
                "je suis passionné par le développement d'applications et la création de solutions innovantes. " + 
                "Mon objectif est de devenir un développeur compétent et polyvalent, capable de concevoir des applications performantes et adaptées aux besoins des utilisateurs.",
                apropos: {            
                    description: "Passionné par le développement web," +
                        "je crée des expériences numériques innovantes et performantes." +
                        "Avec une expertise en HTML, CSS, JavaScript et Vue.js, je transforme les idées en réalité.",                      
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
                    {
                        titre : "Application de gestion de médicaments",
                        description : "Développement d'une application de gestion de médicaments, médecin et visiteur en C#. L'application permet de suivre les stocks et générer des rapports.",
                        image : "/assets/gsb.png",
                        tags : ["C#", "MySQL", "WinForms"],
                        lien :"https://github.com/AlexisMns/AppliGSB",
                    },
                    {
                        titre : "Classement musical français hebdomadaire",
                        description : "Création d'un site web affichant le classement musical français hebdomadaire en utilisant Vue.js pour le frontend et Node.js pour le backend.",
                        image : "/assets/vibz.png",
                        tags : ["Vue", "javascript", "typescript" ,"express" ,"mysql"],
                        lien :"https://vibz-music.netlify.app/",
                    }
                ],
                contact: {
                    mail: "mailto:miens.sio@gmail.com",
                    github: "https://github.com/AlexisMns",
                    linkedin: "https://www.linkedin.com/in/alexis-miens/",
                }
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
