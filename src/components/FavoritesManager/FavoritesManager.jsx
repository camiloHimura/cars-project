import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {Wrapper} from './styles';
import Button from "../../components/Button";
import {searchFavorite, saveFavorite, removeFavorite} from "../../state/actions";

const mapStateToProps = state => {
  return {
    isFavorite: state.carByStockNumber.isFavorite,
  }           
}

const mapDispachToProps = dispatch => {
  return {
    save: id => dispatch(saveFavorite(id)),
    search: id => dispatch(searchFavorite(id)),
    remove: id => dispatch(removeFavorite(id)),
  }
}
  
function FavoritesManager(props){
  const {id, isFavorite, save, search, remove} = props; 

  useEffect(() => {
    search(id)
  }, [])

  return  <Wrapper>
              {!isFavorite && <Fragment>
                                <p>If you like this car, click the button and save it in your collection of favourite items.</p>
                                <Button value={"Save"} onClick={() => save(id)}/>
                              </Fragment>}

              {isFavorite && <Fragment>
                                <p>Click the button for removing it in your collection of favourite items.</p>
                                <Button value={"Remove"} onClick={() => remove(id)}/>
                              </Fragment>}
          </Wrapper>
}

FavoritesManager.propTypes = {
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  saveFavorite: PropTypes.func,
  searchFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
}

export default connect(mapStateToProps, mapDispachToProps)(FavoritesManager);
