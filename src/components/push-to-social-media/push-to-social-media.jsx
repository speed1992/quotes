const PushToSocialMedia = ({ quotationId, currentPhilosopher }) => {
    const clickHandler = () => {
        console.log(quotationId, currentPhilosopher)
    }
    return <button onClick={clickHandler}>Insta Push</button>
}

export default PushToSocialMedia
