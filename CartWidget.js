import cart from './svg/logo.svg';

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-wdiget"/>
            0
        </div>
    )
}

export default CartWidget;