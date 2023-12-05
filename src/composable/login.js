import axios from 'axios'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export function useLogin() {
    const password = ref('')
    const username = ref('')
    const router = useRouter()
    const url = import.meta.env.VITE_MAIN_URL

    async function onLogin() {
        const res = await axios.post(url + 'auth/login', {
            password: password.value,
            username: username.value
        });
        if (!res?.data?.token && res.status ==! 200) {
            return;
        }
        localStorage.setItem('token', res?.data?.token)
        router.push({name: 'home'})
    }

    return {
        onLogin, password, username
    }
}
