import React, {useEffect, useState, useCallback} from 'react';
import {View} from 'react-native';
import {FlatList, ActivityIndicator} from 'react-native';
import tw from '../libs/Lib_Tw';
import CompHashList from '../components/review/Comp_HashList';
import CompStatCard from '../components/review/Comp_StatCard';

import {useAppSelector, useAppDispatch} from '../context/store';
import {GetReviewList} from '../apis/API_Reviews';
import CompReviewProfileCard from '../components/review/Comp_ReviewProfileCard';
import {updateReviewPage} from '../context/Slice_hospitals';
import CompReciptCard from '../components/review/Comp_ReciptCard';
import setHeader from '../libs/Lib_setHeader';

const PageReviewList = ({route, navigation}: NavProps) => {
  const dispatch = useAppDispatch();

  const hospitals = useAppSelector(state => state.hospitals.hospitals);
  const hospital = hospitals[route.params.idx];
  const reviews = hospital?.reviews;

  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const getInfo = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const reviewList = await GetReviewList(hospital.id, hospital.review_page);
      if (reviewList.result.reviews.length === 0) {
        setIsEnd(true);
      }
      if (reviewList.success) {
        dispatch(
          updateReviewPage({
            idx: route.params.idx,
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
  }, [route.params, hospital.id, hospital.review_page, dispatch, isLoading]);

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    setHeader(navigation, hospital.name);
  }, [hospital.name, navigation]);

  const renderHeader = useCallback(() => {
    return (
      <>
        <View style={tw`bg-white p-4 mb-3`}>
          <CompStatCard hospital={hospital} />
        </View>
        <CompReciptCard style={tw`mb-3`} />
      </>
    );
  }, [hospital]);

  const renderLoaderFooter = () => {
    return (
      <View style={tw`py-2`}>
        <ActivityIndicator size={30} color="white" />
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-g3`}>
      <View style={tw`shadow`}>
        {hospital?.treatment_prices_count_per_name && (
          <CompHashList hashList={hospital.treatment_prices_count_per_name} />
        )}
      </View>
      {reviews.length == 0 ? (
        <View style={tw`flex-1 flex-center`}>
          <ActivityIndicator size={30} color="white" />
        </View>
      ) : (
        <FlatList
          removeClippedSubviews
          disableVirtualization={false}
          style={tw`flex-1 bg-g3`}
          data={reviews}
          ListFooterComponent={isLoading ? renderLoaderFooter : undefined}
          onEndReached={async () => {
            if (!isEnd) {
              await getInfo();
            }
          }}
          onEndReachedThreshold={0}
          ListHeaderComponent={renderHeader()}
          renderItem={({item}) => (
            <CompReviewProfileCard review={item} hospital={hospital} />
          )}
          ItemSeparatorComponent={() => <View style={tw`h-3`} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default React.memo(PageReviewList);
