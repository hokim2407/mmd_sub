import React, {useState} from 'react';
import tw from '../../libs/Lib_Tw';
import NotoText from '../common/Comp_NotoText';
import {View} from 'react-native';
import ReciptModal from './Comp_ReciptModal';
import {StyleProp, ViewStyle} from 'react-native';
import SimpleButton from '../common/Comp_SimpleButton';

const ReciptCard = ({style}: {style: StyleProp<ViewStyle>}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[tw`bg-white p-6`, style]}>
      <View style={tw`flex-row justify-between items-center`}>
        <NotoText style={tw`text-xs font-13 text-g7`}>
          <NotoText style={tw`font-13 text-p5 font-bold`}>영수증 인증</NotoText>
          {' 리뷰는\n클린 시스템을 통해 방문이 인증된 후기입니다.'}
        </NotoText>
        <SimpleButton
          onPress={() => {
            setVisible(true);
          }}
          mode="small">
          클린 시스템 보기
        </SimpleButton>
      </View>

      <ReciptModal
        visible={visible}
        closeModal={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

export default React.memo(ReciptCard);
