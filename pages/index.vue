<template>
    <div class="main">
        <div class="container">
            <img src="@/assets/img/pfp.gif"
                    alt="Profile Picture" class="img">
            <div class="links">
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <div class="link-img">
                            <img src="@/assets/img/youtube.svg" alt="Youtube" width="50px" height="50px">
                        </div>
                        <div class="link-content">
                            <p class="link-title">Youtube</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <div class="link-img">
                            <img src="@/assets/img/youtube.svg" alt="Youtube" width="50px" height="50px">
                        </div>
                        <div class="link-content">
                            <p class="link-title">Youtube</p>
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
    margin: 0 auto;
}

.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.link-card {
    display: flex;
    align-items: center;
    margin: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 0px;
    border-radius: 15px;
    border: 2px solid aquamarine;
    background: linear-gradient(90deg, rgba(245, 71, 230, 0.8) 0%, rgba(177, 115, 235, 0.8) 65%);
}

.link-card > a {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: wrap;
    text-decoration: none;
    color: black;
}

.link-img {
    margin: 0 auto;
}

.link-title {
    text-align: center;
}

.link-desc {
    text-align: center;
}
</style>