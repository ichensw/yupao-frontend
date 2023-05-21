<template>
    <div class="card-body">
        <div class="card-message">
            <van-image
                    style="position: relative;display: block; padding: 10px; "
                    round
                    width="4rem"
                    height="4rem"
                    src="https://image-bed-ichensw.oss-cn-hangzhou.aliyuncs.com/006VVqOWgy1h4loz93bu9j30b40b4di4.jpg"
                    alt=""/>
            <div class="card-message-text">
                <div class="card-message-name">张三</div>
                <div class="card-message-content">今天有一条好消息告诉你</div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
.card-body {
    position: absolute;
    left: 0;
    top: 45px;
    width: 100%;
    background-color: #eee;
    height: 100%;
    box-sizing: border-box;
}

.card-message {
    display: flex;
    background-color: #fff;
    border-radius: 15px;
    width: 96%;
    margin: 10px auto;
}

.card-message-name {
    line-height: 3rem;
    font-weight: bold;
    font-size: 19px;
    font-family: system-ui;
}

.card-message-content {
    line-height: 1rem;
    font-size: 15px;
    color: #9b9fa5;
}
</style>
