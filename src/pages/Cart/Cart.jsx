import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./Cart.module.scss"


export const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div className={styles.cart}>
            <section className={styles.cartMain}>
                <div className='container'>
                </div>
            </section>
            <section className={`${styles.cartContent}`}>
                <div className="container">
                    <div className="section__title">
                        <h3 className="title">Корзина</h3>
                    </div>
                    <div className={styles.cart__table}>
                        <div className={styles.table__header}>
                            <p>Товар</p>
                            <p>Цена</p>
                            <p>Количество</p>
                            <p>Всего</p>
                        </div>
                    </div>
                </div>


                {/* <div className={styles.table__product}>
            {Object.values(cart).map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div> */}
                {/* <div className={styles.table__control}>
            <input type="text" placeholder="Введите купон" />
            <Button2>Применить купон</Button2>
            <Button2>Обновить корзину</Button2>
          </div> */}

                {/* <div className={styles.cart__total}>
          <div className={styles.totalSum}>
            <div>
              <p>Итого:</p>
              <p>{total} $</p>
            </div>
            <Button1 onClick={() => navigate("/")}>Оформить заказ</Button1>
          </div>
        </div> */}
            </section>
        </div>
    );
};

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();
//   const { title, price, imageURL, count } = item;

//   const handleDeleteProduct = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   return (
//     <>
//       <div className={styles.product__title}>
//         <button
//           onClick={() => handleDeleteProduct(item.id)}
//           className={styles.table__deleteBtn}
//         >
//           <img src={deleteIcon} alt="delete" />
//         </button>
//         <div className={styles.product__image}>
//           <img src={imageURL} alt={title} />
//         </div>
//         <h5>{title}</h5>
//       </div>
//       <p>{price} $</p>
//       <p>{count}</p>
//       <p>{price * count}$</p>
//     </>
//   );
// };