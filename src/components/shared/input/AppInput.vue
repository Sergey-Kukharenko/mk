<script setup>
import { computed } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import { useIMask } from 'vue-imask';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },

  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'email'].includes(value);
    }
  },

  phone: {
    type: Boolean,
    default: false
  },

  placeholder: {
    type: String,
    default: null
  },

  disabled: {
    type: Boolean,
    default: false
  },

  grow: {
    type: Boolean,
    default: false
  },

  appearance: {
    type: String,
    default: 'grey',
    validator(value) {
      return ['grey', 'white'].includes(value);
    }
  },

  cls: {
    type: String,
    default: null
  },

  errors: {
    type: Array,
    default: () => []
  },

  icon: {
    type: String,
    default: null
  },

  alignIcon: {
    type: String,
    default: null,
    validator(value) {
      return ['start'].includes(value);
    }
  }
});

defineEmits(['update:modelValue']);

const classNames = computed(() => ({
  'app-input': true,
  [`app-input--disabled`]: props.disabled,
  [`app-input--grow`]: props.grow,
  [`app-input--${props.appearance}`]: props.appearance,
  [`app-input--${props.cls}`]: props.cls,
  [`app-input--error`]: props.errors.length,
  [`app-input--align-icon-${props.alignIcon}`]: props.alignIcon
}));

let maskRef;

if (props.phone) {
  const res = useIMask({
    mask: '{+7 (900)} 000-00-00'
    // lazy: false
  });

  maskRef = res.el;
}
</script>

<template>
  <div :class="classNames">
    <label>
      <input
        ref="maskRef"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="[$emit('update:modelValue', $event.target.value)]"
      />
      <app-icon v-if="icon" :name="icon" />
    </label>
    <div v-for="error of errors" :key="error.$uid" class="errors">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AppInput.scss" />
