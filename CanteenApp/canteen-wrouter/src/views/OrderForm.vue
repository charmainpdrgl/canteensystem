<template>
<div class="container vue">
    <div v-for="(group,name) in groups" v-bind:key="name">
        <a class="groups" @click="group.open = !group.open" v-text="name"></a>
        <ul class="orderformlist" v-show="group.open">
            <li class="fooditems" v-for="item in group.items" v-text="item" v-bind:key="item"></li>
        </ul>
    </div>
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
                        "Choc Chip Muffin",
                        "Chocolate Chip Cookie"
                    ]
                },
                "SAVOURY": {
                    "name": "SAVOURY",
                    "open": false,
                    "items": [
                        "Sandwich (Chicken/Egg/Ham/Tuna)",
                        "Wrap (Chicken/Egg/Ham/Tuna)",
                        "Hot Dog",
                        "Sausage Roll",
                        "item 5",
                        "item 6",
                        "item 7"
                    ]
                },
                "DRINKS": {
                    "name": "DRINKS",
                    "open": false,
                    "items": [
                        "Juice (Apple/Orange)",
                        "item 2",
                        "item 3",
                        "item 4",
                        "item 5"
                    ]
                },
                "SNACKS": {
                    "name": "SNACKS",
                    "open": false,
                    "items": [
                        "item 1",
                        "item 2",
                        "item 3",
                        "item 4",
                        "item 5",
                        "item 6",
                        "item 7"
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
