import React,{ useState } from 'react';
import { 
    signupWithEmailAndPassword, 
    signinWithEmailAndPassword,
    signout 
} from "./firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async (event) => {
        event.preventDefault();
        const user = await signupWithEmailAndPassword(email, password);
        console.log('登録User情報 : ', user);
    };

    const signin = async (event) => {
        event.preventDefault();
        const user = await signinWithEmailAndPassword(email, password);
        console.log('サインインUser情報 : ', user);
    };

    return (
        <div>
            <h1>ログイン</h1>

            <h2>登録用フォーム</h2>
            <form onSubmit={signup}>
                <input 
                type="text" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                />
                <input 
                type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                />
                <button type={'submit'}>登録</button>
            </form>

            <h2>ログインフォーム</h2>
            <form onSubmit={signin}>
                <input 
                type="text" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                />
                <input 
                type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                />
                <button type={'submit'}>ログイン</button>
            </form>

            <div>
                <button type={"button"} onClick={signout}>ログアウト</button>
            </div>
        </div>
    );
}

export default Login;
