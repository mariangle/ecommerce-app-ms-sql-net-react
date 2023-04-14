import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSize, addSize, updateSize } from '../../store/actions/sizeActions';

export const useSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const addSizeHandler = ({ size, price, quantity, productId }, e) => {
    dispatch(addSize({ size, price, quantity, productId }))
  };

  const updateSizeHandler = ({ sizeId, size }) => {
    dispatch(updateSize({ sizeId, size }));   
  }; 

  const deleteSizeHandler = (sizeId, e) => {
    e.preventDefault();
    console.log("sizehook", sizeId )
    if (window.confirm("Are you sure you want to delete this size?")) {
      dispatch(deleteSize(sizeId)).then(() => {
        alert("Size has been deleted.");
      });
    }  
  };

  return { 
    addSize: addSizeHandler,
    updateSize: updateSizeHandler,
    deleteSize: deleteSizeHandler, 
  };
};



