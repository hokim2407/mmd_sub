type NavProps = NativeStackScreenProps<NavParamList, string>;

declare module '*.png';
declare module '*.jpg';

declare module '@env' {
  export const API_KEY: string;
}

interface CustomerType {
  id: number;
  // 유저의 프로필 사진
  profile_image: string;
  // 유저의 닉네임
  nickname: string;
  // 유저가 작성한 리뷰의 갯수
  review_cnt: number;
  // 유저가 작성한 리뷰의 liked_cnt 값의 총합
  liked_cnt: number;
}

interface TreatmentType {
  name: string;
  price: string;
}

interface ReviewType {
  id: number;
  customer: CustomerType;
  hospital_id: number;
  hospital_name: string;
  doctor_id: number;
  doctor_name: string;
  total_score: number;
  // 청결함에 대한 점수
  score_service_clarity: number;
  // 직원의 친절함에 대한 점수
  score_service_kindness: number;
  // 의사의 친절함에 대한 점수
  score_treatment_explain: number;
  // 진료의 효과에 대한 점수
  score_treatment_outcome: number;
  // 리뷰 등록 시점
  registered_at: string;
  // 리뷰를 작성한 병원 방문 시점
  visited_at: string;
  // 리뷰에 기재된 진료 항목
  treatment_prices: TreatmentType[];
  // 리뷰 내용, 콘텐츠
  contents: string;
  // 해당 병원을 추천는지 여부. True면 재방문 의사가 있다고 간주합니다.
  suggest: boolean;
  // 리뷰에 '도움됐어요' 버튼을 누른 유저의 수
  liked_cnt: number;
  // 해당 리뷰에 '도움됐어요' 버튼을 눌렀는지 여부
  already_liked: boolean;

  // 페이지 표시를 위한 추가정보
  idx: number;
}

interface TreatmentPerNameType {
  name: string;
  count?: number;
}

interface HashType extends TreatmentPerNameType {
  id: string | number;
  icon?: ImageSourcePropType;
}
interface ScoreType {
  // 병원의 청결함에 대한 점수
  score_service_clarity: number;
  // 병원 직원의 친절에 대한 점수
  score_service_kindness: number;
  // 병원 의사의 친절에 대한 점수
  score_treatment_explain: number;
  // 병원 진료의 효과에 대한 점수
  score_treatment_outcome: number;
}

interface HospitalType extends ScoreType {
  id: number;
  name: string;
  // 병원의 총점 평균. 10점 만점
  total_score: number;
  // 병원의 청결함에 대한 점수
  treatment_prices_count_per_name: TreatmentPerNameType[];

  // 페이지 표시를 위한 추가정보
  idx: number;
  suggest_cnt?: number;
  unsuggest_cnt?: number;
  review_page: number;
  reviews: ReviewType[];
}
