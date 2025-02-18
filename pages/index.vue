<template>
    <div class="main">
        <div class="container">
            <img src="@/assets/img/pfp.gif" alt="Profile Picture" class="img">
            <div class="links">
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <div class="link-img">
                            <Icon name="logos:youtube-icon" size="30" />
                        </div>
                        <div class="link-separator"></div>
                        <div class="link-content">
                            <p class="link-title">Youtube</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.instagram.com/maidnenes/" target="_blank">
                        <div class="link-img">
                            <Icon name="skill-icons:instagram" size="30" />
                        </div>
                        <div class="link-separator"></div>
                        <div class="link-content">
                            <p class="link-title">Instagram</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.x.com/MaidNenes/" target="_blank">
                        <div class="link-img">
                            <Icon name="fa6-brands:x-twitter" size="30" />
                        </div>
                        <div class="link-separator"></div>
                        <div class="link-content">
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
    margin: 0 45px;
}

.link-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem; 
    border-radius: 15px;
    border: 2px solid aquamarine;
    background: linear-gradient(90deg, rgba(245, 71, 230, 0.8) 0%, rgba(177, 115, 235, 0.8) 65%);
    padding: 5px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.link-card a {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-decoration: none;
    color: black;
}

.link-img {
    margin-left: 10px;
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
    width: 3px; 
    height: 45px;
    background-color: rgb(248, 188, 97); 
}

.link-card:hover {
    transform: scale(1.1); 
}

.links:hover .link-card {
    transform: scale(0.9);
    opacity: 0.7;
}

.links:hover .link-card:hover {
    transform: scale(1.1);
    opacity: 1;
}
</style>