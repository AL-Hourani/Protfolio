import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ipo from "../../public/images/po.png"
import ipot from "../../public/images/poo.png"
import ipor from "../../public/images/pth.png"
import ipof from "../../public/images/pfor.png"
import ipov from "../../public/images/pfiv.png"
import ipx from "../../public/images/px.png"
import ipe from "../../public/images/psv.png"

import im1 from "../../public/images/صورة2.png"
import im2 from "../../public/images/صورة3.png"
import im3 from "../../public/images/صورة7.png"
import im4 from "../../public/images/صورة8.png"
import im5 from "../../public/images/صورة10.png"
import im6 from "../../public/images/صورة11.png"
import im7 from "../../public/images/صورة12.png"
import im8 from "../../public/images/صورة13.png"
import im9 from "../../public/images/صورة14.png"
import im10 from "../../public/images/صورة15.png"
import im11 from "../../public/images/صورة16.png"
import im12 from "../../public/images/صورة18.png"
import im13 from "../../public/images/صورة20.png"
import im14 from "../../public/images/صورة21.png"
import LRS from "../../public/images/lrs.png"
import LRS2 from "../../public/images/lrs2.png"
import LOS from "../../public/images/Los.png"
import LOS1 from "../../public/images/los1.png"
import LOS2 from "../../public/images/los2.png"
import SVM from "../../public/images/svm.png"
import SVM1 from "../../public/images/svm1.png"
import kmeans from "../../public/images/kmeans.png"
import kmeans1 from "../../public/images/kmeans1.png"
import Heart1 from "../../public/images/Heart1.png"
import Heart2 from "../../public/images/Heart2.png"
import Heart3 from "../../public/images/Heart3.png"
import Heart4 from "../../public/images/Heart4.png"
import Heart6 from "../../public/images/Heart6.png"
import lstm from "../../public/images/lstm.png"
import lstm1 from "../../public/images/lstm1.png"
import housePDL from "../../public/images/predicthoseDL.png"
import housePDL1 from "../../public/images/predicthoueDL.png"
import heratD from "../../public/images/heratD.png"
import heratD1 from "../../public/images/heratD1.png"
import heratD2 from "../../public/images/heratD2.png"
import heratD3 from "../../public/images/heratD3.png"
import shopping1 from "../../public/images/customer_dataCluster.png"
import shopping2 from "../../public/images/customer_dataCluste1.png"
import shopping3 from "../../public/images/customer_dataCluste2.png"
import NearestNeighborsregression from "../../public/images/NearestNeighborsregression.png"
import NearestNeighborsregression1 from "../../public/images/NearestNeighborsregression1.png"
import Outlierdetection from "../../public/images/Outlierdetection.png"
import Outlierdetection1 from "../../public/images/Outlierdetection1.png"
import NearestNeighborsClassification from "../../public/images/NearestNeighborsClassification.png"
import NearestNeighborsClassification1 from "../../public/images/NearestNeighborsClassification1.png"
import digtit1 from "../../public/images/digit1.png"
import digtit2 from "../../public/images/digit2.png"
import digtit3 from "../../public/images/digit3.png"
import digtit4 from "../../public/images/digit4.png"
import digtit5 from "../../public/images/digit5.png"

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
    title: "Shopping data clustering for customers",
    description: "An unsupervised machine learning model that analyzes shopping behavior and groups customers into clusters using Scikit-Learn clustering algorithms to discover hidden purchasing patterns.",
    tags: ["python", "sklearn"],
    images: [shopping1 , shopping2 , shopping3],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Recognizing hand-written digits",
    description: "An example showing how the scikit-learn can be used to recognize images of hand-written digits.",
    tags: ["python", "sklearn"],
    images: [digtit1 , digtit2 , digtit3 ,digtit4,digtit5],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Nearest Neighbors regression",
    description: "A regression model built with the K-Nearest Neighbors algorithm that predicts continuous values by analyzing similarity between data points and evaluating prediction accuracy.",
    tags: ["python", "sklearn"],
    images: [NearestNeighborsregression , NearestNeighborsregression1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Nearest Neighbors Classification",
    description: "A supervised learning model using the K-Nearest Neighbors algorithm to classify data points based on the closest labeled examples in the dataset.",
    tags: ["python", "sklearn"],
    images: [NearestNeighborsClassification , NearestNeighborsClassification],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
   {
    title: "Outlier detection",
    description: "A machine learning system designed to detect abnormal or rare data points in datasets using anomaly detection techniques implemented with Scikit-Learn.",
    tags: ["python", "sklearn"],
    images: [Outlierdetection , Outlierdetection1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using sklearn",
    description: "A machine learning model that classifies heart disease presence based on medical features using Scikit-Learn classification algorithms, with performance evaluation and visualization.",
    tags: ["python", "sklearn"],
    images: [Heart1 , Heart2 , Heart3 , Heart4 , Heart6],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using different sklearn algorithms",
    description: "A comparative study of multiple classification algorithms (Logistic Regression, SVM, KNN, Decision Tree, etc.) to identify the most effective model for heart disease prediction.",
    tags: ["python", "sklearn"],
    images: [heratD , heratD1 , heratD2 , heratD3],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "House predict   using Deep learning",
    description:"A deep learning model built with Keras to predict house prices based on numerical features, demonstrating neural network training, evaluation, and prediction accuracy",
    tags: ["python", "keras"],
    images: [housePDL , housePDL1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "LSTM Time Series Prediction",
    description: "A practical implementation of an LSTM network for time series forecasting, showing how sequential data patterns are learned and used to predict future values.",
    tags: ["python", "LSTM"],
    images: [lstm , lstm1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple K-Means Clustering using Scikit-Learn",
    description: "An introductory implementation of the K-Means clustering algorithm for unsupervised learning, including cluster visualization and interpretation.",
    tags: ["python", "sklearn"],
    images: [kmeans , kmeans1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Support Vector Machine (SVM) using Scikit-Learn",
    description: "A classification model using Support Vector Machines that demonstrates data separation, decision boundaries, and margin visualization.",
    tags: ["python", "sklearn"],
    images: [SVM , SVM1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Logistic Regression using Scikit-Learn",
    description: "A binary classification example using Logistic Regression, highlighting probability estimation and decision boundary visualization.",
    tags: ["python", "sklearn"],
    images: [LOS , LOS1 , LOS2],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Linear Regression using Scikit-Learn",
    description:"A basic linear regression model that learns relationships between variables and predicts continuous values, with graphical representation of the regression line." ,
    tags: ["python", "sklearn"],
    images: [LRS , LRS2],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "service health monitor (VIGIL)",
    description: "A monitoring system built with Go for tracking the availability and performance of critical services. Provides real-time alerts, logs, and dashboards to ensure system reliability and rapid issue resolution.",
    tags: ["React", "python", "Golang"],
    images: [ipo , ipe , ipot , ipof , ipx , ipov],
    githubUrl: "#",
    liveUrl: "#",
    status: "in-progress"
  },

  {
    title: "National Diabetes Program (NDP)",
    description: "A comprehensive platform designed to support the registration, management, and monitoring of diabetic patients.",
    tags: ["React", "Golang"],
    images: [im1 , im2 , im3 , im4 , im5 , im6 , im7 ,im8 , im9 , im10 , im11 , im12 , im13 , im14],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },


];

const Projects = () => {
  const { t } = useTranslation();


  // لكل مشروع نخزن الصورة الحالية
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>(
    projects.reduce((acc, project) => {
      acc[project.title] = 0;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleDotClick = (projectTitle: string, index: number) => {
    setCurrentImageIndex((prev) => ({ ...prev, [projectTitle]: index }));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto section-content">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="max-w-2xl mx-auto text-github-text opacity-80">
            {t('projects.description')}
          </p>
          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-github-medium bg-github-medium hover:border-github-accent transition-all duration-300 group relative"
            >
              {/* حالة المشروع */}
              {project.status && (
                <span className={`absolute top-2 right-2 px-2 py-1 text-xs rounded 
                  ${project.status === 'live' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                  {project.status === 'live' ? 'Live' : 'In Progress'}
                </span>
              )}

              {/* عرض الصور */}
              <div className="flex gap-2 overflow-x-auto py-4 px-2 bg-github-darker">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i+1}`}
                    className="object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>

                  {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    currentImageIndex[project.title] === i ? 'bg-github-accent' : 'bg-github-dark'
                  }`}
                  onClick={() => handleDotClick(project.title, i)}
                />
              ))}
            </div>

              {/* محتوى المشروع */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-github-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-github-text opacity-80 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-github-dark text-github-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center pt-4 gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-github-text hover:text-github-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    {t('projects.viewCode')}
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-github-text hover:text-github-accent transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    {t('projects.viewDemo')}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-github-accent hover:underline"
          >
            {t('projects.viewAll')} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;