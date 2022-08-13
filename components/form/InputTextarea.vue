<template>
    <div class="form-group">
        <div class="control" :class="custom_class">
            <label :for="tag" v-html="label"/>
            <textarea
                rows="4"
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
        props: ['error', 'label', 'name', 'value', 'index', 'group', 'custom_class'],
        created() {
            this.val = (this.value) ?? this.value;

            if (this.group || this.index) {
                this.tag = this.group + '.' + [this.index] + '.' + this.name;
            }
            else {
                this.tag = this.name;
            }
        },
        data() {
            return {
                tag: '',
                val: '',
            }
        }
    }
</script>
