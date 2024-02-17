import { reactive, computed, watch } from 'vue';

export function useCounter() {
    const counterData = reactive({
        count: 0,
        title: 'My Counter'
    });

    const counterDoubled = computed(()=> {
        return counterData.count * 2;
    });

    watch(()=> counterData.count, (newValue, oldValue) => {
        console.log('Old count value: ', oldValue, 'new value: ', newValue);
    })

    function increaseCounter() {
        counterData.count++;
    }

    function decreaseCounter() {
        counterData.count++;
    }

    return { counterData, counterDoubled, increaseCounter, decreaseCounter };
}