<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div
        class="alert alert-success mb-4"
        role="alert"
        v-if="this.messageStatus"
      >
        Your message has been sent successfully.
      </div>

      <div
        class="alert alert-danger mb-4"
        role="alert"
        v-if="this.messageStatus"
      >
        Your message was unable to send. Try again.
      </div>

      <div class="col-12 mb-2">
        <InputText
          v-model.trim="$v.form.name.$model"
          inputTag="name"
          inputLabel="Name"
          :inputDirty="this.$v.form.name.$dirty"
          :inputRequired="!$v.form.name.required"
          :inputMinLength="!$v.form.name.minLength"
          :inputMinLengthNumber="4"
          required="1"
        />
      </div>
      <div class="col-md-6 mb-2">
        <InputText
          v-model.trim="$v.form.email.$model"
          inputTag="email"
          inputLabel="Email"
          :inputDirty="this.$v.form.email.$dirty"
          :inputRequired="!$v.form.email.required"
          :inputEmail="!$v.form.email.email"
          required="1"
        />
      </div>
      <div class="col-md-6 mb-2">
        <CleavePhone
          v-model.trim="$v.form.phone.$model"
          inputTag="phone"
          inputLabel="Phone"
          :inputDirty="this.$v.form.phone.$dirty"
          :inputRequired="!$v.form.phone.required"
          :inputMinLength="!$v.form.phone.minLength"
          :inputMinLengthNumber="14"
          required="1"
        />
      </div>
      <div class="col-12 mb-2">
        <InputTextarea
          v-model.trim="$v.form.message.$model"
          inputTag="message"
          inputLabel="Message"
          :inputDirty="this.$v.form.message.$dirty"
          :inputRequired="!$v.form.message.required"
          :inputMinLength="!$v.form.message.minLength"
          :inputMinLengthNumber="20"
          required="1"
        />
      </div>
      <div class="col-12">
        <div class="row align-items-end">
          <div class="col-6">
            <Captcha
              v-model.trim="$v.form.captcha.$model"
              :inputDirty="this.$v.form.captcha.$dirty"
              :inputRequired="!$v.form.captcha.required"
              :inputMinLength="!$v.form.captcha.minLength"
              :inputMinLengthNumber="4"
              :ramdonCaptcha="ramdonCaptcha"
            />
          </div>
          <div class="col-12">
            <template v-if="spinner">
              <Spinner type="primary" :isFullWidth="true" />
            </template>
            <template v-else>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

import InputText from "./fields/InputText";
import CleavePhone from "./fields/CleavePhone";
import InputTextarea from "./fields/InputTextarea";
import Captcha from "./fields/Captcha";
import Spinner from "./fields/Spinner";
import makeCaptcha from "./helpers/makeCaptcha";

export default {
  mixins: [validationMixin],
  components: {
    InputText,
    CleavePhone,
    InputTextarea,
    Captcha,
    Spinner,
  },
  data() {
    return {
      ramdonCaptcha: "",
      spinner: false,
      form: {
        key: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        captcha: "",
        ip: "127.0.0.1",
      },
      messageStatus: false,
      messageErrorStatus: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        minLength: minLength(14),
      },
      message: {
        required,
        minLength: minLength(20),
      },
      captcha: {
        required,
      },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else if (parseInt(this.form.captcha) !== parseInt(this.ramdonCaptcha)) {
        this.submitStatus = "ERROR";
      } else {
        this.spinner = true;
        this.form.login_key =
          "b559ebf1dc3a644e05ac2aa0azb2091bd2531cc5d8486e3112d199ceb6cm";
        this.form.user_key = "870637a5-fd85-4d8c-a9a4-83ecf50c8ae6";
        this.form.endpoint = "contact";
        this.form.ip = "127.0.0.1";

        await this.$axios
          .$post("https://api-emails.isning.com/api/v1/form", this.form)
          .then((resp) => {
            setTimeout(() => {
              this.form = {
                name: "",
                email: "",
                phone: "",
                message: "",
                captcha: "",
              };
              setTimeout(() => {
                this.$v.$reset();
              }, 0);
              this.ramdonCaptcha = makeCaptcha();
              this.spinner = false;
              this.messageBox();
            }, 500);
          })
          .catch((e) => {
            setTimeout(() => {
              this.messageBoxError();
              this.spinner = false;
            }, 500);
          });
      }
    },

    messageBox() {
      this.messageStatus = true;
      setTimeout(() => {
        this.messageStatus = false;
      }, 4000);
    },

    messageBoxError() {
      this.messageErrorStatus = true;
      setTimeout(() => {
        this.messageErrorStatus = false;
      }, 4000);
    },
  },
  mounted() {
    this.ramdonCaptcha = makeCaptcha();
  },
};
</script>
