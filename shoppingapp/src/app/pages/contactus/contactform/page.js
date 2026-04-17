export default function ContactForm() {

    return (<div>
        <p>
            <input type="text" placeholder="enter subject" name="subject"></input>
        </p>
        <p>
            <input type="text" placeholder="enter your message" name="message"></input>
        </p>
        <p>
            <input type="button" name="send" value="Send" />
        </p>
    </div>
    )
}