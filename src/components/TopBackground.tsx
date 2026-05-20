'use client'
import React, { useState, useEffect } from 'react';

type MainBackgroundProps = {
    imageUrl: string;
    startScrollY?: number;
    zIndex?: number;
};

const INITIAL_BLUR = 30;

export default function TopBackground({ imageUrl, startScrollY = 300, zIndex = -10 }: MainBackgroundProps) {
    const [scrollY, setScrollY] = useState(INITIAL_BLUR);


    useEffect(() => {
        // スクロール時に実行される関数
        const handleScroll = () => {
            if (window.scrollY <= startScrollY) {
                setScrollY(INITIAL_BLUR);
                return;
            }

            const next = Math.max(0, INITIAL_BLUR - (window.scrollY - startScrollY) * 0.1); // 指定位置を超えた後からblurを減らす
            setScrollY(next);
        };

        handleScroll(); // 初期表示時にも一度適用
        // イベントリスナーを登録
        window.addEventListener('scroll', handleScroll);

        // クリーンアップ関数（コンポーネントが消える時にイベントを削除）
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [startScrollY]);

    return (
        <div className={`fixed top-0 ${zIndex} min-h-screen w-full overflow-hidden bg-neutral-500`}>
            <div className="absolute min-h-screen w-full bg-top-center bg-center bg-cover"
                style={{ backgroundImage: `url('/images/${imageUrl}')` }}
            >
                <div
                    className="absolute min-h-screen w-full"
                    // style={{
                    //     backdropFilter: `blur(${scrollY}px)`,
                    //     WebkitBackdropFilter: `blur(${scrollY}px)`, // Safari対応
                    // }}
                ></div>
            </div>
            <div className="absolute min-h-screen w-full backdrop-grayscale backdrop-brightness-[80%]"></div>
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-lime-700/80 blur-[80px] animate-orb [animation-delay:800ms]"></div>
            <div className="absolute bottom-[10%] right-[25%] h-[400px] w-[400px] rounded-full bg-sky-300/70 blur-[100px] animate-orb [animation-delay:500ms]"></div>
            <div className="absolute top-[24%] right-[10%] h-[300px] w-[300px] rounded-full bg-pink-100/60 blur-[80px] animate-orb [animation-delay:1200ms]"></div>
        </div>
    )
}
