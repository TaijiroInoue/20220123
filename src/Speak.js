import React, { useEffect, useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Speak.css";
import firebase from 'firebase/compat/app';



// configは、自分のfirebaseの設定を指定してください。
const firebaseConfig = {
    authDomain: "t-career-radio.firebaseapp.com",
    projectId: "t-career-radio",
    storageBucket: "t-career-radio.appspot.com",
    messagingSenderId: "163091592469",
    appId: "1:163091592469:web:ab967afc2245ade741a51c"
};


const Speak = () => {
    const [file, setFile] = useState([]);
    const [audioState, setAudioState] = useState(true);
    const audioRef = useRef();

    useEffect(() => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
        // マイクへのアクセス権を取得
        navigator.getUserMedia =
            navigator.getUserMedia || navigator.webkitGetUserMedia;
        //audioのみtrue
        navigator.getUserMedia(
            {
                audio: true,
                video: false,
            },
            handleSuccess,
            hancleError
        );
    }, []);

    const handleSuccess = (stream) => {
        // レコーディングのインスタンスを作成
        audioRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm;codecs=vp9",
        });
        // 音声データを貯める場所
        var chunks = [];
        // 録音が終わった後のデータをまとめる
        audioRef.current.addEventListener("dataavailable", (ele) => {
            if (ele.data.size > 0) {
                chunks.push(ele.data);
            }
            // 音声データをセット
            setFile(chunks);
        });
        // 録音を開始したら状態を変える
        audioRef.current.addEventListener("start", () => setAudioState(false));
        // 録音がストップしたらchunkを空にして、録音状態を更新
        audioRef.current.addEventListener("stop", () => {
            setAudioState(true);
            chunks = [];
        });
    };
    // 録音開始
    const handleStart = () => {
        audioRef.current.start();
    };

    // 録音停止
    const handleStop = () => {
        audioRef.current.stop();
    };
    // firebaseに音声ファイルを送信
    const handleSubmit = () => {
        // firebaseのrefを作成
        var storageRef = firebase.storage().ref();
        var metadata = {
            contentType: "audio/mp3",
        };
        // ファイル名を付けてBlobからファイルを作成して送信
        var mountainsRef = storageRef.child(new Date() + "test.mp3");
        mountainsRef.put(new Blob(file), metadata).then(function () {
            console.log("アップロード完了！");
        });
    };
    const handleRemove = () => {
        setAudioState(true);
        setFile([]);
    };

    const hancleError = () => {
        alert("エラーです。");
    };


    return (
        <div className="Speak">
            <button onClick={handleStart}>録音</button>
            <button onClick={handleStop} disabled={audioState}>
                ストップ
            </button>
            <button onClick={handleSubmit} disabled={file.length === 0}>
                送信
            </button>
            <button onClick={handleRemove}>削除</button>
            <ReactAudioPlayer src={URL.createObjectURL(new Blob(file))} controls />
        </div>
    );
};


export default Speak;
