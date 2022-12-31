import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import {FlatList, ActivityIndicator} from 'react-native';
import tw from '../libs/Lib_Tw';
import HashListCard from '../components/hashCard/Comp_HashList';

import {useAppSelector, useAppDispatch} from '../context/Store';
import SetHeaderOpt from '../libs/Lib_SetHeaderOpt';
import {setCurKeyword} from '../context/Slice_Current';
import {ReviewProvider} from '../components/reviewCard/Context_Review';
import ReviewContentCard from '../components/reviewCard/Comp_ReviewContentCard';
import ReviewProfileCard from '../components/reviewCard/Comp_ReviewProfileCard';
import HrLine from '../components/common/Comp_HrLine';
import {ReadReviews} from '../libs/Lib_ReadReviews';
import FilterCard from '../components/filterCard/Comp_FilterCard';

const PageReviewList = ({navigation}: NavProps) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[current.hospitalIdx],
  );
  const reviews = useAppSelector(
    state => state.reviews[current.hospitalIdx]?.reviews,
  );
  const pages = useAppSelector(
    state => state.reviews[current.hospitalIdx]?.pages[current.keyword],
  );

  const [isLoading, setIsLoading] = useState(false);

  const getReviews = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    await ReadReviews(
      dispatch,
      hospital,
      pages ? pages.page + 1 : 1,
      current.keyword,
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [current, pages?.page, isLoading]);

  useEffect(() => {
    SetHeaderOpt(navigation, hospital.name);
    if (!pages || pages.reviewIds.length === 0) getReviews();
    dispatch(setCurKeyword(''));
  }, []);

  const renderHeader = useCallback(() => {
    return <FilterCard hospital={hospital} />;
  }, [hospital]);

  const renderLoaderFooter = () => {
    return isLoading ? (
      <View style={tw`py-2`}>
        <ActivityIndicator size={30} color="white" />
      </View>
    ) : (
      <></>
    );
  };

  return (
    <View style={tw`flex-1 bg-g3`}>
      <View style={tw`shadow`}>
        <HashListCard hashList={hospital.treatment_prices_count_per_name} />
      </View>
      {pages?.reviewIds.length > 0 ? (
        <FlatList
          removeClippedSubviews
          disableVirtualization={false}
          style={tw`flex-1 bg-g3`}
          data={pages.reviewIds}
          onEndReachedThreshold={0}
          ItemSeparatorComponent={() => <View style={tw`h-3`} />}
          keyExtractor={item => reviews[item].id.toString()}
          ListHeaderComponent={renderHeader()}
          renderItem={({item, index}) => (
            <ReviewProvider
              review={reviews[item]}
              reviewIdx={index}
              navigation={navigation}>
              <View style={tw`bg-white p-6`}>
                <ReviewContentCard />
                <HrLine style={tw`my-4`} />
                <ReviewProfileCard />
              </View>
            </ReviewProvider>
          )}
          ListFooterComponent={renderLoaderFooter}
          onEndReached={async () => {
            if (!pages?.page_end) {
              await getReviews();
            }
          }}
        />
      ) : (
        <View style={tw`flex-1 flex-center`}>
          <ActivityIndicator size={30} color="white" />
        </View>
      )}
    </View>
  );
};

export default React.memo(PageReviewList);
