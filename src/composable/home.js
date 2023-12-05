import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export function useHome(){
    const router = useRouter()
    const isAuth = ref(true)
    
    onMounted(() => {
        const token = localStorage.getItem('token')
        if(!token){
            localStorage.removeItem('token')
        }
    })
    
    function onLogout() {
        localStorage.removeItem('token')
        router.push('/login')
    }

    return {
        isAuth, onLogout
    }
}
