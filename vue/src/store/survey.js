import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useSurveyStore = defineStore('survey', () => {
	const user = reactive({ name: 'Francisco' });
	const token = ref(null);

	return { user, token };
});
