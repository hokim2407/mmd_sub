import React, {useState, useEffect} from 'react';
import Comp_StatCard from '../statusCard/Comp_StatCard';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import Comp_ReciptCard from '../reciptCard/Comp_ReciptCard';
import IconText from '../common/Comp_IconText';

import OrderIcon from '../../assets/images/Order.png';
import ArrowIcon from '../../assets/images/Arrow.png';
import {useAppDispatch, useAppSelector} from '../../context/Store';
import {openSheet, setupSheet} from '../../context/Slice_BottomSheet';

const FilterCard = ({hospital}: {hospital: HospitalType}) => {
  const bottomSheet = useAppSelector(state => state.bottomSheet);
  const dispatch = useAppDispatch();
  const [type, setType] = useState<'order' | 'filter'>();
  const [orderIdx, setOrderIdx] = useState(0);
  const [filterIdx, setFilterIdx] = useState(0);
  const orders = [
    {id: '1', name: '기본순'},
    {id: '2', name: '작성일순'},
    {id: '3', name: '좋아요순'},
  ];
  const filters = [
    {id: '1', name: '의사 전체'},
    {id: '2', name: '의사1'},
    {id: '3', name: '의사2'},
  ];

  useEffect(() => {
    if (type === 'order') setOrderIdx(bottomSheet.currentIdx);
    if (type === 'filter') setFilterIdx(bottomSheet.currentIdx);
  }, [bottomSheet.currentIdx]);

  const onPress = (typeName: 'order' | 'filter') => {
    setType(typeName);
    dispatch(
      setupSheet({
        items: typeName === 'order' ? orders : filters,
      }),
    );
    dispatch(openSheet());
  };

  return (
    <>
      <View style={tw`bg-white p-4 mb-3`}>
        <Comp_StatCard hospital={hospital} />
      </View>
      <Comp_ReciptCard style={tw`mb-3`} />
      <View style={tw`bg-white flex-row-between`}>
        <TouchableOpacity
          style={tw`p-3`}
          activeOpacity={0.5}
          onPress={() => {
            onPress('order');
          }}>
          <IconText
            imageStyle={tw`width-14 height-14 mr-1`}
            textStyle={tw`font-12 text-g7`}
            imageSrc={OrderIcon}>
            {orders[orderIdx]?.name}
          </IconText>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`p-3`}
          activeOpacity={0.5}
          onPress={() => {
            onPress('filter');
          }}>
          <IconText
            containerStyle={tw`flex-row-reverse`}
            imageStyle={tw`width-14 height-14`}
            textStyle={tw`font-12  text-g7`}
            imageSrc={ArrowIcon}>
            {filters[filterIdx]?.name}
          </IconText>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default FilterCard;
