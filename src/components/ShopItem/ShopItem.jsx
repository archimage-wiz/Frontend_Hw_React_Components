import PropTypes from "prop-types";
import React from "react";

export function ShopItemFunc({ item }) {
    return (
        <>
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">
                        {item.currency}
                        {item.price.toFixed(2)}
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </>
    );
}

ShopItemFunc.propTypes = {
    item: PropTypes.exact({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};

export class ShopItemClass extends React.Component {
    render() {
        const { brand, title, description, descriptionFull, price, currency } =
            this.props.item;
        return (
            <>
                <div className="main-content">
                    <h2>{brand}</h2>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <div className="description">{descriptionFull}</div>
                    <div className="highlight-window mobile">
                        <div className="highlight-overlay"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">
                            {currency}
                            {price.toFixed(2)}
                        </div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </>
        );
    }
}



