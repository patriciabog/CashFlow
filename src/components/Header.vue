<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
    <header>
        <img
        @click="reload" 
        src="@/assets/cashflow.png" alt="Logo"/>
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    margin-top: 5rem;
    background-color: #0A043C;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

img,
span {
    width: 4rem;
    font-size: 2rem;
    cursor: pointer;
}

h1 {
    font-size: 2rem;
    color: var(--brand-blue);
}

h1 span {
    color: #FF7A00;
}

@media all and (min-width: 768px) {
    header {
        margin-top: 7rem;
        margin-left: 2rem;
    }
   img,
   span {
        width: 5rem;
     
    }
    h1 {
        font-size: 4rem;   
    }
    
h1 span {
    font-size: 4rem;
}
}
</style>