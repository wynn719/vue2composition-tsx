import { defineComponent } from '@vue/composition-api';
import Tsx from './components/tsx';
import './App.css';

export default defineComponent({
  name: 'App',
  setup() {
    return () => <Tsx foo="test" bar={false}></Tsx>
  }
})
