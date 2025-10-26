const Checkount = ({ cart, setPrice, promocodes, price }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const promocode = e.target.promo.value;
        const isValude = promocodes.find(promo => promo.code === promocode);

        if(isValude) {
            const discountedPrice = price - (price * isValude.discount);
            setPrice(discountedPrice.toFixed(2));
            alert(`Promocode applied! You got ${isValude.discount * 100}% off!`);
        } else {
            alert('Invalid promocode');
        }
    }

    return (
        <section>
            <h2>Checkout</h2>

            <p>Current price: {price}</p>
            <p>Discounted price: </p>
            
            <form onSubmit={handleSubmit}>
            <input type="text" name="promo" placeholder="Promocode" required />
            <button disabled={cart.length == 0 ? true : false}>Submit</button>
            </form>
            
        </section>
    )
}

export default Checkount;

