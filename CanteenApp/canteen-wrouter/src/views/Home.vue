<template>
  <div class="container">
    <div>
        <p>{{ msg }}</p>
        <div class="hero">
            <div class="row">
                <div class="col align-self-center">
                    <img src="/img/slogan.png" class="hero-image img-fluid" alt="St Hilda's Canteen hero image">
                </div>
            </div>
        </div>
        <br>
        <div class="grid-container-two">
            <div class="grid-item">
                <button class="homebuttons">TOP UP</button>
            </div>
            <div class="grid-item">
                <button class="homebuttons">ORDER</button>
            </div>
        </div>
        <br>
        <div>
            <h2>Pre-order and pay for your canteen food online so you can enjoy your break times with friends!</h2>
        </div>
        <br>
        <div class="grid-container-three">
            <div class="grid-item">
                <img src="/img/phone.png" alt="You Order" class="homeimages">
                <br>
                <h3>YOU ORDER</h3>
            </div>
            <div class="grid-item">
                <img src="/img/shopping-bag.png" alt="We Prepare" class="homeimages">
                <br>
                <h3>WE PREPARE</h3>
            </div>
            <div class="grid-item">
                <img src="/img/cutlery.png" alt="You Enjoy" class="homeimages">
                <br>
                <h3>YOU ENJOY</h3>
            </div>
        </div>
        <p>Include footer here</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped src="../assets/style.css">
</style>