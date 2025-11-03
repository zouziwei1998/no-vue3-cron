<template>
  <div id="app-container">
    <h1>Cron Compatible Component Debugger</h1>
    <p>Current Cron Value: <strong>{{ cronValue }}</strong></p>
    <hr />
    <div class="component-wrapper">
      <cron-compatible
        :cronValue="cronValue"
        @change="handleCronChange"
        i18n="cn"
        maxHeight="300px"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CronCompatible from '../index.vue';

export default defineComponent({
  name: 'App',
  components: {
    CronCompatible,
  },
  setup() {
    const cronValue = ref('0 0 0 * * ?');

    const handleCronChange = (newValue) => {
      cronValue.value = newValue;
      console.log('New cron value from component:', newValue);
    };

    return {
      cronValue,
      handleCronChange,
    };
  },
});
</script>

<style>
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
.component-wrapper {
    width: 600px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>