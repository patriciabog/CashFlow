<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
   <main>
      <p>{{ labelVisual }}</p>
      <h1>{{ amountCurrency }}</h1>
      <div class="graphic">
        <slot name="graphic"></slot>
      </div>
      <div class="action">
        <slot name="action"></slot>
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
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

h1,
p {
    margin-top: 5rem;
    text-align: center;
}

h1 {
    margin-top: 14px;
    color: var(--brand-green);
}

.graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 48px 24px;
    box-sizing: border-box;
}
</style>