// TODO : 
// -Ajouter compétences, projets, contact, etc.

const { createApp } = Vue;
// Je vais utiliser vue pour faire des boucle automatiques v-for pour les projets, compétences, etc. ça va creer les div automatiquement comme ça 
createApp({
    data() {
        return {
            portfolio: {
                nom: "Miens Alexis",
                titre: "Développeur Web",
                apropos: {            
                    description: "Passionné par le développement web," +
                        "je crée des expériences numériques innovantes et performantes." +
                        "Avec une expertise en HTML, CSS, JavaScript et Vue.js, je transforme les idées en réalité." + 
                        "Découvrez mes projets et contactez-moi pour collaborer sur votre prochain projet web.",
                },
            }
        };
    },
    mounted() {
        // Pour plus tard; gestion des scrolls smooth, animations, etc.
    }      
}).mount("#app");
