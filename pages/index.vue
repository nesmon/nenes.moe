<template>
    <div class="main">
        <div class="container">
            <img src="@/assets/img/pfp.gif" alt="Profile Picture" class="img">
            <div class="links">
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <div class="link-img">
                            <img src="@/assets/img/youtube.svg" alt="Youtube">
                        </div>
                        <div class="vertical-line"></div>
                        <div class="link-separator">
                            <p class="link-title">Youtube</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.instagram.com/maidnenes/" target="_blank">
                        <div class="link-img">
                            <img src="@/assets/img/instagram.svg" alt="Instagram">
                        </div>
                        <div class="vertical-line"></div>
                        <div class="link-separator">
                            <p class="link-title">Instagram</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.x.com/MaidNenes/" target="_blank">
                        <div class="link-img">
                            <img src="@/assets/img/twitter.svg" alt="Twitter">
                        </div>
                        <div class="vertical-line"></div>
                        <div class="link-separator">
                            <p class="link-title">Twitter</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.main {
    font-family: Arial, sans-serif;
    padding: 15px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
}

.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.link-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%; 
    min-height: 60px;
    border-radius: 15px;
    border: 2px solid aquamarine;
    background: linear-gradient(90deg, rgba(245, 71, 230, 0.8) 0%, rgba(177, 115, 235, 0.8) 65%);
    padding: 5px;
    transition: transform 0.3s ease, opacity 0.3s ease; /* Animation fluide */
}

.link-card a {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-decoration: none;
    color: black;
}

.link-img img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
}

.link-content {
    display: flex;
    justify-content: center;
    width: 100%;
}

.link-title {
    text-align: center;
    font-weight: bold;
}

.link-separator {
    width: 3px; /* Épaisseur de la ligne */
    height: 45px; /* Hauteur de la ligne */
    background-color: rgb(248, 188, 97); /* Couleur de la ligne */
}

/* Effet au survol */
.link-card:hover {
    transform: scale(1.1); /* Agrandir la carte survolée */
}

/* Réduire les autres cartes */
.links:hover .link-card {
    transform: scale(0.9);
    opacity: 0.7;
}

/* Réinitialiser l'effet sur la carte survolée */
.links:hover .link-card:hover {
    transform: scale(1.1);
    opacity: 1;
}
</style>