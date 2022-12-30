import tw from './Lib_Tw';

const setHeader = (navigation: NavProps, title: string) => {
  navigation.setOptions({
    title: title,
    headerStyle: tw`bg-p5`,
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: tw`w-full text-white font-bold font-14`,
  });
};
export default setHeader;
