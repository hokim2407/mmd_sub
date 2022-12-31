import React from 'react';
import tw from 'twrnc';
import {Modal, TouchableOpacity, View} from 'react-native';
import IconImage from '../common/Comp_IconImage';
import Cancel from '../../assets/images/Cancel.png';
import NotoText from '../common/Comp_NotoText';

const ReciptModal = ({
  visible,
  closeModal,
}: {
  visible: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      style={tw`flex-row justify-center items-center`}>
      <TouchableOpacity
        onPress={closeModal}
        activeOpacity={1}
        style={tw`flex-1 bg-[#00000037]`}>
        <View
          style={tw`flex-1 mx-8 my-50 p-4 items-center bg-white rounded-lg justify-between`}>
          <View style={tw`w-[100%] flex-1 flex-row justify-between`}>
            <View style={{width: 20}} />
            <NotoText>모두닥의 클린 시스템</NotoText>
            <IconImage
              src={Cancel}
              onPress={closeModal}
              style={{width: 20, height: 20}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default React.memo(ReciptModal);
