<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
    <div class="splashscreen">
    <img src="@/assets/cashflow.png" alt="Logo">    
    <h1><span>Cash</span>Flow</h1>
    </div>

</template>


<style scoped>
.splashscreen {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

}
img {
    width: 20rem;
}
h1 {
    color: var(--brand-blue);
}

h1 span {
    color: var(--brand-green);
}
</style>