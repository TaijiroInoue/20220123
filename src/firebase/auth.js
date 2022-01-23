import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    authDomain: "t-career-radio.firebaseapp.com",
    projectId: "t-career-radio",
    storageBucket: "t-career-radio.appspot.com",
    messagingSenderId: "163091592469",
    appId: "1:163091592469:web:ab967afc2245ade741a51c"
};

firebase.initializeApp(firebaseConfig);

export const signupWithEmailAndPassword = async (email, password) => {
    try {
        const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

        await firebase.auth().currentUser.sendEmailVerification();

        alert('登録成功');

        return user;
    } catch (error) {
        alert('登録失敗');
        console.log(error);
    }
};

export const signinWithEmailAndPassword = async (email, password) => {
    try {
        const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

        alert('サインイン成功');

        return user;
    } catch (error) {
        alert('サインイン失敗');
        console.log(error);
    }
};

export const signout = async () => {
    await firebase.auth().signOut();
    const user = await firebase.auth().currentUser;
    console.log('サインアウト: ', user);
};