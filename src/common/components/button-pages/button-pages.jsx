import styles from "./button-pages.module.css"

export function ButtonPages({ page, setPage }) {

    return(
        <div className={styles.container}>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>⬅️</button>
            <p>{page}</p>
            <button onClick={()=>setPage(page+1)}>➡️</button>
        </div>
    );
}