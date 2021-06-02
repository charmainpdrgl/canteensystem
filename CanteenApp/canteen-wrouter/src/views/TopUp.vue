<template>
  <!-- npm install vue-slider-component for slider -->
  <div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8 justify-content-center">
          <header>
            <h2 class="self-align-center">Top Up</h2>
            </header>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
          <form>
            <div class="mb-3">
              <div class="row">
                <div class="col-6">
                  <label for="exampleInputName" class="form-label"
                    >First Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                  />
                </div>
                <div class="col-6">
                  <label for="exampleInputName" class="form-label"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName"
                  />
                </div>
              </div>
              <label for="exampleInputName" class="form-label"
                >Student E-mail</label
              >
              <input type="text" class="form-control" id="exampleInputName" />
            </div>
            <br />
            <vue-slider :value="'' + value" @change="(val) => (value = +val)" />
            <div class="text-value-slide">Selected Amount:${{ value }}</div>
            <div classs="container">
              <div class="row">
                <div class="col-6">
                  <button class="checkout-button align-content-right">POLI</button>
                </div>
                <div class="col-6">
                  <button class="checkout-button align-content-left">CREDIT</button>
                </div>
            </div>
            </div>
            <button class="top-up-button">PROCESS TOP UP</button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
.title {
  padding: 20px;
}
.form-panel {
  margin-top: 20px;
}
.form-label {
  font-size: 1.4em !important;
}
h2 {
  text-align: center;
}
label {
  color: #34abd6;
}
input {
  border: 2px solid #34abd6;
  background: #f0f1f0;
}
.top-up-button {
  border: 2px solid #34abd6;
  font-size: 16px;
  margin-top:20px;
  color: #34abd6;
}
.last-input {
  margin-bottom: 20px;
}
.text-value-slide {
  color: #34abd6;
  font-weight: 700;
}
.checkout-button {
  border: none;
  color: white;
  padding: 15px 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #34abd6;
}


</style>
