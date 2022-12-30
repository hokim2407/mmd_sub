import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import tw from '../../libs/Lib_Tw';
import CompNotoText from '../common/Comp_NotoText';
import CompStarRate from '../common/Comp_StarRate';
import Check from '../../assets/images/Check.png';
import {color} from '../../configs/Conf_Style';
import CompFoldableText from '../common/Comp_FoldableText';
import CompTreatment from '../review_comp/Comp_Treatment';
import CompHashtag from '../review_comp/Comp_Hashtag';
const CompReviewCard = ({
  review,
  folable = true,
  onPress,
}: {
  review: ReviewType;
  folable?: boolean;
  onPress?: () => void;
}) => {
  const BorderText = ({
    children,
    textColor,
  }: {
    children: React.ReactNode;
    textColor: string;
  }) => {
    return (
      <>
        <View style={tw`w-1 m-1 h-[60%] border-l border-g3`} />
        <CompNotoText style={tw`text-[${textColor}] font-13`}>
          {children}
        </CompNotoText>
      </>
    );
  };
  const revisit = useCallback(() => {
    return (
      review?.suggest === true && (
        <BorderText textColor={color.p4}>재방문 의사 있음</BorderText>
      )
    );
  }, [review?.suggest]);
  const visited_at = useCallback(() => {
    return (
      review?.visited_at !== undefined && (
        <BorderText textColor={color.g6}>{review.visited_at}</BorderText>
      )
    );
  }, [review?.visited_at]);

  return (
    <View style={tw`flex  bg-white py-3`}>
      <View style={tw`flex-row`}>
        <CompHashtag mode="auth" iconSrc={Check}>
          영수증 인증
        </CompHashtag>
      </View>
      {/* 헤더 시작 */}
      <TouchableOpacity style={tw`my-4`} onPress={onPress} activeOpacity={0.5}>
        <CompNotoText style={tw`text-black font-bold text-base font-16`}>
          받은 진료 : {review.treatment_prices[0].name}
        </CompNotoText>
        <View style={tw`flex-row items-center`}>
          <CompStarRate rate={review.total_score} showRate />
          {revisit()}
          {visited_at()}
        </View>
        <CompNotoText style={tw`text-[${color.g6}] font-13`}>
          의사:{review.doctor_name}
        </CompNotoText>
      </TouchableOpacity>
      {/* 헤더 끝 */}

      {/* 리뷰내용 시작 */}
      {folable && (
        <CompFoldableText textStyle={tw`mb-4`} text={review.contents} />
      )}
      {folable || (
        <CompNotoText style={tw`items-center font-14 text-g7 pb-6`}>
          {review.contents}
        </CompNotoText>
      )}
      {/* 리뷰내용 끝 */}

      {/* 치료내역 시작 */}
      <CompTreatment treatments={review.treatment_prices} />
      {/* 치료내역 끝 */}
    </View>
  );
};

export default React.memo(CompReviewCard);
