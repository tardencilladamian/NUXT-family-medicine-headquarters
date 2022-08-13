<template>
  <div class="slider">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <div class="sliderd">
            <video class="video" autoPlay loop muted>
              <source
                src="https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/assets/slider.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div class="text text-center">
            <h1 class="mb-2">
              <strong>Family Medical Headquarters</strong>
            </h1>
            <h3 class="mb-4 max-w">
              For friendly professional service for patients 0 to 100, choose
              Family Medicine Headquarters (La Clinica Central) as your primary
              care physician group.
            </h3>
            <div>
              <nuxt-link to="/contact-us" class="btn btn-primary"
                >Make an Appointment</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
