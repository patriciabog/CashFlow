<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable -->
<template>
   <button @click="showModal = true">Add transaction</button>
   <teleport to='#app'>
    <Modal v-show="showModal" @close="showModal = false">
         <form @submit.prevent="submit">
            <div class="field">
                <label for="">Title</label>
                <input type="text" v-model="title"/>
            </div>
            <div class="field">
                <label for="">Amount</label>
                <input type="number" v-model="amount"/>
            </div>
            <div class="field">
                <label for="">Description</label>
                <textarea rows="4" v-modal="description"></textarea>
            </div>
            <div class="field">
                <label class="radio-label">
                    <input type="radio" v-model="movementType" value="Income"/>
                    <span>Income</span>
                </label>
                <label class="radio-label">
                    <input type="radio" v-model="movementType" value="Expense"/>
                    <span>Expense</span>
                </label>  
            </div>
            <div>
                <button class="action">Add transaction</button>
            </div>
         </form>
    </Modal>
   </teleport>
</template>

<script setup>
//setup is to use the composition API
import { ref } from "vue";
import Modal from "./Modal.vue";

const showModal = ref(false);
const title = ref("");
const amount = ref(0);
const description = ref("");
const movementType = ref("Income");

const emit= defineEmits(["create"]);

const submit = () => {
    showModal.value = !showModal.value;
    emit("create", {
        title:title.value,
        description: description.value,
        amount: movementType.value === "Income" ? amount.value : -amount.value,
        time:new Date(),
        id: new Date(),
    });
    title.value = "";
    description.value = "";
    amount.value = 0;
    movementType.value = "Income";
};
 
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
button {
    color: white;
    font-size: 1.25rem;
    background-color: #FF7A00;
    border: none;
    width: 20rem;
    height: 5rem;
    padding: 24px 60px;
    border-radius: 60px;
    margin-bottom: 8rem;
    cursor: pointer;
}

form {
    font-size: 1.24rem;
    width: 100%;  
}

form .action {
    padding: 0 24px;
}

.field {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px 24px;
}

label {
    margin-bottom: 8px;
}

input,
textarea {
    font-size: 1.24rem;
    border: 2px solid var(--brand-blue);
    border-radius: 8px;
    padding: 8px;
}

input[type="number"] {
    text-align: right;
}

.radio-label {
    display: flex;
    align-items: center;
    margin-top: 8px;
}

.radio-label span {
    margin-top: 4px;
    margin-left: 8px;
}

input[type="radio"] {
    appearance: none;
    width: 1.24rem;
    height: 1.24rem;
    color: var(--brand-blue);
    border: 2px solid var(--brand-blue);
    border-radius: 50%;
}

input[type="radio"]:checked {
    background-color: var(--brand-blue);
}
@media all and (min-width: 768px) {
    button {
        width: 25rem;
        height: 6rem;
        font-size: 2rem;
       
    }
}
@media all and (min-width: 1200px) {
     button {
       width: 18rem;
       height: 5rem;
       font-size: 1.5rem;
        
    }
}
</style>