import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addComment, addToCart, editProduct, getBlogs, getBlogsById } from '../../store';
import styles from "./OneBlog.module.scss"
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { useForm } from 'react-hook-form';
import userImg from "../../images/BlogsImage/userImg.jpg"




export const OneBlog = () => {
    const { id } = useParams();
    const [variant, setVariant] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const { selectedBlog } = useSelector((state) => state.blogs);


    useEffect(() => {
        dispatch(getBlogsById(id))
    }, [])


    if (!selectedBlog) {
        return console.log("loading...")
    }


    const { comments, products } = selectedBlog;
    console.log(products)



    const handleClick = (values) => {
        if (selectedBlog) {
            const data = { ...selectedBlog, comments: [...comments, values] }
            console.log(data)
            console.log(values)
            dispatch(addComment(data));
            dispatch(getBlogs());
        }
    }

    const deleteIng = ({ cost, product }) => {
        dispatch(editProduct({
            id, blogData: {
                price: selectedBlog.price - cost,
                products: selectedBlog.products.filter((item) => item.product !== product),
            }
        }));
    }

    const handleCartClick = (blog) => {
        const { id, ...data } = blog;
        dispatch(addToCart({ ...data, shopItemId: id }))
    }

    // useEffect(() => {
    //     if (selectedBlog?.variants) {
    //         setVariant(selectedBlog.variants[0].img);
    //     }
    // }, [selectedBlog]);



    return (
        <div className={styles.oneBLog}>
            <section className={styles.oneBlog__main}>
                <div className='container'>

                </div>
            </section>
            <section>
                <div className="container">
                    <div className={`${styles.breadCrumbs} ${'breadCrumbs'}`}>
                        <BreadCrumbs />
                    </div>

                    <div className={styles.oneBlog__top}>
                        <div className={styles.oneBlog__infoCover}>
                            <div className={styles.oneBlog__info}>
                                <p className={`${"description"}`}>{selectedBlog.dopInfo1}</p>
                                {/* <img src={selectedBlog && selectedBlog?.img} alt="" /> */}
                                <div className={styles.selectedBlog__variants}>
                                    <img src={`http://localhost:3000${variant || selectedBlog.img}`} />
                                    <div>
                                        {selectedBlog.variants &&
                                            selectedBlog.variants.map(({ imageURL }) => (
                                                <>
                                                    <img src={imageURL} alt="img" onClick={() => setVariant(imageURL)} />
                                                </>
                                            ))}
                                    </div>
                                </div>
                                <p className={`${"description"}`}>{selectedBlog.dopInfo2}</p>
                                <p className={styles.oneBlog__info_green}>{selectedBlog.dopInfo3}</p>
                                <p className={`${"description"}`}>{selectedBlog.dopInfo4}</p>

                                <button onClick={() => handleCartClick(selectedBlog)} className={styles.oneBlog__btn}>add to cart</button>

                            </div>
                        </div>
                        <div className={styles.oneBlog__function}>
                            <div>
                                <h2 className={styles.products__title}>Products you can remove</h2>
                                <div className={styles.products__line}></div>
                                {selectedBlog.products.map(item => (
                                    <>
                                        <div className={styles.products__productList}>
                                            <p>{item.product}</p>

                                            <p>{item.cost}</p>
                                            <button onClick={() => deleteIng(item)}>delete</button>
                                        </div>
                                    </>
                                ))}

                                <p className={styles.oneBlog__price}>Стоимость продукта {selectedBlog.price} сом</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>


                    <div className={styles.oneBlog__bottom}>
                        <div className={styles.oneBlog__bottomComments}>
                            <h3>Comments</h3>
                            <div className={styles.oneBlog__comments}>
                                {selectedBlog.comments.map(item => (
                                    <div className={styles.oneBlog__commentsCover}>
                                        <img src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="" />
                                        <div className={styles.oneBlog__commentsText}>
                                            <div className={styles.oneBlog__text}>
                                                <p className={styles.oneBlog__commentName}>{item.name}</p>
                                                <p className={styles.oneBlog__commentTitle}>{item.title}</p>
                                            </div>
                                            <div className={styles.oneBlog__button}>
                                                <button>delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.oneBlog__bottomForm} >
                            <div className={styles.line}></div>
                            <h3>Leave a Reply</h3>
                            <form onSubmit={handleSubmit(handleClick)} action="">
                                <label className={styles.label} htmlFor="1">
                                    <p>Comment</p>
                                    <input id='1' type="text" {...register("title")} />
                                </label>
                                <label className={styles.label} htmlFor="">
                                    <p>Name</p>
                                    <input id='2' type="text"  {...register("name")} />
                                </label>
                                <label className={styles.label} htmlFor="">
                                    <p>Email</p>
                                    <input id='3' type="email"  {...register("email")} />
                                </label>
                                <button type='submit'>submit</button>
                            </form>
                        </div>
                    </div>






                </div>
            </section>
        </div>
    );
};
