<script setup>
import Account from 'vue-material-design-icons/Account.vue';
import Home from 'vue-material-design-icons/Home.vue'
import Star from 'vue-material-design-icons/Star.vue'

</script>

<template>
    <footer>
        <div class="blocosFooter">
            <Account size="50" />
        </div>
        <div class="blocosFooter">
            <Home size="50" />
        </div>
        <div class="blocosFooter">
            <Star size="50"/>
        </div>
    </footer>
</template>

<style scoped>
footer{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0%;
}

.blocosFooter{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vh;
    height: 10vh;
    border: 3px solid black;
    padding: 0%;
}

</style>