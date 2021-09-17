import { defineComponent, ref } from "@vue/composition-api";
import { InputNumber } from 'element-ui';

export default defineComponent({
  name: 'tsx-component',
  props: {
    min: {
      type: Number,
      default: 0,
    },
    controlsPosition: {
      type: String,
      default: 'right',
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const crtValue = ref(0);
    const updateValue = (val: number) => {
      crtValue.value = val;
    }
    const onChange = (val: number) => {
      crtValue.value = val;
    }

    return () => 
      <InputNumber
        value={crtValue.value}
        onInput={updateValue}
        onChange={onChange}
      ></InputNumber>
  }
})