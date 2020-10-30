import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {sortList} from "../../utils/sort";
import {SortItem} from "./sort-item";

const Sort = ({sort, onChangeSort}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortList.map((sortItem, index) =>
          <SortItem key={index}
            name={sortItem}
            isActive={sortItem === sort}
            setActive={() => onChangeSort(sortItem)}
          />)}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  onChangeSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sort: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(sort) {
    dispatch(ActionCreator.changeSort(sort));
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
