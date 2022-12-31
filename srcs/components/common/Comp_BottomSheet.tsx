import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import NotoText from './Comp_NotoText';
import {useAppDispatch, useAppSelector} from '../../context/Store';
import {closeSheet, setSheetIdx} from '../../context/Slice_BottomSheet';
const BottomSheet = () => {
  const dispatch = useAppDispatch();
  const bottomSheet = useAppSelector(state => state.bottomSheet);

  return (
    <>
      {bottomSheet.open && (
        <TouchableOpacity
          onPress={() => {
            dispatch(closeSheet());
          }}
          style={tw`absolute bottom-0 w-[100%] top-0 bg-[#00000030]`}>
          <View
            style={tw`absolute bottom-[0] w-[100%] rounded-t-xl bg-white p-5`}>
            {bottomSheet.items.map((item, idx) => {
              return (
                <NotoText
                  key={item.id}
                  style={tw`p-3`}
                  onPress={() => {
                    dispatch(setSheetIdx(idx));
                    dispatch(closeSheet());
                  }}>
                  {item.name}
                </NotoText>
              );
            })}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
export default BottomSheet;
