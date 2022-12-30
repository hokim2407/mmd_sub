import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CompHospitalCard from '../components/main/Comp_HospitalCard';
import {FlatList} from 'react-native';
import tw from '../libs/Lib_Tw';
import {GetHospitalList} from '../apis/API_Hospitals';

const PageMain = ({navigation}: NavProps) => {
  const [hospitals, setHospitals] = useState<HospitalType[]>();

  const getInfo = async () => {
    try {
      const hospitalList = await GetHospitalList();
      if (hospitalList.success) {
        setHospitals(hospitalList.result.hospitals);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const onCardPress = (hospital: HospitalType) => {
    return () => {
      // TODO: navigation 이동
      console.log(hospital);
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
      <FlatList
        style={tw`flex-1 bg-g3`}
        data={hospitals}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default PageMain;
