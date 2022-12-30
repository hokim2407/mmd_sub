import React, {useEffect, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';
import CompHospitalCard from '../components/main/Comp_HospitalCard';
import {FlatList} from 'react-native';
import tw from '../libs/Lib_Tw';
import {GetHospitalList} from '../apis/API_Hospitals';

import {useAppSelector, useAppDispatch} from '../context/store';
import {setHospitals} from '../context/Slice_hospitals';
import setHeader from '../libs/Lib_setHeader';
import {setCurHospital} from '../context/Slice_current';

const PageMain = ({navigation}: NavProps) => {
  const hospitals = useAppSelector(state => state.hospitals.hospitals);
  const dispatch = useAppDispatch();

  const getInfo = useCallback(async () => {
    try {
      if (hospitals.length !== 0) {
        return;
      }
      const hospitalList = await GetHospitalList();
      if (hospitalList.success) {
        dispatch(setHospitals(hospitalList.result.hospitals));
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, hospitals.length]);

  useEffect(() => {
    getInfo();
    setHeader(navigation, 'ㅁㄷㄷ');
  }, [navigation, getInfo]);

  const onCardPress = (hospital: HospitalType) => {
    return () => {
      dispatch(setCurHospital(hospital.idx));
      navigation?.push('ReviewList');
    };
  };

  const renderItem = ({item}: {item: HospitalType}) => (
    <View style={tw`mb-2`}>
      <CompHospitalCard
        name={item.name}
        rate={item.total_score}
        onPress={onCardPress(item)}
      />
    </View>
  );

  return (
    <View style={tw`flex-1 bg-g3`}>
      {hospitals.length === 0 ? (
        <View style={tw`flex-1 flex-center`}>
          <ActivityIndicator size={30} color="white" />
        </View>
      ) : (
        <FlatList
          style={tw`flex-1 bg-g3`}
          data={hospitals}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default React.memo(PageMain);
