import React from "react";
import {useState} from "react"
import { useDispatch } from "react-redux";
import {searchByName} from "../../actions/index"
import img from '../../../src/LupaSearch.png'
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchByName(name))
        setName("")
    }

    return (
            <div className={styles.box}>
                <input className={styles.searchInput} onChange= {(e) => handleInputChange(e)}
                type = "text"
                placeholder = "Search.."
                value = {name}
                />
                <button className={styles.icon} type="submit" onClick={(e) => handleSubmit(e)}>
                    <img className={styles.img} src={img} alt="img not found" width="30px"/>
                </button>
            </div>
    )
}

export default SearchBar;


