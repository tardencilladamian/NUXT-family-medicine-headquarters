<template>
  <div class="form-group">
    <div class="control">
      <label :for="uid">
        Code: <span class="color-gold fw-bold">{{ ramdonCaptcha }}</span> <span>*</span>
      </label>
      <Cleave class="form-control" :class="isInputDirty" :id="uid" :options="cleave" :raw="false" v-model="inputValue" @input="onChange" aria-required="true" />
      <template v-if="inputDirty">
        <div class="error">
          <template v-if="inputRequired">Required</template>
        </div>
      </template>
      <template v-if="isWrongCaptcha">
        <div class="error">
          Invalid
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value', 'ramdonCaptcha', 'inputDirty', 'inputRequired', 'inputMinLength'],
  data() {
    return {
      uid: null,
      isWrongCaptcha: false,
      cleave: {
        numericOnly: true,
        blocks: [4]
      }
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.input = value
      }
    },
    isInputDirty() {
      if (this.inputDirty) {
        if (this.inputRequired) return 'input-error'
      }
      if (this.isWrongCaptcha) {
        return 'input-error'
      }
    }
  },
  methods: {
    onChange: function(e) {
      if (parseInt(this.input) === parseInt(this.ramdonCaptcha)) {
        this.isWrongCaptcha = false
      } else {
        this.isWrongCaptcha = true
      }

      if (!this.input) this.isWrongCaptcha = false

      this.$emit('input', this.input)
    }
  },
  mounted() {
    this.uid = 'captcha_uid_' + this._uid
  }
}
</script>
