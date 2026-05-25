// TODO : 
// -Ajouter compétences, projets, contact, etc.
// Completer les sections avec du contenu réel

const { createApp } = Vue;
// Je vais utiliser vue pour faire des boucle automatiques v-for pour les projets, compétences, etc. ça va creer les div automatiquement comme ça 
createApp({
    data() {
        return {
            modalProjet: null, // null = modal fermé
            portfolio: {
                nom: "Miens Alexis",
                titre: "Etudiant en BTS SIO SLAM",
                soustitre: "je suis passionné par le développement web. " + 
                "Mon objectif est de devenir un développeur compétent et polyvalent, capable de créer des applications web performantes et innovantes.",
                apropos: {            
                    description: "Étudiant passionné par le développement web. Mes stages m’ont permis de renforcer mes compétences techniques et de découvrir le monde professionnel.",

                    passion: "Curieux et autonome, j’aime apprendre de nouvelles technologies et relever des défis pour progresser en développement.",
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
                    "TypeScript",
                    "Asp.NET core",
                    "Git",
                    "Sql/MySQL",
                    "php",
                    "Csharp NET",
                ],
                projets: [
                    {
                        titre : "Site de gestion de formation pour l'academie de police de Clermont-Ferrand",
                        description : "Modernisation du site de gestion de formation de l'academie de police de Clermont-Ferrand",
                        image : "/assets/StagePolice.png",
                        tags : ["PHP", "MySQL", "JS", "Bootstrap"],
                        details: {
                            contexte: "Le site offre de formation de l’académie de police permet actuellement de rechercher et de consulter des formations via une interface utilisateur." + 
                            "\nCependant, cette application repose sur des technologies obsolètes",
                            objectif: "Moderniser le site de gestion des formations de l'Académie de Police ",
                            difficultes: "Mise en place d'une hiérarchie dynamique entre niveaux ",
                            competencesAcquises: [
                                "Gérer le patrimooine informatique",
                                "Répondre aux incidents et aux demandes d’assistance et d’évolution",
                                "Développer la présence en ligne de l’organisation",
                                "Travailler en mode projet",
                                "Mettre a disposition des utilisateurs un service informatique",
                                "Organiser son développement professionnel",
                            ]
                        }
                    },
                    {
                        titre : "Vibz",
                        description : "Vibz est une application web moderne qui vous permet de découvrir et d'écouter le top 20 des musique de la semaines youtube.",
                        image : "/assets/vibz.png",
                        tags : ["Vue", "javascript", "typescript" ,"express" ,"mysql", "node"],
                        lien :"https://vibz-music.netlify.app/",
                        details: {
                            contexte: "Le site de classement musical français hebdomadaire est une application web qui affiche le top 20 des musiques les plus populaires en France chaque semaine.",
                            objectif: "Créer une application web qui récupère et affiche le classement musical en temps réel.",
                            competencesAcquises: [
                                "Gérer le patrimooine informatique",
                                "Répondre aux incidents et aux demandes d’assistance et d’évolution",
                                "Développer la présence en ligne de l’organisation",
                                "Travailler en mode projet",
                                "Mettre a disposition des utilisateurs un service informatique",
                                "Organiser son développement professionnel",
                            ]
                        }
                    },
                    {
                        titre : "Gsb",
                        description : "Développement d'une application de gestion de médicaments, médecin et visiteur en C#. L'application permet de suivre les stocks et générer des rapports.",
                        image : "/assets/gsb.png",
                        tags : ["C#", "MySQL", "WinForms"],
                        lien :"https://github.com/AlexisMns/AppliGSB",
                        details: {
                            contexte:" Mise en place d'une application de gestion de médicaments, médecin et visiteur en C#. L'application permet de suivre les stocks et générer des rapports.",
                            objectif: "Développer une application desktop permettant de gérer les médicaments, les médecins et les visiteurs médicaux, avec génération de rapports automatisés.",
                            difficultes: "La difficulté rencontré était la compréhension de l'architecture",
                            competencesAcquises: [
                                "Gérer des sauvegardes",
                                "Mettre en place son environnement d’apprentissage personnel",
                            ]
                        }
                    },
                    {
                        titre : "Portfolio personnel",
                        description : "Création d'un portfolio personnel pour présenter mes compétences, projets et parcours. Le site est responsive et utilise Vue.js",
                        image : "/assets/portfolio.png",
                        tags : ["JS", "Vue", "HTML", "CSS"],
                        details: {
                            contexte: "Projet personnel réalisé dans le cadre de mon BTS SIO pour présenter mon parcours, mes compétences et mes projets de manière claire et professionnelle.",
                            objectif: "Concevoir un portfolio responsive en Vue.js, sans framework CSS, avec une navigation fluide et une structure de données centralisée pour faciliter les mises à jour.",
                            difficultes: "La principale difficulté a été de gérer le responsive sans framework CSS, notamment pour le menu burger et le carrousel de projets sur mobile.",
                            competencesAcquises: [
                                "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
                                "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
                            ]
                        }
                    },
                    {
                        titre : "Sport Sio",
                        description : "Développement d'une application de gestion des sports et des sportifs.",
                        image : "/assets/sportsio.png",
                        tags : ["C#", "MySQL", "WinForms"],
                        lien :"https://github.com/AlexisMns/ApplicationSportFormulaire",
                        details: {
                            contexte: "Mise en place d'une application de gestion des sports et des sportifs en C#. L'application permet de suivre les sports et les sportifs, avec une interface utilisateur simple et efficace.",
                            objectif: "Développer une application desktop permettant de gérer les sports et les sportifs, avec une interface utilisateur intuitive et des fonctionnalités de suivi des performances.",
                            competencesAcquises: [
                                "Traiter des demandes concernant les applications",
                                "Analyser les objectifs et les modalités d’organisation d’un projet",
                                "Planifier les activités",
                                "Réaliser les tests d’intégration et d’acceptation d’un service",
                                "Mettre en place son environnement d’apprentissage personnel",
                            ]
                        }
                    },
                    {
                        titre : "AP Maintenance corrective et/ou évolution de jeux",
                        description : "Projet c# qui regroupe trois jeux : un pendu , un morpion et un mastermind accessible depuis une interface de lancement.",
                        image : "/assets/pendu.jpg",
                        tags : ["C#", "MySQL", "WinForms"],
                        lien :"https://github.com/AlexisMns/ProjetJeux",
                        details: {                          
                            competencesAcquises: [
                                "Traiter des demandes concernant les applications",
                                "Planifier les activités",
                                "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
                            ]
                        }
                    },
                    {
                        titre : "Snoitome",
                        description : "Conception et réalisation complète d'un site vitrine promotionnel pour un produit technologique fictif. L'objectif était de présenter les fonctionnalités innovantes d'une boisson fictive.",
                        image : "/assets/snoitome.png",
                        tags : ["HTML", "CSS"],
                        lien :"https://coco324.github.io/snoitome/produitphare.html",
                        details: {                          
                            competencesAcquises: [
                                "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
                                "Planifier les activités",
                                "Analyser les objectifs et les modalités d’organisation d’un projet",
                            ]
                        }
                    },
                    {
                        titre : "Zengarden",
                        description : "CSS Zen Garden est un site qui montre l’importance du CSS dans la création d’un site web. "+
                        "Le principe est d’utiliser une seule page HTML et de changer uniquement la feuille de style. "+
                        "Chaque design est différent, mais le contenu reste le même. "+
                        "Cela permet de comprendre le rôle du CSS dans la mise en forme",
                        image : "/assets/cssZengarden.png",
                        tags : ["HTML", "CSS"],
                        lien :"https://alexismns.github.io/CSSZenGarden/",
                        details: {                          
                            competencesAcquises: [
                                "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
                            ]
                        }
                        
                    },
                    {
                        titre : "Agenda",
                        description : "Application Agenda permettant de créer et gérer des rappels (date, heure, message, fréquence).Elle affiche des alertes à l’échéance et propose des fonctions d’ajout, modification et suppression.",
                        image : "/assets/agendas.png",
                        tags : ["C#", "winforms"],
                        details: {                          
                            competencesAcquises: [
                                "Mettre en place son environnement d’apprentissage personnel",
                            ]
                        }
                        
                    },
                    {
                        titre : "Journal - Canard Connecté",
                        description : "Presentation des datacenter et leurs avenirs",
                        image : "/assets/canard.png",
                        tags : ["Actualité","commmunication"],
                    },               
                ],
                contact: {
                    mail: "mailto:miens.sio@gmail.com",
                    github: "https://github.com/AlexisMns",
                    linkedin: "https://www.linkedin.com/in/alexis-miens/",
                }
            },
        };
    },
    methods: {
        ouvrirModal(projet) {
            this.modalProjet = projet;
            document.body.style.overflow = 'hidden'; // empêche le scroll derrière la modale
        },
        fermerModal() {
            this.modalProjet = null;
            document.body.style.overflow = ''; // réactive le scroll
        }
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
