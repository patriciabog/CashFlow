<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
    <header>
        <img
        @click="reload" 
        src="@/assets/cashflow-icon.svg" alt="Logo"/>
        <h1><span>Cash</span>Flow</h1>
        <span></span>
    </header>
</template>
<script>
export default {
    methods: {
        reload() {
            location.reload();
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    

}

img,
span {
    margin: 1rem;
    width: 4.8rem;
}

h1 {
    font-size: 1.4rem;
    color: var(--brand-blue);
}

h1 span {
    color: var(--brand-green);
}

@media all and (min-width: 768px) {
    img {
        font-size: 50rem;
    }
    h1 {
        font-size: 3rem;   }
}
</style>