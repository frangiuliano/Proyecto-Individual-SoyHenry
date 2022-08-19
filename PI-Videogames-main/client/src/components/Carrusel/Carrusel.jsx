import React from "react";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getVideogames} from '../../actions'
import styles from './Carrusel.module.css'

const Carrusel = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    console.log(allVideogames)
    
    useEffect (()  => {
        dispatch(getVideogames());
    }, [dispatch])

    allVideogames.sort ((a, b) => {
        if (a.rating < b.rating){
            return 1;
        }
        if (a.rating > b.rating){
            return -1;
        }
        return 0
    })
    
    const allVg = []

    for (let i = 0; i < allVideogames.length; i++){
        if (allVg.length < 5){
            allVg.push(allVideogames[i])
        }
    }

    console.log(allVg)
    
    return (
        <div className={styles.divGeneral}>
            {allVideogames.length?
            <div className={styles.container}>
                <ul className={styles.slider}>
                        <li className={styles.sliderli} id="1">
                            <img className={styles.img} src={allVg[0].background_image} alt="img not found" width={500}/>
                            <div className={styles.divName}>
                                <div className={styles.divName2}>
                                    <p className={styles.name}>{allVg[0].name}</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.sliderli} id="2">
                            <img className={styles.img} src={allVg[1].background_image} alt="img not found" width={500}/>
                            <div className={styles.divName}>
                                <p className={styles.name}>{allVg[1].name}</p>
                            </div>
                        </li>
                        <li className={styles.sliderli} id="3">
                            <img className={styles.img} src={allVg[2].background_image} alt="img not found" width={500}/>
                            <div className={styles.divName}>
                                <p className={styles.name}>{allVg[2].name}</p>
                            </div>
                        </li>
                        <li className={styles.sliderli} id="4">
                            <img className={styles.img} src={allVg[3].background_image} alt="img not found" width={500}/>
                            <div className={styles.divName}>
                                <p className={styles.name}>{allVg[3].name}</p>
                            </div>
                        </li>
                        <li className={styles.sliderli} id="5">
                            <img className={styles.img} src={allVg[4].background_image} alt="img not found" width={500}/>
                            <div className={styles.divName}>
                                <p className={styles.name}>{allVg[4].name}</p>
                            </div>
                        </li>
                </ul>
                <ul className={styles.menu}>
                    <li className={styles.menuli}>
                        <a className={styles.a} href="#1">1</a>
                    </li>
                    <li className={styles.menuli}>
                        <a className={styles.a} href="#2">2</a>
                    </li>
                    <li className={styles.menuli}>
                        <a className={styles.a} href="#3">3</a>
                    </li>
                    <li className={styles.menuli}>
                        <a className={styles.a} href="#4">4</a>
                    </li>
                    <li className={styles.menuli}>
                        <a className={styles.a} href="#5">5</a>
                    </li>     
                </ul>
            </div>
            : <h1> </h1>
            }
        </div>
    )
}

export default Carrusel;