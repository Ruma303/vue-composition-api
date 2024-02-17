import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
    const x = 10;
    const y = 20;
    return { x, y };
}
