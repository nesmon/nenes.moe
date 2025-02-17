<template>
    <div class="main">
        <div class="container">
            <img src="@/assets/img/pfp.gif"
                    alt="Profile Picture" class="img">
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
    margin: 0 auto;
    border-radius: 50%;
}
</style>