import { SignInModal } from "../sign-in-modal/sign-in-modal";

export const SignIn = ({ modalVisible, setModalVisible, setMarkedMode }) => {

    const showSignInModal = () => {
        setModalVisible(true);
    }

    return (
        <>
            <button onClick={showSignInModal}>Sign In</button>
            {modalVisible ? <SignInModal setModalVisible={setModalVisible} setMarkedMode={setMarkedMode} /> : null}
        </>

    )
}