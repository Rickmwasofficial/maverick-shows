import AiringToday from './AiringToday'
import Popular from './Popular'
import OnAir from './OnAir'

function Tv() {
    return (
        <>
            <OnAir />
            <Popular />
            <AiringToday />
        </>
    )
}

export default Tv;