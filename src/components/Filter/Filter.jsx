import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { selectFilter, setFilter } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	return (
		<div className={styles.search}>
			<div className={styles.searchWrapper}>
				<CiSearch className={styles.searchIcon} />

				<input
					onChange={(e) => dispatch(setFilter(e.target.value))}
					className={styles.searchInput}
					type="text"
					id="search"
					placeholder="Search something.."
					value={filter}
				/>
			</div>
		</div>
	);
};
