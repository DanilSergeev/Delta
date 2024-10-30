import MainContainer from "@/components/styled/MainContainer"

const ContactsPage = () => {
    return (
        <MainContainer >
            <>
            <h2>Only CTA on the page</h2>
            <form>
                <p>Name</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <p>Message</p>
                <textarea />
                <button></button>
            </form>


            <h2>'Thank you for your interest, Name</h2>

            </>
        </MainContainer>
    )
}

export default ContactsPage