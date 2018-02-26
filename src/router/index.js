import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import DemoOne from "@/components/DemoOne.vue";
import DemoTwo from "@/components/DemoTwo.vue";
import DemoThree from "@/components/DemoThree.vue";
import DemoFour from "@/components/DemoFour.vue";
import DemoFive from "@/components/DemoFive.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/demo-1",
      name: "DemoOne",
      component: DemoOne
    },
    {
      path: "/demo-2",
      name: "DemoTwo",
      component: DemoTwo
    },
    {
      path: "/demo-3",
      name: "DemoThree",
      component: DemoThree
    },
    {
      path: "/demo-4",
      name: "DemoFour",
      component: DemoFour
    },
    {
      path: "/demo-5",
      name: "DemoFive",
      component: DemoFive
    }
  ]
});
