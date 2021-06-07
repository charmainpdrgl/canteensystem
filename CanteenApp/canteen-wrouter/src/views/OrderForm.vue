<template>
<div class="container vue">
    <div>
        <select class="menu-filter" v-model="selected">
            <option disabled value="Filter">Filter</option>
            <option>Vegetarian</option>
            <option>Gluten - Free</option>
            <option>Dairy - Free</option>
            <option>All</option>
        </select>
        <ul>
            <li v-for="item in filteredMenu" v-bind:key="item">{{ filter }} hello</li>
        </ul>
    </div>
    <form class="menu-form" @submit.prevent="handleSubmit">
        <hr>
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
            filter : {
                "Vegetarian": [
                    "item1"
                ],
                "Gluten-free": [
                    "item1"
                ],
                "Dair-free": [
                    "item1"
                ]
            },
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
    },
    computed: {
        filteredMenu: function() {
            var vm = this;
            var category = vm.selected;
            if(category === "Vegetarian") {
                return vm.filter.Vegetarian;
            }
            // if(category === "Gluten-free") {
            //     return vm.filter.Gluten-free.items;
            // }
            // if(category === "Vegetarian") {
            //     return vm.filter.Dairy-free.items;
            // }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* @import "/assets/styles.css"; */
</style>
