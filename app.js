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
                },
                compétences: [
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
        // Pour plus tard; gestion des scrolls smooth, animations, etc.
    }      
}).mount("#app");
