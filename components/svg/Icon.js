export default function Icon({ style, hrefId }) {
    return (
        <>
            <svg className={style}>
                <use href={hrefId}></use>
            </svg>
        </>
    )
}