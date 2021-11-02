const useLocalstorage = () => {
    const setLocaldata = (cartData) => {
        const newdata = JSON.stringify(cartData)
        localStorage.setItem("cart", newdata)
    }

    const loadData = () => {
        const loadCart = JSON.parse(localStorage.getItem("cart"))
        return loadCart;
    }
    return {
        setLocaldata,
        loadData
    };
}

export default useLocalstorage;