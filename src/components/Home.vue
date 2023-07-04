<!-- eslint-disable vue/multi-word-component-names -->
 <!--eslint-disable-->
<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
           <Resume 
           :total-label="'Total Saving'"
           :label ="label"
           :total-amount=1000000
           :amount="amount">
          <template #graphic>
             <Graphic></Graphic>
          </template>
         <template #action>
             <Action></Action>
         </template>
          </Resume>
           
        
        </template>
        <template #movements>
          <Movements 
          :movements="movements"
          ></Movements>
        </template>
    </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/Index.vue";
import Action from "./Action.vue";
import Movements from "./Movements/Index.vue";
import Graphic from "./Resume/Graphic.vue"

export default {
  components: {
    Layout,
    Header,
    Resume,
    Action,
    Movements,
    Graphic,
  },
  data() {
    return {
      label: null,
      amount: null,
      movements: [{
        id: 0,
        title: "Movement 1",
        description: "Lorem ipsum sit amed",
        amount: 1000,
      },{
        id: 1,
        title: "Movement 2",
        description: "Lorem ipsum sit amed",
        amount: -1000,
      },{
        id: 2,
        title: "Movement 3",
        description: "Lorem ipsum sit amed",
        amount: 1000,
      },{
        id: 3,
        title: "Movement 4",
        description: "Lorem ipsum sit amed",
        amount: -1000,
      }]
    }
  },
};
</script>