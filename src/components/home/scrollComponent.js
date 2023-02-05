import { useVisibilityHook } from 'react-observer-api';

function Background  ()  {
    const { setElement, isVisible } = useVisibilityHook();

    // useEffect(() => {
    //     if (isVisible) {
    //     }
    // }, [isVisible])

    return (
        <div ref={setElement}>
            {isVisible && (
                <div className="image1">
                  Toh chaliye shuru karte hai !
                </div>
            )}
        </div>
    )
}

export default Background;