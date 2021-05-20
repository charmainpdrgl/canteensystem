<template>
  <div class="container">
    <div>
        <p>{{ msg }}</p>
        <div class="dropdown">
            <button class="dropbtn">SWEET</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">SAVOURY</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">DRINKS</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">SNACKS</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/styles.css">
  /* @import "/assets/styles.css"; */
</style>