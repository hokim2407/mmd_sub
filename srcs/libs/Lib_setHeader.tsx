import tw from './Lib_Tw';

const setHeader = (navigation: NavProps, title: string) => {
  navigation.setOptions({
    title: title,
    headerStyle: tw`bg-[#4c1192]`,
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: tw`w-full text-white font-bold`,
  });
};
export default setHeader;
