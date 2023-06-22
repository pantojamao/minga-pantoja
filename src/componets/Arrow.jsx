export default function Arrow({ color,d,onClick }) {

    return (
        <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
            <path style={{ color }} strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    )
    
}