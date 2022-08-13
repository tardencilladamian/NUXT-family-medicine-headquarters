<template>
  <div class="form-group">
    <div class="control">
      <label :for="uid">{{ inputLabel }} <span v-if="required">*</span></label>
      <input
        type="text"
        class="form-control"
        :class="isInputDirty"
        :id="uid"
        v-model="inputValue"
        @input="onChange"
        aria-required="true"
      />
      <template v-if="inputDirty">
        <div class="error">
          <template v-if="inputRequired">Required</template>
          <template v-if="inputMinLength"
            >{{ inputLabel }} must have at least {{ inputMinLengthNumber }} letters</template
          >
          <template v-if="inputEmail">Email is invalid</template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'value',
    'inputTag',
    'inputLabel',
    'inputDirty',
    'inputRequired',
    'inputMinLength',
    'inputMinLengthNumber',
    'inputEmail',
    'required'
  ],
  data() {
    return {
      uid: null
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
        if (this.inputRequired || this.inputMinLength || this.inputEmail) return 'input-error'
      }
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit('input', this.input)
    }
  },
  mounted() {
    this.uid = this.inputTag + '_uid_' + this._uid
  }
}
</script>
