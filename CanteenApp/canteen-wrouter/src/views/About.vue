<template>
  <div class="container">
    <div class="row ">
      <div class="col ">
      
      </div>
      <div class="col-9 title bg-white">
        <h2>Create your canteen account</h2>
      </div>
      <div class="col">
      
      </div>
    </div>
    <div class="row form-panel">
      <div class="col">
      
      </div>
      <div class="col-8 text-left bg-white">
        <form>
          <div class="container form-group">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Fist Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Joe"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
            <label for="exampleFormControlInput1" class="form-label"
              >School E-mail</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="container form-panel">
            <div class="row">
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >Student ID</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="17021"
                />
              </div>
              <div class="col"></div>
            </div>
          </div>
          <div class="container form-panel">
            <div class="row">
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="******"
                />
              </div>
              <div class="col last-input">
                <label for="exampleFormControlInput1" class="form-label"
                  >School E-mail</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="******"
                />
              </div>
            </div>
            
          </div>
        </form>
      </div>
      <div class="col">
       
      </div>
      <p>:(</p>
    </div>
     <div class="row">
      <div class="col">
      
      </div>
      <div class="col-7">
        <button class="create-button">CREATE ACCOUNT</button>
      </div>
      <div class="col">
      
      </div>
    </div>
  </div>
</template>

<style scoped>

form {
  box-sizing: border-box;
}
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
  font-family: sans-serif;
}
label {
  color: #34abd6;
}
input {
  border: 2px solid #34abd6;
  background: #F0F1F0;
}
.create-button{
  border: 2px solid #34abd6;
  font-size: 16px
}
.last-input{
  margin-bottom: 20px;
}

</style>
