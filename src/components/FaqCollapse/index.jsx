import React, { useState } from 'react'
import { ReactComponent as IconArrow } from 'assets/images/icon-arrow.svg'
import { ReactComponent as IconArrow2 } from 'assets/images/icon-arrow-copy.svg'
import styles from './FaqCollapse.module.css'

export default function FaqCollapse({question, answer}) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    return (
    <div className={styles.collapseContainer}>
        
        <div className={styles.question} onClick={handleCollapseToggle}>
            <p className={styles.textQuestion}>{question}</p>
            <button onClick={handleCollapseToggle} id="collapseFaq">
                {isCollapsed && <IconArrow  />}
                {!isCollapsed && <IconArrow2 className={styles.icone}/>}
            </button>
        </div>

        <div className={styles.answer}>
            {!isCollapsed && (
                <div className="collapse-content">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    
    </div>
  )
}
