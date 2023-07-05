<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
   <main>
      <p>{{ labelVisual }}</p>
      <h1>{{ amountCurrency }}</h1>
      <div class="box">
        <div class="graphic">
            <slot name="graphic"></slot>
        </div>
        <div class="action">
            <slot name="action"></slot>
        </div>
        </div> 
    </main>
</template>

<script>
//this funtion use to formatter number and currency
const currencyFormatter = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
});


export default {
    props: {
        totalLabel: {
            type: String,
        },
        label: {
            type: String,
            default: null,
        },
        totalAmount: {
            type: Number,
        },
         amount: {
            type: Number,
            default: null,
        },

    },
    computed: {
        labelVisual() {
            return this.label !== null ? this.label : this.totalLabel;
        },
        amountVisual() {
            return this.amount !== null ? this.amount : this.totalAmount;
        },
        amountCurrency() {
           return currencyFormatter.format(this.amountVisual);
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #0C134F;
    overflow: scroll;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1,
p {
    margin-top: 8rem;
    text-align: center;
    color: white;
}

h1 {
    margin-top: 5px;
    color: var(--brand-green);
}

.graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
}
@media all and (min-width: 768px) {
    .box {
    margin-bottom: 8rem;
  
}
  
 h1,
p {
    margin-top: 25rem;
    font-size: 2rem;
}

h1 {
    margin-top: 1rem;
    color: var(--brand-green);
    font-size: 3rem;
}
}
@media all and (min-width: 1200px) {
    .box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-size: contain;
        background-position: center;
    }

    .graphic {
     height: 27rem;
     margin: 1rem;
     width: 50%;
    }
    
    
   
   
}
</style>