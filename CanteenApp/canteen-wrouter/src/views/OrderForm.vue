<template>
  <div class="container">
    <!-- <div class="rowcontainer">
        <p>{{ msg }}</p>
        <div class="dropdown">
            <button class="dropbtn">SWEET</button>
            <div class="dropdown-content">
                <br>
                <p>item</p>
            </div>
        </div>
        <div class="grid-item dropdown">
            <button class="dropbtn">SAVOURY</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
        <div class="grid-item dropdown">
            <button class="dropbtn">DRINKS</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
        <div class="grid-item dropdown">
            <button class="dropbtn">SNACKS</button>
            <div class="dropdown-content">
                <p>item</p>
            </div>
        </div>
    </div> -->
    <button class="accordion">Sweet</button>
    <div class="panel">
    <p>Lorem ipsum...</p>
    </div>

    <button class="accordion">Savoury</button>
    <div class="panel">
    <p>Lorem ipsum...</p>
    </div>

    <button class="accordion">Drinks</button>
    <div class="panel">
    <p>Lorem ipsum...</p>
    </div>

    <button class="accordion">Snacks</button>
    <div class="panel">
    <p>Lorem ipsum...</p>
    </div>
  </div> 
</template>

<script scoped src="../assets/accordion.js">
export default {
  name: 'OrderForm',
  data() {
      return {
          text: `item`
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/styles.css">
  /* @import "/assets/styles.css"; */
</style>