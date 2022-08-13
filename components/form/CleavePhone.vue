<template>
    <div class="form-group">
        <label :for="tag" v-html="label" />
        <Cleave
            class="form-control"
            :class="{' is-invalid': Object.keys(error).includes(tag)}"
            :id="tag"
            v-model="val"
            :options="cleave"
            :raw="false"
            @input="$emit('input', val)"
        />
        <template v-for="(key, value) in error"><span class="invalid-feedback" v-if="value === tag">{{ key[0] }}</span></template>
    </div>
</template>
<script>
    import Cleave from 'vue-cleave-component';

    export default {
        props: ['group', 'error', 'label', 'name', 'value', 'index'],

        components: {
            Cleave
        },

        data() {
            return {
                tag: '',
                val: '',
                cleave: {
                    numericOnly: true,
                    blocks: [0, 3, 3, 4],
                    delimiters: ["(", ") ", "-"]
                },
            }
        },
        created() {
            this.val = (this.value) ?? this.value;

            if (this.group || this.index) {
                this.tag = this.group + '.' + [this.index] + '.' + this.name;
            }
            else {
                this.tag = this.name;
            }
        }
    }
</script>
