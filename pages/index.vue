<template>
    <div class="main">
        <div class="container">
            <img src="@/assets/img/pfp.gif"
                    alt="Profile Picture" class="img">
                    <!--
                    generate something similar to linktree showing just some link like youtube, twitter ect ect
                    with an icon and a little description, we need that everything is dynamic so we can add more links
                    the list of link are to be in center of the screen, something really simple and clean
                    -->
            <div class="links">
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <img src="@/assets/img/youtube.svg" alt="Youtube" class="link-img" width="50px" height="50px">
                        <div class="link-content">
                            <p class="link-title">Youtube</p>
                            <p class="link-desc">some little description</p>
                        </div>
                    </a>
                </div>
                <div class="link-card">
                    <a href="https://www.youtube.com/@MaidNenes" target="_blank">
                        <img src="@/assets/img/youtube.svg" alt="Youtube" class="link-img" width="50px" height="50px">
                        <div class="link-content">
                            <p class="link-title">Youtube</p>
                            <p class="link-desc">some little description</p>
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
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 15px;
    border: 5px solid aquamarine;
    background: linear-gradient(90deg, rgba(245, 71, 230, 0.8) 0%, rgba(177, 115, 235, 0.8) 65%);
}

.link-card > a {
    display: flex;
    align-items: center;
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