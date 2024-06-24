<script setup>
import { Loader2 } from "lucide-vue-next";
import { computed } from "vue";
import { cva } from "class-variance-authority";

const emits = defineEmits(
  ['click']
);
function handleClick() {
  emits('click');
}

const props = defineProps({
  prefixicon: Object,
  suffixicon: Object,
  loading: Boolean,
  disabled: Boolean,
  rounded: Boolean,
  as: {
    type: [String, Object],
    default: 'button'
  },
  intent: {
    type: String,
    validator: (val) => ["primary", "secondary","outline", "danger", "ghost", "text", "texthover"].includes(val),
    default: "primary"
  },
  size:{
    type: String,
    validator:(val) => ["large", "base", "small"].includes(val),
    default: "base"
  }

});

const buttonClass = computed(() => {
  return cva(
    " inline-flex items-center rounded-lg text-center justify-center font-medium ",
    {
      variants: {
        intent: {
          primary:
            "bg-primary text-primaryforeground hover:bg-primary/90",
          secondary:
            "bg-secondary text-secondaryforeground hover:bg-secondary/80",
            outline:
            "border border-input bg-background text-foreground hover:bg-accent hover:text-foreground",
          danger:
            'bg-destructive text-destructiveforeground hover:bg-destructive/90',
          ghost:
            "text-primary hover:bg-accent hover:text-accent-foreground",
          text:
            "text-primary underline-offset-4 hover:underline",
            texthover:
            "text-text-foreground hover:bg-secondary hover:ring ring-border hover:ring-1",
        },
        size: {
          large:"px-6 py-3 text-lg",
          base: "px-5 py-3 text-base",
          small: "px-4 py-2 text-sm"
        },
        disabled: {
          true: "!bg-accent/30 !text-foreground/40 cursor-not-allowed"
        },
        rounded: {
          true: "!rounded-full"
        },
      }
    })({
      intent: props.intent,
      size:props.size,
      disabled: props.disabled,
      rounded: props.rounded
    })
})
</script>

<template>
  <component :is="props.as" :disabled="props.disabled" :class="buttonClass"  @click="handleClick" >
    <Loader2 v-if="props.loading" class="w-4 h-4 mr-2 animate-spin absolute" />
    <component :is="prefixicon" :class="['w-5 h-5 mr-1.5', props.loading && 'invisible']" />
    <span :class="[props.loading && 'invisible']">
      <slot>Button</slot>
    </span>
    <component :is="suffixicon" :class="['w-5 h-5 ml-1.5', props.loading && 'invisible']" />
  </component>
</template>

<style scoped></style>
