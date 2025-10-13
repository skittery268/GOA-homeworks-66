const Form = () => {
    return (
        <form>
            <input type="text" name="user-name" aria-label="user name" placeholder="First name"/>
            <br />
            <input type="email" name="user-email" aria-label="user email" placeholder="Email" />
            <br />
            <input type="password" name="user-pass" aria-label="user password" placeholder="Password" />
            <br />
            <textarea name="message" rows={5} cols={50} placeholder="Message"></textarea>
        </form>
    );
};

export default Form;

