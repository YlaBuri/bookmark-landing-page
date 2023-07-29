import React, { useState } from 'react';
import styles from './Tab.module.css'
import imgTab1Svg from 'assets/images/illustration-features-tab-1.svg'
import imgTab2Svg from 'assets/images/illustration-features-tab-2.svg'
import imgTab3Svg from 'assets/images/illustration-features-tab-3.svg'
import TabContent from 'components/TabContent';

export default function Tab() {

    const [botaoClicado, setBotaoClicado] = useState(1);

    const handleBotaoClick = (botao) => {
        // Atualiza o botão clicado
        setBotaoClicado(botao);
    };

    const tabs = [
        {
            srcImg: imgTab1Svg,
            altImg: "", 
            titulo: "Bookmark in one click", 
            descricao: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            srcImg: imgTab2Svg,
            altImg: "", 
            titulo: "Intelligent search", 
            descricao: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            srcImg: imgTab3Svg,
            altImg: "", 
            titulo: "Share your bookmarks", 
            descricao: "Easily share your bookmarks and collections with others. Create a shareable  link that you can send at the click of a button."
        }]

    return (

        <div className={styles.tab}>
            <div className={styles.tabButtons}>
                <button
                className={botaoClicado === 1 ? `${styles.active}` : ''}
                onClick={() => handleBotaoClick(1)}
                >
                Simple Bookmarking
                </button>
                <button
                className={botaoClicado === 2 ? `${styles.active}` : ''}
                onClick={() => handleBotaoClick(2)}
                >
                Speedy Searching
                </button>
                <button
                className={botaoClicado === 3 ? `${styles.active}` : ''}
                onClick={() => handleBotaoClick(3)}
                >
                Easy Sharing
                </button>
            </div>

            <div className={styles.tabContent}>
               
                <TabContent srcImg={tabs[botaoClicado-1].srcImg} altImg="Imagem" titulo={tabs[botaoClicado-1].titulo} descricao={tabs[botaoClicado-1].descricao} />
            </div>
        </div>
    )
}
