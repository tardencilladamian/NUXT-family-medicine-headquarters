<template>
    <div class="form-group">
        <div class="control">
            <label :for="tag" v-html="label"/>
            <input
                type="text"
                :id="tag"
                :class="{' is-invalid': Object.keys(error).includes(tag)}"
                class="form-control"
                v-model="val"
                @input="$emit('input', val)"
            />
            <template v-for="(key, value) in error"><span class="invalid-feedback" v-if="value === tag">{{ key[0] }}</span></template>
        </div>
    </div>
</template>
<script>
    export default {
        name: "InputText",
        props: ['name', 'label', 'value', 'index', 'group', 'error'],
        data() {
            return {
                tag: '',
                val: '',
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
