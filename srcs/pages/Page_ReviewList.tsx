import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import {FlatList, ActivityIndicator} from 'react-native';
import tw from '../libs/Lib_Tw';
import HashListCard from '../components/hashCard/Comp_HashList';
import CompStatCard from '../components/statusCard/Comp_StatCard';

import {useAppSelector, useAppDispatch} from '../context/store';
import {GetReviewList} from '../apis/API_Reviews';
import {updateReviewPage} from '../context/Slice_hospitals';
import ReciptCard from '../components/reciptCard/Comp_ReciptCard';
import setHeader from '../libs/Lib_setHeader';
import {setCurKeyword, setCurReview} from '../context/Slice_current';
import {ReviewProvider} from '../components/reviewCard/Context_Review';
import ReviewContentCard from '../components/reviewCard/Comp_ReviewContentCard';
import ReviewProfileCard from '../components/reviewCard/Comp_ReviewProfileCard';
import HrLine from '../components/common/Comp_HrLine';

const PageReviewList = ({navigation}: NavProps) => {
  const dispatch = useAppDispatch();
  const hospitalIdx = useAppSelector(state => state.current.hospitalIdx);
  const current = useAppSelector(state => state.current);
  const hospital = useAppSelector(
    state => state.hospitals.hospitals[hospitalIdx],
  );
  const reviews = hospital?.reviews;

  const [isLoading, setIsLoading] = useState(false);

  const getInfo = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const reviewList = await GetReviewList(
        hospital.id,
        hospital.review_page,
        current.keyword,
      );
      if (reviewList.success) {
        dispatch(
          updateReviewPage({
            idx: hospitalIdx,
            reviews: reviewList.result.reviews,
          }),
        );
      }
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setHeader(navigation, hospital.name);
    getInfo();
    dispatch(setCurKeyword(''));
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={tw`bg-white p-4 mb-3`}>
          <CompStatCard hospital={hospital} />
        </View>
        <ReciptCard style={tw`mb-3`} />
      </>
    );
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
      {reviews.length === 0 ? (
        <View style={tw`flex-1 flex-center`}>
          <ActivityIndicator size={30} color="white" />
        </View>
      ) : (
        <FlatList
          removeClippedSubviews
          disableVirtualization={false}
          style={tw`flex-1 bg-g3`}
          data={reviews}
          ListFooterComponent={renderLoaderFooter}
          onEndReached={async () => {
            if (!hospital.page_end) {
              await getInfo();
            }
          }}
          onEndReachedThreshold={0}
          ListHeaderComponent={renderHeader()}
          renderItem={({item}) => (
            <ReviewProvider review={item} navigation={navigation}>
              <View style={tw`bg-white p-6`}>
                <ReviewContentCard />
                <HrLine style={tw`my-4`} />
                <ReviewProfileCard />
              </View>
            </ReviewProvider>
          )}
          ItemSeparatorComponent={() => <View style={tw`h-3`} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default React.memo(PageReviewList);
