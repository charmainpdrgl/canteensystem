<template>
<div class="container vue">
    <form class="menu-form" @submit.prevent="handleSubmit">
        <!-- <div v-for="(group,name) in groups" v-bind:key="name">
        <a class="groups" @click="group.open = !group.open" v-text="name"></a>
        <ul class="orderformlist" v-show="group.open">
            <li class="fooditems" v-for="item in group.items" v-text="item" v-bind:key="item"></li>
        </ul>
        </div>
        <br>
        <br> -->
        <div v-for="(group,name) in groups" v-bind:key="name">
        <a class="groups" @click="group.open = !group.open" v-text="name"></a>
        <li class="orderformlist" v-show="group.open">
            <label class="fooditems" v-for="item in group.items" v-bind:key="item" :for="item">{{ item }}
            <input type="checkbox" :value="item" :for="item" />
            </label>
        </li>
        <hr>
        </div>
        <br>
        <br>
        <br>
        <button class="homebuttons">Place Order Now</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'OrderForm',
    data() {
        return {
            groups : {
                "SWEET": {
                    "name": "SWEET",
                    "open": false,
                    "items": [
                        "Choc Chip Muffin - $2.50",
                        "Chocolate Chip Cookie - $2.50",
                        "Caramel Slice - $2.50",
                        "Lollies - $2.50",
                        "Chocolate Bars - $2.50"
                    ]
                },
                "SAVOURY": {
                    "name": "SAVOURY",
                    "open": false,
                    "items": [
                        "Sandwich (Chicken/Egg/Ham/Tuna) - $2.50",
                        "Wrap (Chicken/Egg/Ham/Tuna) - $2.50",
                        "Hot Dog - $2.50",
                        "Sausage Roll - $2.50",
                        "Chicken Nuggets - $2.50",
                        "Hot Chips - $2.50",
                        "Pies - $2.50"
                    ]
                },
                "DRINKS": {
                    "name": "DRINKS",
                    "open": false,
                    "items": [
                        "Juice (Apple/Orange) - $2.50",
                        "Pump Water - $2.50",
                        "Gatorade - $2.50",
                        "Flavoured Milk - $2.50",
                        "Lemonade - $2.50"
                    ]
                },
                "SNACKS": {
                    "name": "SNACKS",
                    "open": false,
                    "items": [
                        "Fruit (Apple/Banana) - $2.50",
                        "Yoghurt - $2.50",
                        "Chips - $2.50",
                        "Energy Bars - $2.50"
                    ]
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* @import "/assets/styles.css"; */
</style>
