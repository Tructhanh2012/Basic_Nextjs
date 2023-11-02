'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';
const Facebook = () => {
    const handleBtn = () => {
        // alert("hihi");
        router.push('/');
    }
    const router = useRouter();
    return (
        <div>
            Facebook
            <div>
                <Button variant='primary'>Button</Button>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Facebook;