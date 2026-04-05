import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

const vigilProject = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587682/pth_qkgifg.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587682/psv_elbytq.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587676/po_laelkv.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587677/poo_yctsvm.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587672/pfiv_hdi69b.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587673/pfor_q36v8r.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587683/px_fignk5.png"
]

const NDP = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587751/%D8%B5%D9%88%D8%B1%D8%A920_uvn4sj.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587756/%D8%B5%D9%88%D8%B1%D8%A921_vlbmnm.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587750/%D8%B5%D9%88%D8%B1%D8%A915_n1ovse.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587750/%D8%B5%D9%88%D8%B1%D8%A918_epssta.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587745/%D8%B5%D9%88%D8%B1%D8%A914_gflsnd.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587750/%D8%B5%D9%88%D8%B1%D8%A916_ry47cd.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587744/%D8%B5%D9%88%D8%B1%D8%A912_ow2phl.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587745/%D8%B5%D9%88%D8%B1%D8%A913_hjd9oc.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587739/%D8%B5%D9%88%D8%B1%D8%A910_cyr3uy.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587741/%D8%B5%D9%88%D8%B1%D8%A911_ylazdr.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587737/%D8%B5%D9%88%D8%B1%D8%A97_pm7ils.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587738/%D8%B5%D9%88%D8%B1%D8%A98_ioomui.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587733/%D8%B5%D9%88%D8%B1%D8%A92_zuh61m.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587735/%D8%B5%D9%88%D8%B1%D8%A93_fr8bo5.png",
]

const SimpleLinearRegression = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587642/lrs_cx3vu2.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587647/lrs2_zn87le.png"
]

const SimpleLogisticRegression = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587640/Los_kkpbyt.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587641/los1_fzci7w.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587641/los2_avi0wj.png"
]

const SimpleSupportVectorMachine = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587727/svm_kllhax.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587730/svm1_zep8vm.png"
]

const SimpleKMeansClustering = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587641/kmeans1_azkcuo.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587637/kmeans_qzxfqy.png"
]

const  LSTMTimeSeries = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587648/lstm1_oa5atl.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587648/lstm_h1dch6.png"
]

const HousepredictDL = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587677/predicthoseDL_oucg9j.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587678/predicthoueDL_pa1xsf.png"

]

const HeartDiseaseClassificationDiff = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587632/heratD_getve5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587632/heratD1_e59qwg.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587636/heratD2_vmbc8e.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587636/heratD3_slmn7w.png"
]

const HeartDiseaseClassification = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587574/Heart1_rwtsr8.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587576/Heart2_igs6zo.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587577/Heart3_knew7r.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587578/Heart4_vfakkl.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587631/Heart6_jk8tye.png"
]

const ShoppingDataClustering = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587472/customer_dataCluster_betasg.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587469/customer_dataCluste1_gpjik0.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587471/customer_dataCluste2_ugqgh5.png"
]

const MovieRecommendation = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587691/recom-sys4_st48cy.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587690/recom-sys3_mehvtt.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587689/recom-sys2_usomdz.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587688/recom-sys1_zjlcu7.png"
]

const ExoplanetDetection = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587727/star4_x58tji.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587726/star3_dxond7.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587726/star2_cvzcoj.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587722/star1_m61bcw.png"
]



const FashionMNIST  = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587535/fashin1_vvuo6b.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587552/fashin2_zojg0p.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587553/fashin3_wvp2io.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587553/fashin4_lixmpl.png"
]

const ForestFire = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587566/forset3_ztdzg8.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587566/forset2_uq1lii.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587565/forset1_qffhnr.png"
]

const FakeNewsDetectio = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587666/news5_fch4i7.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587665/news3_ne7yro.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587666/news4_hig9uu.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587665/news2_efumoe.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587661/news1_zrovu4.png"
]

const CreditCardFraud = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587573/fraud4_lau54f.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587573/fraud3_uoybwj.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587567/fraud2_p2pk1y.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587567/fraud1_etao5n.png"
]

const handWrittendigits = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587474/digit1_d61pfz.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587477/digit2_oixzdy.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587477/digit3_flh8at.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587478/digit4_cm3pmi.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587481/digit5_ry96l0.png"
]

const SimpleSemanticSearchEngine = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587720/SemanticSearchEngine2_pzw1gr.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587720/SemanticSearchEngine1_sqyyei.png"
]

const EarthquakeMagnitudePrediction = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587481/earth1_tpau5v.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587482/earth2_fute5j.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587485/earth3_cyxiah.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587487/earth4_bro1cf.png"
]

const CarFuelConsumptionPrediction = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587559/faul3_rb95td.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587560/faul4_tkslfn.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587560/faul5_ao6knb.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587559/faul2_qhx7kb.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587554/faul1_zzu4v5.png"
]

const MusicPopularityPrediction = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587650/music3_sdwt1m.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587655/music4_smjfyy.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587650/music2_rcmixq.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587648/music1_igrgn6.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587655/music5_hranyg.png"
]

const NearestNeighborsRegression = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587660/NearestNeighborsregression_mwuhtm.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587661/NearestNeighborsregression1_jjnkrw.png"
]

const ModelComparisonRadar = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587688/radar2_fb0rl2.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587683/radar1_cqqee7.png"
]

const AutomaticPatternDiscovery = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587463/AutomaticPatternDiscovery2_jzi1ua.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587462/AutomaticPatternDiscovery1_iankny.png"
]

const SimpleExplainable = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587534/ExplainableAIDashboard3_riqias.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587534/ExplainableAIDashboard2_kiwzz5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587533/ExplainableAIDashboard1_ihtqle.png"
]

const AirbnbPricePrediction = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587461/airbnb5_x8ldq9.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587461/airbnb1_fktmu8.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587461/airbnb2_jizsx0.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587462/airbnb3_qqhk0l.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587463/airbnb4_fimysw.png"
]


const CaliforniaHousePrice = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587463/calPredicthouse2_q8gpq5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587467/calPredicthouse3_q43cih.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587468/calPredicthouse4_ilo4t5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587463/calPredicthouse1_uxotjg.png"
]

const NearestNeighborsClassification = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587656/NearestNeighborsClassification1_zo7n4u.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587656/NearestNeighborsClassification_dwzzfb.png"
]

const OutlierDetection = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587670/Outlierdetection1_lyuqdi.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773587670/Outlierdetection_cbrzfy.png"
]


const NewsEntity  = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773653554/nlpa3_yznpmk.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773653546/nlpa1_cihr9t.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773653545/nlpa2_inw81m.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773653547/nlpa4_oedf1j.png"
]

const ProductDemandForecasting = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738813/store3_h8lctd.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738817/store4_cqpzx3.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738807/store1_pbq9iz.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738820/store5_hvibtk.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738812/store2_jnmaak.png"
]
const AuthorIdentification = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738823/author1_beonsi.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738824/author2_hzsw60.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738824/author3_y81ttv.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773738809/author4_lz9w47.png"
]
const BrainTumorDetection = [
    "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744199/brainCnn1_phglpm.png",
    "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744200/brainCnn2_vbefun.png",
    "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744197/brainCnn3_xcp28s.png",
    "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744198/brainCnn4_cmtyz4.png",
    "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744197/brainCnn5_pueu5o.png"
]
const BrainTumorDetectionWeb = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744200/webBrain6_grbiwv.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744200/webBrain7_u8xxpw.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744199/webBrain4_bof6w5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744201/webBrain5_gtufss.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744198/webBrain2_fkf7jc.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744198/webBrain3_m4twlu.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773744197/webBrain1_r77imu.png"
]


const SpamTextClassification  = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773843128/emailC2_vpoggm.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773843129/emailC1_telj34.png"
]


const objectDetectionWebApp = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919473/yolo5_a8oxsu.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919473/yolo6_acw5rr.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919470/yolo7_mhgylx.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919470/yolo2_wbslki.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919467/yolo3_sd2938.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919465/yolo1_yhp3kw.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919466/yolo4_anamxk.png"
]
const carSales = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919468/carsales2_uwytbl.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1773919457/carsales1_bmzefo.png"
]
const BackgroundRemoval = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036509/rembg1_mmwasa.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036514/rembg2_vwjho7.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036509/rembg3_cbb3uk.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036514/rembg4_nhpres.png"
]

const SimpleObjectDetection = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036515/od1_ffdxl8.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036507/od2_dkabpn.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774036506/od3_mpb8wm.png"
]

const MotionDetectionWeb = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774084268/move1_alt591.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774084269/move3_ehd4wn.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774084268/move2_jmzteq.png"
]

const ExplainableAIDashboard = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774163733/explainAl4_m52ux8.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774163733/explainAl5_itmfzi.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774163732/explainAl1_jncx3r.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774163732/explainAl3_ln42at.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774163732/explainAl2_knquar.png"
]



const BiasRadar = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774177476/bias2_cdhkgh.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774177477/bias3_dozb57.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774177476/bias1_duchpw.png"
]


const MedicalAnomalyDetection = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/nomialy1_qwbckd.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/nomialy2_b3o22v.png"
]

const ChronicKidneyDisease = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/kidney1_ryzlkb.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/kidney2_tqasrn.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/kidney3_yfrrm4.png"
]

const DecisionBoundaryin3D = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774207583/bound3d1_xrnweo.png"
]

const UrbanCrimeIntelligence = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774250372/map1_vibd2k.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774250376/map2_cealug.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774250369/map3_ndmegz.png"
]

const StreamSenseAI = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774256769/stream1_nc937i.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774256776/stream2_atysqc.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774256777/stream3_vroylt.png"
]

const brainTumorImages = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774423061/brainTomur1_n1s6ki.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774423061/brainTomur2_idgqte.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774423061/brainTomur3_jqnrlh.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1774423061/brainTomur4_yrf7si.png"
]
const LiverTumorSegmentation = [
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1775392448/liver1_rqcbh5.png",
  "https://res.cloudinary.com/dcfwytnk4/image/upload/v1775392448/liver2_dfgatb.png"
]



type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  status?: 'live' | 'in-progress';
};

const projects: Project[] = [
    {
      title: "Brain Tumor 3D Segmentation",
      description: "An ongoing research project focused on segmenting brain tumors from 3D MRI scans using deep learning techniques. The goal is to build accurate and robust medical image segmentation models.",
      tags: ["Deep Learning", "Medical",],
      images: brainTumorImages, 
      githubUrl: "#",
      liveUrl: "#",
      status: "in-progress"
    },
      {
    title: "Brain Tumor Detection with CNN",
    description: "A deep learning project that classifies brain MRI images into tumor or no tumor categories using a Convolutional Neural Network (CNN). The model preprocesses images, learns important features automatically, and predicts the presence of tumors with high accuracy.",
    tags: ["Deep Learning" , "Medical"],
    images:BrainTumorDetection,
    githubUrl: "https://github.com/AL-Hourani/brain-tumor-detection-cnn",
    liveUrl: "#",
    status: "live"
   },
    {
    title: "Deep Learning-Based Liver Tumor Segmentation",
    description: "A deep learning project using U-Net to segment liver and tumor regions from CT images, combined with 3D visualization for enhanced medical analysis",
    tags: ["Deep Learning" , "Medical"],
    images: LiverTumorSegmentation,
    githubUrl: "https://github.com/AL-Hourani/customer-shopping-clustering",
    liveUrl: "",
    status: "live"
  },
    {
    title: "Shopping data clustering for customers",
    description: "An unsupervised machine learning model that analyzes shopping behavior and groups customers into clusters using Scikit-Learn clustering algorithms to discover hidden purchasing patterns.",
    tags: ["sklearn"],
    images: ShoppingDataClustering,
    githubUrl: "https://github.com/AL-Hourani/customer-shopping-clustering",
    liveUrl: "",
    status: "live"
  },
    {
    title: "Movie Recommendation System",
    description: "Build a collaborative filtering system to suggest movies to users based on their ratings and similarity with other users",
    tags: ["sklearn"],
    images: MovieRecommendation,
    githubUrl: "https://github.com/AL-Hourani/movie-recommendation-system",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Object Detection Web App ",
    description: "Web application for object detection using YOLOv8 and Streamlit. Upload an image, detect objects, and visualize results with confidence scores.",
    tags: ["Computer Vision"],
    images: objectDetectionWebApp,
    githubUrl: "https://github.com/AL-Hourani/object-detection-web-app-yolov8",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Urban Crime Intelligence Dashboard",
    description: "An advanced geospatial dashboard that visualizes real-world crime data using interactive maps, heatmaps, and filtering tools to identify high-risk areas and patterns.",
    tags: ["Data Analysis"],
    images: UrbanCrimeIntelligence,
    githubUrl: "",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Product Demand Forecasting Using Machine Learning",
    description: "This project builds a machine learning system to forecast future product demand based on historical sales data. It uses time series analysis and regression models to learn patterns in product sales and predict future demand. The project includes data preprocessing, exploratory data analysis, visualization using Matplotlib, and training predictive models with Scikit-learn.",
    tags: ["sklearn"],
    images: ProductDemandForecasting,
    githubUrl: "https://github.com/AL-Hourani/product-demand-forecasting",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Explainable AI Dashboard",
    description: "An interactive dashboard that visualizes and explains machine learning model predictions using SHAP and LIME, helping users understand feature importance and model behavior.",
    tags: ["sklearn" , "Medical"],
    images: ExplainableAIDashboard,
    githubUrl: "https://github.com/AL-Hourani/xai-model-interpretation-app",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Background Removal Web App",
    description: "AI-powered web app for background removal using U²-Net and Streamlit. Upload images, remove backgrounds, customize new backgrounds, and download results.",
    tags: ["Deep Learning"],
    images: BackgroundRemoval,
    githubUrl: "https://github.com/AL-Hourani/background-removal-web-app",
    liveUrl: "#",
    status: "live"
  },

    {
    title: "Brain Tumor Detection Web App",
    description: "A web application that allows users to upload brain MRI images and uses a trained Convolutional Neural Network (CNN) to automatically detect the presence of brain tumors, providing predictions with confidence scores in real-time.",
    tags: ["React"],
    images: BrainTumorDetectionWeb,
    githubUrl: "https://github.com/AL-Hourani/Brain-Tumor-Detection-Web-App",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "StreamSense AI: Real-Time Data Monitoring System",
    description: "A real-time data streaming dashboard that simulates and visualizes live data updates, enabling continuous monitoring and analysis of dynamic systems",
    tags: ["Data Analysis"],
    images: StreamSenseAI,
    githubUrl: "",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Author Identification Using Machine Learning",
    description: "This project builds a machine learning model that identifies the author of a given text based on writing style. It uses stylometric features such as word frequency, sentence length, and character usage to classify text authors.",
    tags: ["NLP"],
    images: AuthorIdentification,
    githubUrl: "https://github.com/AL-Hourani/author-identification-ml",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Exoplanet Detection using Machine Learning",
    description: "Build a machine learning model to detect exoplanets by analyzing the brightness of stars over time. When a planet passes in front of a star, the star’s brightness slightly decreases. This small dip can indicate the presence of a planet.",
    tags: ["sklearn"],
    images: ExoplanetDetection,
    githubUrl: "https://github.com/AL-Hourani/exoplanet-detection-ml",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Spam Text Classification Using Machine Learning",
    description: "The system uses Natural Language Processing techniques to analyze the text and identify patterns commonly found in spam messages.",
    tags: ["NLP"],
    images: SpamTextClassification,
    githubUrl: "https://github.com/AL-Hourani/spam-text-classification",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Fashion MNIST Image Classification",
    description: "A machine learning model that classifies grayscale images of clothing items (such as shirts, shoes, and bags) into predefined categories using a neural network trained on the Fashion MNIST dataset.",
    tags: ["Deep Learning"],
    images: FashionMNIST,
    githubUrl: "https://github.com/AL-Hourani/fashion-mnist-classification",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Forest Fire Prediction",
    description: "Predict the likelihood of forest fires using meteorological and geographical data. This project is useful for early warning systems in environmental monitoring and disaster management.",
    tags: ["sklearn"],
    images: ForestFire,
    githubUrl: "https://github.com/AL-Hourani/forest-fire-prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Fake News Detection System Using Machine Learning",
    description: "This project uses Natural Language Processing (NLP) and machine learning techniques to analyze news articles and classify them as either real or fake. The model converts text data into numerical features using TF-IDF and trains a classification algorithm such as Logistic Regression to predict the credibility of news content.",
    tags: ["NLP"],
    images: FakeNewsDetectio,
    githubUrl: "",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Credit Card Fraud Detection",
    description: "Predict fraudulent transactions using imbalanced financial datasets. Focus on precision, recall, and anomaly detection methods.",
    tags: ["sklearn"],
    images: CreditCardFraud,
    githubUrl: "https://github.com/AL-Hourani/credit-card-fraud-detection",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Bias Radar",
    description: "A system that detects and visualizes bias in datasets and model predictions using interactive Plotly dashboards.",
    tags: ["sklearn"],
    images: BiasRadar,
    githubUrl: "https://github.com/AL-Hourani/bias-radar-ai",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Recognizing hand-written digits",
    description: "An example showing how the scikit-learn can be used to recognize images of hand-written digits.",
    tags: ["sklearn"],
    images: handWrittendigits,
    githubUrl: "https://github.com/AL-Hourani/handwritten-digit-recognition",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Explainable AI for Chronic Kidney Disease (CKD)",
    description: "A full-stack machine learning system that predicts chronic kidney disease using real clinical data, explains predictions using SHAP, and delivers insights through an interactive Streamlit dashboard.",
    tags: ["sklearn" , "Medical"],
    images: ChronicKidneyDisease,
    githubUrl: "",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Simple Semantic Search Engine with Embeddings",
    description: "A system that retrieves documents based on meaning rather than exact keywords by converting text into vector embeddings and measuring semantic similarity",
    tags: ["NLP"],
    images: SimpleSemanticSearchEngine,
    githubUrl: "https://github.com/AL-Hourani/semantic-search-engine",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "News Entity & POS Analysis",
    description: "A comprehensive NLP project that analyzes news articles to extract entities, parts of speech, and word frequencies.The project visualizes linguistic patterns using Matplotlib and Seaborn, making it easy to explore the text data and spot trends",
    tags: ["NLP"],
    images: NewsEntity,
    githubUrl: "https://github.com/AL-Hourani/news-entity-pos-analysis",
    liveUrl: "#",
    status: "live"
  },

    {
    title: "Earthquake Magnitude Prediction Using Machine Learning",
    description: "This project focuses on analyzing earthquake data and building a machine learning model to predict earthquake magnitude based on geological features such as depth, latitude, and longitude.",
    tags: ["sklearn"],
    images: EarthquakeMagnitudePrediction,
    githubUrl: "https://github.com/AL-Hourani/earthquake-magnitude-prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Car Fuel Consumption Prediction Using Machine Learning",
    description: "This project focuses on predicting a car’s fuel consumption based on several vehicle characteristics such as engine size, horsepower, weight, and the number of cylinders. The goal is to build a machine learning model that can estimate how much fuel a vehicle will consume under normal conditions",
    tags: ["sklearn"],
    images:CarFuelConsumptionPrediction,
    githubUrl: "https://github.com/AL-Hourani/car-fuel-consumption-prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Car Price Prediction Using Machine Learning",
    description: "Predict car prices using machine learning based on features such as brand, color, mileage, and number of doors.",
    tags: ["sklearn"],
    images:carSales,
    githubUrl: "https://github.com/AL-Hourani/Car-Price-Prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Music Popularity Prediction Using Machine Learning",
    description: "This project focuses on predicting the popularity of songs based on their audio features such as tempo, energy, danceability, loudness, and acousticness. By analyzing these musical characteristics, the model learns patterns that are commonly associated with popular songs",
    tags: ["sklearn"],
    images: MusicPopularityPrediction,
    githubUrl: "https://github.com/AL-Hourani/music-popularity-prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Nearest Neighbors regression",
    description: "A regression model built with the K-Nearest Neighbors algorithm that predicts continuous values by analyzing similarity between data points and evaluating prediction accuracy.",
    tags: ["sklearn"],
    images: NearestNeighborsRegression,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Machine Learning Model Comparison using Radar Chart",
    description: "Train multiple machine learning models on a real dataset, evaluate them using metrics such as Accuracy, Precision, Recall, F1-Score, and ROC-AUC, and visualize the performance comparison using a Radar Chart to quickly identify the strengths and weaknesses of each model",
    tags: ["sklearn"],
    images: ModelComparisonRadar,
    githubUrl: "https://github.com/AL-Hourani/model-comparison-rada",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Simple Automatic Pattern Discovery in High-Dimensional Data",
    description: "A machine learning system that automatically discovers hidden structures and clusters in complex high-dimensional datasets using modern manifold learning and density-based clustering.",
    tags: ["sklearn" ],
    images: AutomaticPatternDiscovery,
    githubUrl: "https://github.com/AL-Hourani/high-dimensional-pattern-discovery",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Simple Explainable AI Dashboard",
    description: "A system that explains machine learning model predictions by showing which features influenced the decision using explainability techniques.",
    tags: ["sklearn"],
    images:SimpleExplainable,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Airbnb Price Prediction",
    description: "Predicting Airbnb rental prices based on multiple features such as number of bedrooms, bathrooms, minimum nights, and guest capacity. This project demonstrates data analysis, feature engineering, regression modeling, and visualization.",
    tags: ["sklearn"],
    images: AirbnbPricePrediction,
    githubUrl: "https://github.com/AL-Hourani/airbnb-price-prediction",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "California House Price Prediction",
    description: "Predict house prices in California using features like location, number of bedrooms, population, and median income. Apply Linear Regression or Gradient Boosting.",
    tags: ["sklearn"],
    images: CaliforniaHousePrice,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  //   {
  //   title: "Spam Email Cassification",
  //   description: "Classify emails as spam or ham using text features. Use NLP techniques like TF-IDF and classifiers like Multinomial Naive Bayes.",
  //   tags: ["python", "sklearn"],
  //   images: [PredictCalefoHose4 , PredictCalefoHose3 , PredictCalefoHose2 , PredictCalefoHose1],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   status: "live"
  // },
    {
    title: "Nearest Neighbors Classification",
    description: "A supervised learning model using the K-Nearest Neighbors algorithm to classify data points based on the closest labeled examples in the dataset.",
    tags: ["sklearn"],
    images: NearestNeighborsClassification,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Medical Anomaly Detection & Patient Risk Monitorin",
    description: "A real-world system that detects abnormal patient patterns in medical data and continuously monitors risk using unsupervised machine learning and interactive 3D visualizations in a Streamlit dashboard",
    tags: ["Deep Learning" , "Medical"],
    images: MedicalAnomalyDetection,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
   {
    title: "Outlier detection",
    description: "A machine learning system designed to detect abnormal or rare data points in datasets using anomaly detection techniques implemented with Scikit-Learn.",
    tags: ["sklearn"],
    images:OutlierDetection,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using sklearn",
    description: "A machine learning model that classifies heart disease presence based on medical features using Scikit-Learn classification algorithms, with performance evaluation and visualization.",
    tags: ["sklearn"],
    images: HeartDiseaseClassification,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using different sklearn algorithms",
    description: "A comparative study of multiple classification algorithms (Logistic Regression, SVM, KNN, Decision Tree, etc.) to identify the most effective model for heart disease prediction.",
    tags: ["sklearn"],
    images: HeartDiseaseClassificationDiff,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "House predict using Deep learning",
    description:"A deep learning model built with Keras to predict house prices based on numerical features, demonstrating neural network training, evaluation, and prediction accuracy",
    tags: ["Deep Learning"],
    images:HousepredictDL,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "LSTM Time Series Prediction",
    description: "A practical implementation of an LSTM network for time series forecasting, showing how sequential data patterns are learned and used to predict future values.",
    tags: ["LSTM"],
    images: LSTMTimeSeries,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple K-Means Clustering using Scikit-Learn",
    description: "An introductory implementation of the K-Means clustering algorithm for unsupervised learning, including cluster visualization and interpretation.",
    tags: ["sklearn"],
    images: SimpleKMeansClustering,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Decision Boundary in 3D",
    description: "An interactive 3D visualization that reveals how a machine learning model separates data by mapping its decision regions across a three-dimensional feature space using Plotly.",
    tags: ["sklearn"],
    images: DecisionBoundaryin3D,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Support Vector Machine (SVM) using Scikit-Learn",
    description: "A classification model using Support Vector Machines that demonstrates data separation, decision boundaries, and margin visualization.",
    tags: ["sklearn"],
    images: SimpleSupportVectorMachine,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Motion Detection Web App",
    description: "Real-time motion detection web app using OpenCV and Streamlit with start/stop control, live video streaming, and automatic recording on motion detection.",
    tags: ["Computer Vision"],
    images: MotionDetectionWeb ,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Logistic Regression using Scikit-Learn",
    description: "A binary classification example using Logistic Regression, highlighting probability estimation and decision boundary visualization.",
    tags: ["sklearn"],
    images: SimpleLogisticRegression,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Object Detection",
    description:"A Simple Object Detection using YOLOv8 for images and videos" ,
    tags: ["Computer Vision"],
    images: SimpleObjectDetection,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "service health monitor (VIGIL)",
    description: "A monitoring system built with Go for tracking the availability and performance of critical services. Provides real-time alerts, logs, and dashboards to ensure system reliability and rapid issue resolution.",
    tags: ["React", "Golang"],
    images:vigilProject,
    githubUrl: "#",
    liveUrl: "#",
    status: "in-progress"
  },

  {
    title: "National Diabetes Program (NDP)",
    description: "A comprehensive platform designed to support the registration, management, and monitoring of diabetic patients.",
    tags: ["React", "Golang"],
    images: NDP,
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },


];



const Projects = () => {

  const [techFilter, setTechFilter] = useState("all");
  const technologies = ["all", ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects =
  techFilter === "all"
    ? projects
    : projects.filter((project) =>
        project.tags.includes(techFilter)
      );

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-24">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>

          <p className="text-github-text opacity-80">
            Explore some of my recent work and machine learning projects.
          </p>
          <p className="text-github-text opacity-80">
            Click any project to show more data and images
          </p>

          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
          {/* Projects count */}
      
        </div>
        {/* Projects count */}
        <div className="text-sm text-github-text w-full flex items-center justify-center  my-4 opacity-80 mb-4 text-center md:text-left">
            Showing {visibleProjects > filteredProjects.length ? filteredProjects.length : visibleProjects} of {filteredProjects.length} projects
        </div>


   {/* MOBILE FILTER (SELECT) */}
<div className="mb-10 md:hidden">



  <h3 className="text-sm text-github-text mb-3">
    Filter by Technology
  </h3>

  <select
    value={techFilter}
    onChange={(e) => {
      setTechFilter(e.target.value);
      setVisibleProjects(6);
    }}
    className="w-full px-4 py-3 rounded-lg bg-github-medium border border-github-medium text-white"
  >
    {technologies.map((tech) => (
      <option key={tech} value={tech}>
        {tech}
      </option>
    ))}
  </select>

</div>


{/* DESKTOP FILTER (BUTTONS) */}
<div className="hidden md:flex flex-wrap gap-3 justify-center mb-12">

  {technologies.map((tech) => (

    <button
      key={tech}
      onClick={() => {
        setTechFilter(tech);
        setVisibleProjects(6);
      }}
      className={`px-4 py-2 text-sm rounded-full border transition
      ${
        techFilter === tech
          ? "bg-github-accent text-white border-github-accent"
          : "border-github-medium hover:border-github-accent"
      }`}
    >
      {tech}
    </button>

  ))}

</div>
  

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.slice(0, visibleProjects).map((project, index) => (

            <Card
              key={index}
              onClick={() => openProject(project)}
              className="cursor-pointer group overflow-hidden bg-github-medium border border-github-medium hover:border-github-accent transition duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {project.status && (
                  <span
                    className={`absolute top-3 right-3 text-xs px-2 py-1 rounded text-white
                    ${project.status === "live" ? "bg-green-500" : "bg-yellow-500"}`}
                  >
                    {project.status === "live" ? "Live" : "In Progress"}
                  </span>
                )}

              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                <h3 className="text-lg font-semibold group-hover:text-github-accent transition">
                  {project.title}
                </h3>

                <p className="text-sm  text-github-text opacity-80 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-github-dark text-github-accent"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </Card>

          ))}

        </div>


        {/* Load More */}
        {visibleProjects < filteredProjects.length && (

          <div className="text-center mt-14">

            <button
              onClick={() => setVisibleProjects((prev) => prev + 6)}
              className="px-6 py-3 bg-github-accent text-white rounded-lg hover:opacity-90 transition"
            >
              Load More Projects
            </button>

          </div>

        )}


        {/* Modal */}
        {selectedProject && (

          <div   className="fixed inset-0  bg-black/80 flex items-center justify-center z-50 p-6">
              <div className="bg-github-medium max-w-6xl w-full rounded-xl overflow-hidden relative">

  

                    <div className="grid md:grid-cols-2">

                  


                      {/* RIGHT SIDE (IMAGES) */}
                      <div className="relative bg-black flex items-center justify-center">

                        <img
                          src={selectedProject.images[imageIndex]}
                          className="w-full h-[420px] object-contain"
                        />

                        {/* arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                        >
                          <ChevronLeft />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                        >
                          <ChevronRight />
                        </button>


                        {/* dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

                          {selectedProject.images.map((_, i) => (
                            <span
                              key={i}
                              onClick={() => setImageIndex(i)}
                              className={`w-3 h-3 rounded-full cursor-pointer
                              ${i === imageIndex ? "bg-github-accent" : "bg-gray-500"}`}
                            />
                          ))}

                        </div>

                        

                      </div>
                          {/* LEFT SIDE (DESCRIPTION) */}
                      <div className="p-8 space-y-6 flex flex-col justify-center">

                        <h3 className="md:text-3xl text-xl font-bold">
                          {selectedProject.title}
                        </h3>

                        <p className="text-github-text hidden md:block opacity-80 leading-relaxed">
                          {selectedProject.description}
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {selectedProject.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded bg-github-dark text-github-accent"
                            >
                              {tag}
                            </span>
                          ))}

                        </div>

                        <div className="flex gap-6 pt-4">

                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            className="flex items-center gap-2 hover:text-github-accent"
                          >
                            <Github size={18} />
                            View Code
                          </a>

                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            className="flex items-center gap-2 hover:text-github-accent"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>



                        </div>
                                                   <Button
                              onClick={closeProject}
                              variant="outline"
                              className="border-github-accent text-github-accent flex gap-2"
                            >
                              Close
                            </Button>

                      </div>

                    </div>

                  </div>
          </div>

        )}

      </div>

    </section>
  );
};

export default Projects;